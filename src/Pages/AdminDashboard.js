import { useEffect, useState } from "react";
import { apiFetch } from "../api";
import { useAuth } from "../context/AuthContext";
import "../Styles/AdminDashboard.css";

export default function AdminDashboard() {
  const { token } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setErr("");
    setLoading(true);
    try {
      const [c, r] = await Promise.all([
        apiFetch("/api/admin/contacts", { token }),
        apiFetch("/api/reservations", { token }),
      ]);
      setContacts(c);
      setReservations(r);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, []);

  const setStatus = async (id, status) => {
    setErr("");
    try {
      await apiFetch(`/api/reservations/${id}/status`, {
        method: "PATCH",
        token,
        body: JSON.stringify({ status }),
      });
      await load();
    } catch (e) {
      setErr(e.message);
    }
  };

  // ✅ NEW: delete contact message
  const deleteContact = async (id) => {
    const ok = window.confirm("Delete this message permanently?");
    if (!ok) return;

    setErr("");
    try {
      await apiFetch(`/api/admin/contacts/${id}`, {
        method: "DELETE",
        token,
      });

      // remove locally (instant)
      setContacts((prev) => prev.filter((m) => m.id !== id));
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-hero">
        <div className="admin-hero-inner">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage reservations and contact messages</p>
          </div>
          <button className="admin-btn admin-btn-ghost" onClick={load}>
            Refresh
          </button>
        </div>
      </div>

      <div className="admin-container">
        {loading && <div className="admin-alert">Loading...</div>}
        {err && <div className="admin-alert admin-alert-error">❌ {err}</div>}

        <div className="admin-grid">
          {/* Contacts */}
          <section className="admin-card">
            <div className="admin-card-header">
              <div>
                <h2>Contact Messages</h2>
                <p>{contacts.length} total</p>
              </div>
            </div>

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Created</th>
                    <th>Actions</th> {/* ✅ NEW */}
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((m) => (
                    <tr key={m.id}>
                      <td>{m.id}</td>
                      <td>{m.name}</td>
                      <td>{m.email}</td>
                      <td>{m.phone || "-"}</td>
                      <td>{m.subject || "-"}</td>
                      <td className="admin-message">{m.message}</td>
                      <td className="admin-muted">{m.created_at}</td>
                      <td className="admin-actions">
                        <button
                          className="admin-btn admin-btn-bad"
                          onClick={() => deleteContact(m.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {!contacts.length && !loading && (
                    <tr>
                      <td colSpan="8" className="admin-empty">
                        No messages yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Reservations */}
          <section className="admin-card">
            <div className="admin-card-header">
              <div>
                <h2>Reservations</h2>
                <p>{reservations.length} total</p>
              </div>
              <div className="admin-chip-row">
                <span className="admin-chip">Pending</span>
                <span className="admin-chip admin-chip-ok">Confirmed</span>
                <span className="admin-chip admin-chip-bad">Cancelled</span>
              </div>
            </div>

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Guests</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((r) => (
                    <tr key={r.id}>
                      <td>{r.id}</td>
                      <td>{r.full_name}</td>
                      <td>{r.email || "-"}</td>
                      <td>{r.phone}</td>
                      <td>{r.reservation_date}</td>
                      <td>{r.reservation_time}</td>
                      <td>{r.guests}</td>
                      <td>
                        <span className={`status-pill status-${r.status}`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="admin-actions">
                        <button
                          className="admin-btn admin-btn-ok"
                          onClick={() => setStatus(r.id, "confirmed")}
                        >
                          Confirm
                        </button>
                        <button
                          className="admin-btn admin-btn-warn"
                          onClick={() => setStatus(r.id, "pending")}
                        >
                          Pending
                        </button>
                        <button
                          className="admin-btn admin-btn-bad"
                          onClick={() => setStatus(r.id, "cancelled")}
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                  {!reservations.length && !loading && (
                    <tr>
                      <td colSpan="9" className="admin-empty">
                        No reservations yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
