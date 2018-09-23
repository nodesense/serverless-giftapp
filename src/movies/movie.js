const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-southeast-1",
 // "accessKeyId": "", 
 // "secretAccessKey": "",
 // endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

exports.getMovies = (params) => {
    return new Promise((resolve, reject) => {

            docClient.query(params, function(err, data) {
                if (err) {
                    console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
                    reject(err)
                } else {
                    console.log("Query succeeded.");
                    data.Items.forEach(function(item) {
                        console.log(" -", item.year + ": " + item.title);
                    });
 
                    resolve(data.Items); 
                }
            });

    });
}


exports.getMovie = (params) => {
    return new Promise((resolve, reject) => {

            docClient.get(params, function(err, data) {
                if (err) {
                    console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
                    reject(err)
                } else {
                    console.log("Query succeeded.", data.Item);
                    // data.Items.forEach(function(item) {
                    //     console.log(" -", item.year + ": " + item.title);
                    // });
 
                    resolve(data.Item); 
                }
            });

    });
}