import flask
from flask import Flask, request, jsonify,render_template,redirect,url_for
import pandas as pd
import json
import time
import sys
from RecommendMovies import movie
from knnMovieRecommendation import recommendation

app = flask.Flask("__main__")
#CORS(app)

@app.route("/")
def my_index():
    return flask.render_template("index.html",token="Hello React")


@app.route("/recommendation")
def recomm():
    return flask.render_template('index.html', token = ans)


# @app.route("/knn", methods = ['POST','GET'])
# def knn():
#     movieID = request.form["movie"]
#     print(movieID)
#     recommend = knn(movieID)
#     ans = ""
#     for i in recommend:
#         ans += i
#         ans += " "
#     ans = ans[0:len(ans)-1]
#     return render_template('index.html', token = ans)


@app.route("/generator", methods =['POST','GET'])
def generate():
    movieId = request.form["movie"]
    rating = request.form["rating"]
    print(request.form)
    print(movieId, rating )
    movieId = str(movieId)
    rating = str(rating)
    movieList = []
    movieList.append(movieId)
    ratingList = []
    ratingList.append(rating)
    #recommend = movie(movieList, ratingList)
    recommend = recommendation(movieId,rating)
    print(recommend)
    ans = ""
    for i in recommend:
        ans += str(i)
        ans += " "
    ans = ans[0:len(ans)-1]
    #return redirect(url_for('recommendation'), ans)
    return render_template('index.html', token = ans)


@app.route("/personalized", methods =['POST','GET'])
def personalized():
    movieId = request.form["movie"]
    rating = request.form["rating"]
    print(movieId, rating )
    movieId = str(movieId)
    rating = str(rating)
    movieList = []
    movieList.append(movieId)
    ratingList = []
    ratingList.append(rating)
    recommend = movie(movieList, ratingList)
    print(recommend)
    ans = ""
    for i in recommend:
        ans += i
        ans += " "
    #return redirect(url_for('recommendation'), ans)
    return render_template('index.html', token = ans)

if __name__ == "__main__":
    app.run(debug = True)



# @app.route('/generator/Similar',methods=['POST'])
# def item_colaborativefiltering():
#     userID = request.json["userID"]
#     user_ratings = request.json["ratings"]
#     recommender_type = request.json["recommender_type"]
#     print("user id = ", userID)
#     print("user_ratings = ", user_ratings)
#     print("recommender_type = ", recommender_type)
#     user_ratings = json.loads(user_ratings)
#     user_ratings = counvert_ratings_to_tuple_format(user_ratings)  
#     print("user Rating in tuple format = ", user_ratings)
#     userID = add_user_to_dataset(userID, user_ratings)
#     recommendations = colaborativeFiltering_ItemBased(user_ratings, userID)
#     print(recommendations)
#     reset_files()
#     return jsonify(recommendations)

# @app.route('/generator/Personalized',methods=['POST'])
# def user_colaborativefiltering() :
#     userID = request.json["userID"]
#     user_ratings = request.json["ratings"]
#     print("user id = ", userID)
#     print("user_ratings = ", user_ratings)
#     user_ratings = json.loads(user_ratings)
#     user_ratings = counvert_ratings_to_tuple_format(user_ratings)  
#     userID = add_user_to_dataset(userID, user_ratings)
#     recommendations = colaborativeFilering_UserBased(user_ratings, userID)
#     print(recommendations)
#     reset_files()
#     return jsonify(recommendations)
