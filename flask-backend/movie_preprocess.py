import pandas as pd
import numpy as np
import itertools

def movie_preprocessing(movie):
    #print(movie)
    movie_col = list(movie.columns)
    #print(movie.columns)
    movie_tag = [doc.split('|') for doc in movie['tag']]
    #print(movie_tag)
    tag_table = {token: idx for idx, token in enumerate(set(itertools.chain.from_iterable(movie_tag)))}
    #print(tag_table)
    movie_tag = pd.DataFrame(movie_tag)
    #print(movie_tag)
    tag_table = pd.DataFrame(tag_table.items())
    #print(tag_table)
    tag_table.columns = ['Tag', 'Index']
    #print(tag_table)

    # use one-hot encoding for movie genres (here called tag)
    tag_dummy = np.zeros([len(movie), len(tag_table)])
    print("Performing preprocessing.")

    for i in range(len(movie)):
        for j in range(len(tag_table)):
            if tag_table['Tag'][j] in list(movie_tag.iloc[i, :]):
                tag_dummy[i, j] = 1
    
    #print(tag_dummy)

    # combine the tag_dummy one-hot encoding table to original movie files
    movie = pd.concat([movie, pd.DataFrame(tag_dummy)], 1)
    movie_col.extend(['tag' + str(i) for i in range(len(tag_table))])
    movie.columns = movie_col
    #print(movie)
    movie = movie.drop('tag', 1)
    print("Preprocessing Completed. Returning the processed movies.")
    return movie

