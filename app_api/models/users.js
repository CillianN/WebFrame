var mongoose = require('mongoose');
const { use } = require('passport');
var Schema = mongoose.Schema;


const userSchema = new Schema({
    username: String,
    password: String

})



User = mongoose.model('User',userSchema);

module.exports = User;