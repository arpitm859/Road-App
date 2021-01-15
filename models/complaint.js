const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    datetime:{
        type:Date,
        required: true
    },
    title: {
        type:String,
        required:true
    },
    body: String,
    status: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
    },
    resolved: {
        type: Boolean,
        default: false
    },
    backer: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'user',
        default: []
    }
}, {
    timestamps: true
})

var Complaint = mongoose.model('complaint', complaintSchema);
module.exports = Complaint;