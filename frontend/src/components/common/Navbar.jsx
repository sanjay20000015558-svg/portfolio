import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("isLoggedIn");

            // ✅ FLAG FOR LOGIN PAGE
            localStorage.setItem("logoutSuccess", "true");

            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
