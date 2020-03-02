const mongoose = require("mongoose");
const { Schema } = mongoose;


const taskSchema = new Schema({
  title: String,
  complete: Boolean,
  list: {type: Schema.ObjectId, ref: "List"},
},
{
  versionKey: false
});

module.exports = mongoose.model("Task", taskSchema);
