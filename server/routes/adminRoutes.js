const express = require("express");
const pool = require("../db");
const { requireAuth, requireAdmin } = require("../middleware/auth");

const router = express.Router();

router.get("/contacts", requireAuth, requireAdmin, async (req, res) => {
  const [rows] = await pool.execute(
    "SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 200"
  );
  res.json(rows);
});

module.exports = router;
router.delete("/contacts/:id", requireAuth, requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid id" });

    const [result] = await pool.execute("DELETE FROM contact_messages WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.json({ success: true });
  } catch (err) {
    console.error("DELETE CONTACT ERROR:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
});
