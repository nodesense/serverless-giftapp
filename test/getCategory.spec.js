const getCategory = require('../src/category/getCategory');
 
describe("getCategory test suites", () => {
    it("getCategory", (done) => {
        getCategory.handler({}, {}, function(err, result) {
            console.log('Error ', err);
            console.log('Result ', result);
            done()
        })
    })
})