const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GiveSchema = new Schema({
    username: {type:String, required:true},
    item: {type:String, required: true},
    quantity: {type:Number},
    description: {type:String, required:true},
    category: {type:String, required:true},
    value: {type:Number},
    condition: {type:String},
    availableNow: {type:Boolean, required: true},
    availableLater: {type:Boolean, required: true},
    email: {type:String, required: true},
    // created_date: {type: Date, default: Date.now, required:true},
    // replies: [{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: "Reply"
    // }],
    // user: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // },
},{
    timestamps: true
})

const Give = mongoose.model('Give', GiveSchema)

module.exports = Give