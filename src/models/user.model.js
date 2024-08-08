const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // phonenumber: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    purchasehistory: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'order',
        default: []
    },
    password: {
        type: String,
        required: true
    }
    ,isverified: {
        type: Boolean,
        default: false
    },
    forgotpasswordtoken: {
        type: String
    },
    forgotpasswordexpires: {
        type: Date
    },
    verifytoken: {
        type: String
    },
    verifytokenexpires: {
        type: Date
    }
});

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model("User", userSchema);
