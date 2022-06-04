const mongoose = require('mongoose');

const SubmitionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    file_path: {
      type: String,
      required: true
    },
    file_mimetype: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Submition = mongoose.model('Submition', SubmitionSchema);

module.exports = Submition;