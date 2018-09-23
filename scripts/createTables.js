const Movie = require('../src/movies/movie');

Promise.all([
        Movie.createTable({})
        ])
        .then ( results => {
            console.log('Create Tables done', results)
        })
        .catch(error => {
            console.log('Create Tables failed ', error)
        })