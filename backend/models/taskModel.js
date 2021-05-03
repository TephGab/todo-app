const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    },
    id: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('task', TaskSchema);