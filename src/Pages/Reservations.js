// pages/Reservations.js
import { useState } from "react";

const Reservations = () => {
  const [reservationData, setReservationData] = useState({
    date: "",
    time: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const apiBase = process.env.REACT_APP_API_URL;
      if (!apiBase) throw new Error("Missing REACT_APP_API_URL in frontend .env");

      const res = await fetch(`${apiBase}/api/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservationData),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to book reservation.");

      setStatus({
        type: "success",
        message: "✅ Reservation submitted! We’ll contact you soon to confirm.",
      });

      setReservationData({
        date: "",
        time: "",
        guests: 2,
        name: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: "❌ " + (err.message || "Something went wrong."),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reservations-page">
      <div className="reservation-hero">
        <h1>Make a Reservation</h1>
      </div>

      <div className="reservation-form-container">
        {status.message && (
          <div style={{ marginBottom: 12 }}>
            <strong>{status.type === "success" ? "Success" : "Error"}:</strong>{" "}
            {status.message}
          </div>
        )}

        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={reservationData.date}
              onChange={(e) =>
                setReservationData({ ...reservationData, date: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <select
              value={reservationData.time}
              onChange={(e) =>
                setReservationData({ ...reservationData, time: e.target.value })
              }
              required
            >
              <option value="">Select Time</option>
              <option value="17:00">5:00 PM</option>
              <option value="17:30">5:30 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="18:30">6:30 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="19:30">7:30 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="20:30">8:30 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label>Number of Guests</label>
            <select
              value={reservationData.guests}
              onChange={(e) =>
                setReservationData({
                  ...reservationData,
                  guests: parseInt(e.target.value, 10),
                })
              }
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "person" : "people"}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={reservationData.name}
              onChange={(e) =>
                setReservationData({ ...reservationData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Email (optional)</label>
            <input
              type="email"
              value={reservationData.email}
              onChange={(e) =>
                setReservationData({ ...reservationData, email: e.target.value })
              }
              placeholder="example@email.com"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              value={reservationData.phone}
              onChange={(e) =>
                setReservationData({ ...reservationData, phone: e.target.value })
              }
              required
            />
          </div>

          <button type="submit" className="submit-reservation" disabled={isSubmitting}>
            {isSubmitting ? "Booking..." : "Book Table"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservations;
