const mongoose = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/samdb";
mongoose.set('useFindAndModify', false);

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
var user_schema = mongoose.Schema({
    name: String,
    age: Number
}, 
{collection: 'user', versionKey: false}
);
module.exports = mongoose.model('user', user_schema);