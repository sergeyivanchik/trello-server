const mongoose = require("mongoose");
const { Schema } = mongoose;


const listSchema = new Schema({
  title: String,
  board: {type: Schema.ObjectId, ref: "Board"},
},
{
  versionKey: false
});

module.exports = mongoose.model("List", listSchema);
