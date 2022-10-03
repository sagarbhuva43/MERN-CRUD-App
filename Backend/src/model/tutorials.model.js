const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, default: false, require: false },
  },
  { timestamps: true, versionKey: false },
);

const User = mongoose.model("tutorial", userSchema);

module.exports = User;
