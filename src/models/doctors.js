const mongoose = require("mongoose")
const doctorSchema = new mongoose.Schema({
    username: String,
    phoneNo: Number,
    email: String,
    password: String,
    rating: Number,
    totalCalls: Number,
    education: String,
    speciality: String,
    gender: String,
    location: String,
    charge: String,
    businessHours: {
        Monday: String,
        Tuesday: String,
        Wednesday: String,
        Thursday: String,
        Friday: String,
        Saturday: String,
        Sunday: String
    }
});

module.exports = mongoose.model("doctor",doctorSchema)