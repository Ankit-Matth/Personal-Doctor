const mongoose = require("mongoose")
const applicationSchema = new mongoose.Schema({
    yourName: String,
    speciality: String,
    phoneNo: Number,
    email: String,
    vision: String,
    education: String
});

module.exports = mongoose.model("application",applicationSchema)