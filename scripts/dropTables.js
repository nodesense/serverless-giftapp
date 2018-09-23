const Movie = require('../src/movies/movie');

Promise.all([
            Movie.dropTable({})
        ])
        .then ( results => {
            console.log('drop Tables done', results)
        })
        .catch(error => {
            console.log('drop Tables failed ', error)
        })