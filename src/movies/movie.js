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


exports.putMovie = (params) => {
    return new Promise( (resolve, reject) => {
        docClient.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add movie", ". Error JSON:", JSON.stringify(err, null, 2));
                reject(err)
            } else {
                console.log("PutItem succeeded:", data);
                resolve(data)
            }
        });
    });
}


exports.updateMovie = (params) => {
    return new Promise( (resolve, reject) => {
        docClient.update(params, function(err, data) {
            if (err) {
                console.error("Unable to add movie", ". Error JSON:", JSON.stringify(err, null, 2));
                reject(err)
            } else {
                console.log("PutItem succeeded:", data);
                resolve(data)
            }
        });
    });
}


// BEWARE. Not to be used with handlers
// Build Scripts path

exports.createTable = (params) => {

    return new Promise ( (resolve, reject) => {

            const dynamodb = new AWS.DynamoDB();
            
            var tableDefinition = {
                TableName : "Movies",
                KeySchema: [       
                    { AttributeName: "year", KeyType: "HASH"},  //Partition key
                    { AttributeName: "title", KeyType: "RANGE" }  //Sort key
                ],
                AttributeDefinitions: [       
                    { AttributeName: "year", AttributeType: "N" },
                    { AttributeName: "title", AttributeType: "S" }
                ],
                ProvisionedThroughput: {       
                    ReadCapacityUnits: 10, 
                    WriteCapacityUnits: 10
                }
            };
            
            dynamodb.createTable(tableDefinition, function(err, data) {
                if (err) {
                    console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
                    resolve(data)
                }
            });
    });
}

exports.dropTable = (params) => {
    return new Promise( (resolve, reject) => {

            const dynamodb = new AWS.DynamoDB();

            const tableDefinition = {
                TableName : "Movies"
            };

            dynamodb.deleteTable(tableDefinition, function(err, data) {
                if (err) {
                    console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
                    resolve(data);
                }
            });
    });
}