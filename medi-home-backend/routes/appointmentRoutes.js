const express = require("express");
const Appointment = require("../models/Appointment");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE (public)
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      age: req.body.age,
      city: req.body.city,
      message: req.body.message,
    });
    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to book appointment" });
  }
});

// READ all (admin only)
router.get("/", protect, async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ _id: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});

// UPDATE status (admin only)
router.patch("/:id/status", protect, async (req, res) => {
  try {
    const { status } = req.body;
    if (!["Pending", "Confirmed", "Completed"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update status" });
  }
});

// DELETE (admin only)
router.delete("/:id", protect, async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete" });
  }
});

module.exports = router;