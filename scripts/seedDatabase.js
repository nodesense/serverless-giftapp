const fs = require('fs');
const Movie = require('../src/movies/movie');

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


Promise.all([
    seedMovies('data/moviedata.json')
])
.then( results => {
    console.log("Setup done");
})
.catch( err => {
    console.log("Error", err);
})
