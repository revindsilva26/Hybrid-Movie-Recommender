import pandas as pd
import numpy as np
import itertools

def movie_merging(movie):
    movie.drop(index = 0, columns=['movie_name'], inplace= True)
    rating = pd.read_csv('./ml-latest-small/ratings.csv', names=["user_id", "movie_id", "rating", "timestamp"])
    data = pd.merge(rating, movie, on="movie_id")
    data.drop(columns=['user_id', 'timestamp'], inplace=True)
    data['movie_id'] = data['movie_id'].astype(int) 
    data['rating'] = data['rating'].astype(float)
    movie_group = data.groupby('movie_id')
    movies_list_modified = movie_group.first()
    print("Merging has been performed successfully.")
    return movies_list_modified