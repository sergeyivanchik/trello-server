const mongoose = require("mongoose");
const { Schema } = mongoose; 


const boardSchema = new Schema({
  title: String,
  user: {type: Schema.ObjectId, ref: "User"},
}, 
{
  versionKey: false
});

module.exports = mongoose.model("Board", boardSchema);
