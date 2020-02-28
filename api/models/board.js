const mongoose = require("mongoose");
const { Schema } = mongoose; 


const boardSchema = new Schema({
  title: String
}, 
{
  versionKey: false
});

module.exports = mongoose.model("Board", boardSchema);
