const Movie = require('./movie');

exports.handler = (event, context, callback) => {
    console.log('getMovies handler called')
    

    var table = "Movies";

    var year = 2013;
    var title = "Rush";

    var params = {
        TableName: table,
        Key:{
            "year": year,
            "title": title
        }
    };

    Movie.getMovie(params)
         .then (movie => {
            var response = {
                "statusCode": 200,
                "headers": {
                    "my_header": "my_value"
                },
                "body": JSON.stringify(movie),
                "isBase64Encoded": false
            };
            callback(null, response);
         })
         .catch(err => {
            var response = {
                "statusCode": 500,
                "headers": {
                    "my_header": "my_value"
                },
                "body": JSON.stringify(err),
                "isBase64Encoded": false
            };
            callback(null, response);
         })
};