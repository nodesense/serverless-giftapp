set -x

aws cloudformation package --template-file samTemplate.yaml --s3-bucket codepipeline-serverless-giftapp --output-template-file outputSamTemplate.yaml
#aws cloudformation delete-stack --stack-name OpenSense-StagingStack

aws cloudformation deploy --template-file /Users/krish/aws/serverless-giftapp/outputSamTemplate.yaml --stack-name ProdStack --capabilities CAPABILITY_NAMED_IAM