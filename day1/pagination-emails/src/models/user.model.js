const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    age: { type: Number, required: true },
    mobile: {
        type: String,
        required: false
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("user", userSchema);