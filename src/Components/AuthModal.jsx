import { useState } from "react"
import { apiFetch } from "../api"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function AuthModal({ open, onClose }) {
  const nav = useNavigate()
  const { login } = useAuth()

  const [mode, setMode] = useState("login") // "login" | "register"
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  if (!open) return null

  const switchMode = (m) => {
    setMode(m)
    setMsg("")
    setForm({ name: "", email: "", password: "" })
  }

  const submit = async (e) => {
    e.preventDefault()
    setMsg("")
    setLoading(true)

    try {
      if (mode === "register") {
        await apiFetch("/api/auth/register", {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
          }),
        })
        setMsg("✅ Account created. You can log in now.")
        setMode("login")
        setLoading(false)
        return
      }

      // login
      const data = await apiFetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: form.email, password: form.password }),
      })

      login(data) // saves token + user in context/localStorage
      onClose()

      // optional: redirect admin
      if (data.user.role === "admin") nav("/admin")
    } catch (err) {
      setMsg("❌ " + (err.message || "Something went wrong"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        display: "grid",
        placeItems: "center",
        zIndex: 9999,
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(520px, 100%)",
          borderRadius: 16,
          padding: 18,
          background: "#111",
          color: "white",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <h3 style={{ margin: 0 }}>{mode === "login" ? "Login" : "Register"}</h3>
          <button onClick={onClose} style={{ cursor: "pointer" }}>✕</button>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <button
            onClick={() => switchMode("login")}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 10,
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.15)",
              background: mode === "login" ? "rgba(255,255,255,0.15)" : "transparent",
              color: "white",
            }}
          >
            Login
          </button>
          <button
            onClick={() => switchMode("register")}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 10,
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.15)",
              background: mode === "register" ? "rgba(255,255,255,0.15)" : "transparent",
              color: "white",
            }}
          >
            Register
          </button>
        </div>

        {msg && <div style={{ marginTop: 12 }}>{msg}</div>}

        <form onSubmit={submit} style={{ marginTop: 12 }}>
          {mode === "register" && (
            <input
              style={inputStyle}
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          )}

          <input
            style={inputStyle}
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            style={inputStyle}
            placeholder="Password (min 6)"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            minLength={6}
          />

          <button
            disabled={loading}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 12,
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.12)",
              color: "white",
              marginTop: 10,
            }}
          >
            {loading ? "Please wait..." : mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        {mode === "login" && (
          <p style={{ marginTop: 10, opacity: 0.8 }}>
            Tip: After your first login, you’ll stay logged in until you press Logout.
          </p>
        )}
      </div>
    </div>
  )
}

const inputStyle = {
  width: "100%",
  padding: 12,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  outline: "none",
  marginTop: 10,
}
