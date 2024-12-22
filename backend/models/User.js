const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  passportNumber: { type: String, required: true },
  imageUrl: { type: String, required: true }, // URL of the uploaded image
  mobile: { type: String, required: false }, // Ensure this field exists
  nic: { type: String, required: false }, // Ensure this field exists
});

module.exports = mongoose.model("User", userSchema);
