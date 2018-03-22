var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            //ref refers to the model that we're going to refer to with the object id above
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Comment", commentSchema);