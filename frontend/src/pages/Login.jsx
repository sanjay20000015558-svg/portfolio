import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ SHOW LOGOUT SUCCESS
  useEffect(() => {
    if (localStorage.getItem("logoutSuccess") === "true") {
      setMessage("✅ Logout Successful");
      localStorage.removeItem("logoutSuccess");
      setTimeout(() => setMessage(""), 1000);
    }
  }, []);

  // ✅ FIXED LOGIN (API)
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid email or password");
        return;
      }

      // ✅ SAVE LOGIN INFO
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loginSuccess", "true");

      navigate("/");
    } catch (error) {
      alert("Server not responding");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2>Login</h2>

        {/* ✅ LOGOUT MESSAGE */}
        {message && <div style={styles.popup}>{message}</div>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>

        {/* ✅ NEW USER SIGN UP */}
        <div style={styles.signupText}>
          New user?{" "}
          <Link to="/signup" style={styles.signupLink}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

/* ================= STYLES (UNCHANGED) ================= */

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #1e293b, #020617)",
  },
  form: {
    background: "rgba(17, 24, 39, 0.55)",
    padding: "32px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    width: "300px",
    color: "#fff",
    backdropFilter: "blur(16px)",
    animation: "float 6s ease-in-out infinite",
  },
  popup: {
    textAlign: "center",
    padding: "8px",
    borderRadius: "8px",
    background: "rgba(34,197,94,0.15)",
    color: "#22c55e",
    fontWeight: "600",
    fontSize: "14px",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(2,6,23,0.6)",
    color: "#fff",
    outline: "none",
  },
  button: {
    marginTop: "8px",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  },
  signupText: {
    textAlign: "center",
    fontSize: "14px",
    marginTop: "6px",
    opacity: 0.9,
  },
  signupLink: {
    color: "#a78bfa",
    fontWeight: "600",
    textDecoration: "none",
  },
};
