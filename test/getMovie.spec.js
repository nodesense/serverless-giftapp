const getMovie = require('../src/movies/getMovie');

getMovie.handler({}, {}, function(err, result) {
    console.log('Error ', err);
    console.log('Result ', result);
})