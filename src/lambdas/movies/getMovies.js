const MovieModel = require('../models/MovieModel');

exports.handler = (event, context, callback) => {
    console.log('getMovies handler called')
    var params = {
        TableName : "Movies",
        KeyConditionExpression: "#yr = :yyyy",
        ExpressionAttributeNames:{
            "#yr": "year"
        },
        ExpressionAttributeValues: {
            ":yyyy": 1985
        }
    };

    MovieModel.getMovies(params)
         .then (movies => {
            var response = {
                "statusCode": 200,
                "headers": {
                    "my_header": "my_value"
                },
                "body": JSON.stringify(movies),
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