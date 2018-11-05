const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    },
    url: {
        type: String,
        required: true 
    },
    snippet: {
        type: String,
        required: true
    },
    note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
      }]
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;