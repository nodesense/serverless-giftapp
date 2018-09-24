const CategoryModel = require('../models/CategoryModel');

exports.handler = (event, context, callback) => {
    console.log('putCategory handler called')
     
     
    const postData = event.body;

    var response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
        },
        "body": JSON.stringify(postData),
        "isBase64Encoded": false
    };
    callback(null, response);
    
};