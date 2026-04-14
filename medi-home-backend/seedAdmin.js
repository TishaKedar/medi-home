require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("./models/Admin");
const connectDB = require("./config/db");

const seed = async () => {
  await connectDB();

  const existing = await Admin.findOne({ username: "admin" });
  if (existing) {
    console.log("Admin already exists.");
    process.exit();
  }

  await Admin.create({ username: "admin", password: "admin123" });
  console.log("Admin created: username=admin password=admin123");
  process.exit();
};

seed();