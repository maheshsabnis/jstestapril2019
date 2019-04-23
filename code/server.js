var express = require('express');
var bodyParser = require('body-parser');

var emps = [{ Eno: 1, Ename: "A" }, { Eno: 2, Ename: "B" }];

var instance = express();
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: false }));

instance.get('/api/message', function (req, resp) {
    resp.send('Hello World');
});

instance.get('/api/emps', function (req, resp) {
    resp.send({status:200,data: JSON.stringify(emps)});
});

instance.post('/api/emps', function (req, resp) {
    try {
        var e = {
            Eno: req.body.Eno,
            Ename: req.body.Ename
        };
        if (e.Eno < 0) throw Error('Eno cannot be -ve');
        emps.push(e);
        resp.send({ status: 200, data: JSON.stringify(emps) });
    }
    catch (e) {
        resp.send({ status: 500, message: e.message });
    }
});

instance.listen(8900, function () {
    console.log('server started on 8900');
});