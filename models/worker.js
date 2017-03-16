var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://localhost/company');

// connection.on('error',  console.error.bind(console, 'connection error(tian):'))

var workerSchema = new mongoose.Schema({
	// name: String,
	// age: Number
    name: {type: String},
    age: {type: Number}
});

//添加
//这里面的这个methods是固定的 代表添加实例方法
workerSchema.methods.addWorker = function(worker, callback) {
	this.name = worker.name;
	this.age = worker.age;
	this.save(callback);
}


//这里面的movies是数据库的一个集合
var Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;
