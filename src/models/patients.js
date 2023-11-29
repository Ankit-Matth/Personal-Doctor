const mongoose = require("mongoose")
const patientSchema = new mongoose.Schema({
    userName: String,
    phoneNo: Number,
    email: String,
    password: String,
    rating: Number,
    totalCalls: Number
});

module.exports = mongoose.model("patient",patientSchema)