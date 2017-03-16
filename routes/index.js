var express = require('express');
// var router = express.Router();
var router = express.Router();

var Worker = require('../models/worker');

router.get('/',function(req, res) {
    res.render('index');
});
router.get('/about', function (req, res) {
    res.send('about page!Haha');
});
router.get('/about/:name', function (req, res) {
    res.send('about' + req.params.name);
});

router.post('/search', function (req, res) {
    Worker.find({age: 20}, function (err, result) {
        result = 'hi' + result; //当将json数据与string拼接起来时，则成为一个可展示的string。
        res.send(result);
    })
})

router.post('/data',function (req, res) {
    console.log(req.body);
    console.log(req.body.getData == 'true');
    if (req.body.getData == 'true') {
        res.send('sendback data sucess!');
    }
});

module.exports = router;


// 该例子的说明：https://github.com/nswbmw/N-blog/blob/master/book/3.2%20%E8%B7%AF%E7%94%B1.md
