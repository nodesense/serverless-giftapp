var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-southeast-1",
 // "accessKeyId": "", 
 // "secretAccessKey": "",
 // endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();


exports.handler =  (event, context, callback) => {
    const value = Math.ceil(Math.random() * 100 )
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!' + value)
    };
        
    
var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Querying for movies from 1985.");

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

docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        callback(JSON.stringify(err, null, 2), null)
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log(" -", item.year + ": " + item.title);
        });

        var response = {
            "statusCode": 200,
            "headers": {
                "my_header": "my_value"
            },
            "body": JSON.stringify(data.Items),
            "isBase64Encoded": false
        };
        callback(null, response);
        
        //callback(null,  JSON.stringify(data.Items))
    }
});

   // return response;
};