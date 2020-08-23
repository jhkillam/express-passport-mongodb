const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String, 
            required: true,
            unique: true
        },
        password: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    { strict: true }
)

module.exports = User = mongoose.model("users", UserSchema)

