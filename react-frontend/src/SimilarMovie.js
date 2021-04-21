import React from 'react';

function SimilarMovie() {
    return (
        <div>
            <h3>Similar Movies</h3>
            <form action = "http://localhost:5000/generator/Similar" method = "post">
                <p>Enter the movie Name and find similar movie:</p>
                <p><input type = "text" name = "movie" placeholder="Enter the name"/></p>
                <p><input type = "submit" value = "submit" /></p>
            </form>
        </div>
    )
}

export default SimilarMovie;
