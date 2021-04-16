const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        trim: true 
    },
    email: {
      type: String,
      required: true,
      unique: true  
    },
    password: {
        type:String,
        required: true,  
    },
    firstName: {
        type:String,
        required: false,
        minlength: 3,
        trim: true
    }, 
    lastName: {
        type: String,
        required: false,
        minlength: 2,
    }, 
    streetNumber: {
        type: Number,
        required: false,
        minlength: 1,
        trim: true
    },
    streetName: {
        type: String,
        required: false,
        minlength:5
    },
    unit: {
        type: String,
        minlength: 1,
    },
    city: {
        type: String,
        required: false,
        minlength: 3,
        trim: true //international will need a 1 character min to reach anywhere on earth by name
    },
    state: {
        type: String,
        required: false,
        minlength: 2,
        trim: true
    },
    zipcode: {
        type:String,
        required: false,
        minlength: 5,
        trim: true,
    },
    phoneNumberHome: {
        type: String,
        unique: true,
        minlength: 10,
        trim: true
    }, 
    phoneNumberMobile: {
        type: String,
        unique: true,
        required: false,
        minlength:10,
        trim: true
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    usersGives: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Give"
      }],
    usersGets: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Get"
      }]
}, {
    timestamps: true
})

const User = mongoose.model('User',userSchema)

module.exports = User