const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
        required: true
    },
    public: {
        type: Boolean,
        default: true,
    },
    agency: {
        type: Boolean,
        default: false
    },
    gov: {
        type: Boolean,
        default: false
    }
});

var User = mongoose.model('user', userSchema);
module.exports = User;