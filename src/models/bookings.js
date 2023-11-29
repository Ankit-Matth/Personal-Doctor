const mongoose = require("mongoose")
const bookingSchema = new mongoose.Schema({
    userName: String,
    phoneNo: Number,
    email: String,
    docUserName: String,
    date: String,
    time: String,
    description: String,
    isAccepted: String
});

module.exports = mongoose.model("booking",bookingSchema)