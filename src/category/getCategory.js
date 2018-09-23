const CategoryModel = require('./CategoryModel');

exports.handler = (event, context, callback) => {
    console.log('getCategory handler called')
    
    var table = "Categories";

    var id = 1;
    var name = "Ecommerce";

    var params = {
        TableName: table,
        Key:{
            "id": id,
            "name": name
        }
    };

    CategoryModel.getCategory(params)
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