const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { requireAuth, requireAdmin } = require("./middleware/auth"); // if you need elsewhere
dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use("/api/contact", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));


app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/reservations", require("./routes/reservationRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
