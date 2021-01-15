const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
        unique: true,
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

UserSchema.plugin(passportLocalMongoose, {
    selectFields: 'email firstName lastName public agency gov'
});

var User = mongoose.model('User', UserSchema);
module.exports = User;