const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
        type : String,
        require: [true, "Username is required"],
    },
    firstName:{
        type: String,
        minLength: 3,
        maxLength: 30,
    },
    email:{
        type: String,
        unique: true,
    }
},{
    timeStamps: true
});

const User = mongoose.model("User" , userSchema);

module.exports = User;
