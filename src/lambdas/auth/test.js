
exports.handler = (event, context, callback) => {
    console.log('Auth handler called')
     
    var response = {
        "statusCode": 200,
        "headers": {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },

        "body": JSON.stringify( { headers: event.headers, user: event.user}),
        "isBase64Encoded": false
    };
    callback(null, response);
          
};