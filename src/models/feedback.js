const mongoose = require("mongoose")
const feedbackSchema = new mongoose.Schema({
    userName: String,
    phoneNo: Number,
    description: String
});

module.exports = mongoose.model("feedback",feedbackSchema)