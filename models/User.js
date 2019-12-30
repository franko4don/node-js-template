const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "UserProfile" },
  dateOfCreation: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
