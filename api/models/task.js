const mongoose = require("mongoose");
const { Schema } = mongoose;


const taskSchema = new Schema({
  title: String,
  list: {type: Schema.ObjectId, ref: "List", required: true},
},
{
  versionKey: false
});

module.exports = mongoose.model("Task", taskSchema);
