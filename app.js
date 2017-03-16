var express = require('express');
var ejs = require('ejs');
var app = express();
var bodyParser = require('body-parser');

var router = require('./routes/index');

// --------------------------------------mongoDB测试---first try success!!!-----------------------------------------------
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error(tian):'));
// db.once('open', function (callback) {
//     var kittySchema = mongoose.Schema({
//         name: String
//     });
//     kittySchema.methods.speak = function () {
//         var greeting = this.name
//         ? "Meow name is " + this.name
//         : "I don't have a name!";
//         console.log(greeting);
//     }
//
//
//     var Kitten = mongoose.model('Kitten', kittySchema);
//     var silence = new Kitten({name: 'Silence'});
//     console.log(silence.name);
//     var fluffy = new Kitten({ name: 'fluffy'});
//     fluffy.speak();
//
//     fluffy.save(function (err, fluffy) {
//         if(err) return console.error(err);
//         fluffy.speak();
//     });
// });

// --------------------------------------mongoDB测试--------------------------------------------------

app.set('views', __dirname + '/public/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

//这种就是要将.html文件修改为.ejs
// app.set('views', __dirname + '/public/views');// 设置存放模板文件的目录
// app.set('view engine', 'ejs');// 设置模板引擎为 ejs
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(__dirname +'/public'));

app.use('/',router);



router.post('/dbTest',function (req, res) {
    console.log(req.body);
    if (req.body) {
        // res.send(req.body.name);
        db.once('open', function (callback) {

        })
        res.send([req.body,'hello']);
    }
});


var server = app.listen(2121, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('app listening at http://%s:%s', host, port);
});
