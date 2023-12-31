const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  surname: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: String, required: true },
  address: { type: String },
  phone: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema, "UserCollection");
