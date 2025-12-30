import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { useAuth } from "../context/AuthContext";
import "../Styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [authOpen, setAuthOpen] = useState(false); // ✅ NEW

  const { user, isAuthed, logout } = useAuth(); // ✅ NEW

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const openAuth = () => {
    closeMenu();
    setAuthOpen(true);
  };

  const doLogout = () => {
    closeMenu();
    logout();
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <h2>Gusto Italiano</h2>
          </Link>

          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/menu" onClick={closeMenu}>Menu</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>

            {/* ✅ Admin-only link */}
            {isAuthed && user?.role === "admin" && (
              <Link to="/admin" onClick={closeMenu}>Admin Dashboard</Link>
            )}

            {/* ✅ On mobile, it’s nicer to show auth inside the menu too */}
            <div className="nav-auth-mobile">
              {!isAuthed ? (
                <button type="button" className="auth-button" onClick={openAuth}>
                  Login / Register
                </button>
              ) : (
                <button type="button" className="auth-button" onClick={doLogout}>
                  Logout
                </button>
              )}
            </div>
          </nav>

          {/* Right side actions */}
          <div className="header-actions">
            {/* CTA Button */}
            <Link to="/reservations" className="cta-button" onClick={closeMenu}>
              Reserve Table
            </Link>

            {/* ✅ Desktop auth area */}
            <div className="nav-auth-desktop">
              {!isAuthed ? (
                <button type="button" className="auth-button" onClick={openAuth}>
                  Login / Register
                </button>
              ) : (
                <div className="auth-logged-in">
                  <span className="nav-user">Hi, {user?.name || "User"}</span>
                  <button type="button" className="auth-button" onClick={doLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* ✅ Auth Modal */}
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default Header;
