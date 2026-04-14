const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  email:   { type: String, required: true },
  phone:   { type: String, required: true },
  age:     { type: Number },
  city:    { type: String },
  message: { type: String },
  status:  { type: String, enum: ["Pending", "Confirmed", "Completed"], default: "Pending" },
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);