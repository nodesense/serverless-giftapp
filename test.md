aws cloudformation deploy --template-file outputSamTemplate.yaml --stack-name ProdStack --capabilities CAPABILITY_IAM


aws cloudformation deploy --template-file /Users/krish/aws/serverless-giftapp/outputSamTemplate.yaml --stack-name ProdStack --capabilities CAPABILITY_IAM



aws cloudformation package --template-file samTemplate.yaml --s3-bucket codepipeline-serverless-giftapp --output-template-file outputSamTemplate.yaml



aws cloudformation deploy --template-file /Users/krish/aws/serverless-giftapp/outputSamTemplate.yaml --stack-name ProdStack --capabilities CAPABILITY_NAMED_IAM

