const fs = require('fs');
const Movie = require('../src/movies/movie');
const CategoryModel = require('../src/category/CategoryModel');

console.log("Importing movies into DynamoDB. Please wait.");

function seedMovies(fileName) {
    return new Promise((resolve, reject) => {
            var allMovies = JSON.parse(fs.readFileSync(fileName, 'utf8'));
            allMovies.forEach(function(movie) {
                var params = {
                    TableName: "Movies",
                    Item: {
                        "year":  movie.year,
                        "title": movie.title,
                        "info":  movie.info
                    }
                };

                Movie.putMovie(params, function(err, data) {
                if (err) {
                    console.error("Unable to add movie", ". Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("PutItem succeeded:", data);
                }
                });
            });

            resolve(true)
    })
}



function seedCategories(fileName) {
    return new Promise((resolve, reject) => {
            var allCategories = JSON.parse(fs.readFileSync(fileName, 'utf8'));
            allCategories.forEach(function(category) {
                var params = {
                    TableName: "Categories",
                    Item: {
                        "id":  category.id,
                        "name": category.name
                    }
                };

                CategoryModel.putCategory(params, function(err, data) {
                if (err) {
                    console.error("Unable to add category", ". Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("PutItem succeeded:", data);
                }
                });
            });

            resolve(true)
    })
}


Promise.all([
    //seedMovies('data/moviedata.json'),
    seedCategories('data/categorydata.json')
])
.then( results => {
    console.log("Setup done");
})
.catch( err => {
    console.log("Error", err);
})
