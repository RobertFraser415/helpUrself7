const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
    reply: String,
    gets: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Get"
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Reply = mongoose.model("Reply", ReplySchema);
module.exports = Reply;