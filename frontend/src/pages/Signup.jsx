// src/pages/Signup.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!agree) {
      alert("Please agree to terms & conditions");
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          otherName,
          email,
          phone,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Account created successfully");
      navigate("/login");
    } catch (error) {
      alert("Server error. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSignup} style={styles.form}>
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Other names"
          value={otherName}
          onChange={(e) => setOtherName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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

        <label style={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <span>Agree to terms & conditions</span>
        </label>

        <button type="submit" style={styles.button}>
          Sign up
        </button>

        <div style={styles.loginText}>
          Already a member?{" "}
          <Link to="/login" style={styles.loginLink}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

/* ================= STYLES ================= */

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
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    width: "340px",
    color: "#fff",
  },
  input: {
    padding: "11px 14px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(2,6,23,0.6)",
    color: "#fff",
  },
  checkboxRow: {
    display: "flex",
    gap: "8px",
    fontSize: "13px",
  },
  button: {
    padding: "11px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
    color: "#fff",
    fontWeight: "600",
  },
  loginText: {
    textAlign: "center",
    fontSize: "14px",
  },
  loginLink: {
    color: "#60a5fa",
    fontWeight: "600",
    textDecoration: "none",
  },
};
