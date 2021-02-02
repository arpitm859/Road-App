const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const complaintSchema = new Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type:String,
        required:true
    },
    description: String,
    status: {
        type: Number,
        default: 0
    },
    complainant: String,
    complainant_address: String,
    complaint_street: String,
    complaint_area: String,
    complaint_pin: Number,
    complaint_landmark: String,
    complaint_city: String,

    complaint_address: String,
    complainant_house_no: String,
    complainant_area: String,
    complainant_pin: Number,
    complainant_landmark: String,
    complainant_city: String,

    lat: Number,
    long: Number,

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