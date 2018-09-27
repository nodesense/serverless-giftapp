
  ApiGateway:
    Type: AWS::Serverless::Api
    Properties:
      StageName: Prod
      DefinitionBody:
        swagger: "2.0"
        info:
          title: 
            Ref: AWS::StackName
          description: My API that uses custom authorizer
          version: 1.0.0
        securityDefinitions:
          CustomAuthorizer:
            type: apiKey
            name: Authorization
            in: header
            x-amazon-apigateway-authtype: custom
            x-amazon-apigateway-authorizer:
              type: token
              authorizerUri:
                Fn::Sub: arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/${CustomAuthorizerFunction.Arn}/invocations
              authorizerCredentials:
                Fn::Sub: ${ApiGatewayAuthorizerRole.Arn}
              authorizerResultTtlInSeconds: 60
              
        paths:
          "/somepath":
            post:
              security:
                - CustomAuthorizer: []

 paths:
          /my-fn:
            get:
              x-amazon-apigateway-integration:
                httpMethod: GET
                type: aws_proxy
                uri: arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/${GetCategoriesFunction.Arn}/invocations