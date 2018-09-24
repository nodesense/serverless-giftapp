const postCategory = require('../lambdas/category/postCategory');

const assert = require('assert');

describe("postCategory test suites", () => {
    it("postCategory", (done) => {
        const event = {
            body: JSON.stringify({
                 title: "Food 13"
            })
        }
        postCategory.handler(event, {}, function(err, response) {
            console.log('Error ', err);
            console.log('Result ', response);

            const c = JSON.parse(response.body)

            assert.equal(c.title, "Food 13");
            
            done()
        })
    })
})