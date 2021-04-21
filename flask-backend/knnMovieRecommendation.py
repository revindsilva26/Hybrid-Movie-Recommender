import pandas as pd
import numpy as np
import itertools
from movie_preprocess import movie_preprocessing
from movie_merging import movie_merging
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors,KNeighborsClassifier

def findIndex(movieId, movie_dataframe):
	i = 1
	indexValue = 0
	for i in range(movie_dataframe.shape[0]):
		if str(movie_dataframe.index[i]) == str(movieId):
			indexValue = i
	print("Returning Index Value.")
	return indexValue

def findTmdb(movieList):
	tmdb = []
	for movie in movieList:
		#print(movie)
		file1 = open("./ml-latest-small/links.csv")
		for line in file1:
			val = line.split("\n")[0]
			val1 = val.split(",")
			#print(val1)
			if (movie == val1[0]):
				tmdb.append(val1[2])  
				break
		#print(tmdb)
		file1.close()
	return tmdb

def knn(movie_dataframe, movie_modify, query_index):
	movie_table_matrix = csr_matrix(movie_dataframe.values)
	model_knn = NearestNeighbors(metric = 'cosine', algorithm = 'brute')
	model_knn.fit(movie_table_matrix)
	distances, indices = model_knn.kneighbors(movie_modify.iloc[query_index,:].values.reshape(1,-1), n_neighbors = 11)
	movie_suggested = []
	distance = []

	for i in range(0, len(distances.flatten())):
		if i != 0:
			movie_suggested.append(movie_modify.index[indices.flatten()[i]])
			distance.append(distances.flatten()[i])    

	m=pd.Series(movie_suggested,name='movie')
	d=pd.Series(distance,name='distance')
	recommend = pd.concat([m,d], axis=1)
	recommend = recommend.sort_values('distance',ascending=False)
	print("Returning Recommendations.")
	return recommend	

def recommendation(movieId,rating):
	movie = pd.read_csv("./ml-latest-small/movies.csv", names=['movie_id', 'movie_name', 'tag'])
	movie = movie_preprocessing(movie)
	movie_modify = movie_merging(movie)
	movie_dataframe = pd.DataFrame(movie_modify)
	movieIndex = findIndex(movieId, movie_dataframe)
	query_index = movieIndex
	print("MovieId is : ", movieId)
	print("query index is : ", query_index)
	print("Choosen Movie is: ",movie_modify.index[query_index])
	recommendMovies = knn(movie_dataframe, movie_modify, query_index)
	print('Recommendations for {0}:\n'.format(movie_modify.index[query_index]))
	movieList = []
	for i in range(0,recommendMovies.shape[0]):
		movieList.append(recommendMovies["movie"].iloc[i])
		print('{0}: {1}, with distance of {2}'.format(i, recommendMovies["movie"].iloc[i], recommendMovies["distance"].iloc[i]))
	print(movieList)
	movieRating = int(movie_dataframe.iloc[query_index]['rating'])
	rating = int(rating)
	movList = []
	print(movieRating)
	for mov in movieList:
		movList.append(str(mov))
	print(movList)
	tmdbList = findTmdb(movList)
	print(tmdbList)
	if(movieRating <= rating or (abs(movieRating - rating) <= 1)):
		print(tmdbList[0:5])
		return tmdbList[0:5]
	elif ((abs(movieRating - rating) <= 2)):
		print(tmdbList[3:8])
		return tmdbList[3:8]
	else:
		print(tmdbList[5:])
		return tmdbList[5:]
	return tmdbList

#movies = recommendation(2300,2)
#print(movies)
