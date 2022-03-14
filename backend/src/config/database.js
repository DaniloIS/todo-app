/*const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongoose://localhost/todo');*/

const mongoose = require("mongoose"); mongoose.Promise = global.Promise; module.exports = mongoose.connect("mongodb://localhost:27017/dbtodo", {     useMongoClient: true,     useNewUrlParser: true,     useUnifiedTopology: true, });