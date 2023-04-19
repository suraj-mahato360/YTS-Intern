const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    tag: { type: String,
            required: [true, "Assign a tag"]},
    task: { type: String,
            required: [true, "Pleasse add the task"] }
})

module.exports = mongoose.model('TASK', taskSchema)