console.log('Initializing AWS Test Account...')

if ( ! ('AWS_ACCESS_KEY_ID_TEST' in process.env)) {
    console.error("Could not find TEST ACCOUNT FOR TEST set AWS_ACCESS_KEY_ID_TEST Env variable")
    process.exit(-1);
}

if ( ! ('AWS_SECRET_ACCESS_KEY_TEST' in process.env)) {
    console.error("Could not find TEST ACCOUNT FOR TEST, set AWS_SECRET_ACCESS_KEY_TEST Env variable")
    process.exit(-1);
}

if ( ! ('AWS_REGION_TEST' in process.env)) {
    console.error("Could not find TEST ACCOUNT FOR TEST, set AWS_REGION_TEST Env variable")
    process.exit(-1);
}


process.env.AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID_TEST
process.env.AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY_TEST
process.env.AWS_REGION = process.env.AWS_REGION_TEST
