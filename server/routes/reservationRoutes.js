const express = require("express");
const pool = require("../db");
const { requireAuth, requireAdmin } = require("../middleware/auth");

const router = express.Router();

// Public: create reservation (no login required)
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, date, time, guests } = req.body;

    if (!name || !phone || !date || !time || !guests) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await pool.execute(
      `INSERT INTO reservations (full_name, email, phone, reservation_date, reservation_time, guests)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email || null, phone, date, time, Number(guests)]
    );

    res.json({ success: true });
  } catch (err) {
    console.error("RESERVATION ERROR:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
});

// Admin: list reservations
router.get("/", requireAuth, requireAdmin, async (req, res) => {
  const [rows] = await pool.execute(
    "SELECT * FROM reservations ORDER BY created_at DESC LIMIT 200"
  );
  res.json(rows);
});

// Admin: update reservation status
router.patch("/:id/status", requireAuth, requireAdmin, async (req, res) => {
  const { status } = req.body;
  if (!["pending", "confirmed", "cancelled"].includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }
  await pool.execute("UPDATE reservations SET status=? WHERE id=?", [
    status,
    req.params.id,
  ]);
  res.json({ success: true });
});

module.exports = router;
