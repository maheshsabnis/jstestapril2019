var expect = require('chai').expect;
var request = require('request');

// the test case take the done parameter
// this represent the callback complete state
// it('should return Hwllo World', function (done) {
//     request('http://localhost:8900/api/message', function (err, rep, body) {
//         expect(body).equal('Hello World');
//     });
//     done();
// });


var emps = [{ Eno: 1, Ename: "A" }, { Eno: 2, Ename: "B" }];

it("should return data when make a get call /emp is made", function (done) {
    request("http://localhost:8900/api/emps", function (error, response, body) {
        console.log(JSON.stringify(body));
        //expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body).data).to.equal(JSON.stringify(emps));
        done();
    });
});

