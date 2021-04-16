const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aGetSchema = new Schema({
    // aGet: String,
    username: {type:String, required:true},
    what: {type:String, required:true},
    howMany: {type:Number, required:true},
    description: {type:String, required:true, minlength:3},
    category: {type: String, required: true},
    needNow: {type:Boolean, required: true},
    needLater: {type: Boolean, required: true},
    email: {type:String, required:true }
//             howMany: '',
//             category: '',
//             needNow: '',
//             needLater: '',
//             email: '',
    // created_date: {type: Date, default: Date.now},
    // replies: [{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: "Reply"
    // }],
    // user: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // }
}, {
    timestamps: true
})

const aGet = mongoose.model('aget', aGetSchema)

module.exports = aGet