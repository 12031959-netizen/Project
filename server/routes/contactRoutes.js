const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body; // ✅ FIXED

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required: name, email, message." });
    }

    await pool.execute(
      "INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone || null, subject || null, message]
    );

    res.json({ success: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({ error: err.message || "Server error." });
  }
});

module.exports = router;
