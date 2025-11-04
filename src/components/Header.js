import React, { useState, useEffect, useRef } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../contexts/AuthContext";
import "../css/Header.css";

const Header = ({ onNavigate, currentPage }) => {
  const { user, login, logout, isAuthenticated } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const profileMenuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    if (showProfileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfileMenu]);

  const handleLoginSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const userData = {
        id: decoded.sub,
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        givenName: decoded.given_name,
        familyName: decoded.family_name,
        loginTime: new Date().toISOString(),
      };
      login(userData);
      console.log("Login successful:", userData);
    } catch (error) {
      console.error("Error decoding token:", error);
      alert("Failed to decode authentication token. Please try again.");
    }
  };

  const handleLoginError = () => {
    console.error("Login Failed");
    alert(
      "Failed to sign in with Google. Please check your internet connection and try again.",
    );
  };

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    if (onNavigate) {
      onNavigate("home");
    }
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <div className="header-left">
          <div className="logo" onClick={() => handleNavigation("home")}>
            <span className="logo-icon">🎓</span>
            <span className="logo-text">GATE PYQs</span>
          </div>
          <nav className="nav-links">
            <button
              className={`nav-link ${currentPage === "home" ? "active" : ""}`}
              onClick={() => handleNavigation("home")}
            >
              Home
            </button>
            <button
              className={`nav-link ${currentPage === "questions" ? "active" : ""}`}
              onClick={() => handleNavigation("questions")}
              disabled={!isAuthenticated}
              title={
                !isAuthenticated ? "Please sign in to access questions" : ""
              }
            >
              Questions
            </button>
            <button
              className={`nav-link ${currentPage === "about" ? "active" : ""}`}
              onClick={() => handleNavigation("about")}
            >
              About
            </button>
          </nav>
        </div>

        <div className="header-right">
          {isAuthenticated ? (
            <div className="profile-section" ref={profileMenuRef}>
              <button className="profile-button" onClick={toggleProfileMenu}>
                <img
                  src={user.picture}
                  alt={user.name}
                  className="profile-avatar"
                />
                <span className="profile-name">{user.givenName}</span>
                <svg
                  className={`dropdown-arrow ${showProfileMenu ? "open" : ""}`}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>

              {showProfileMenu && (
                <div className="profile-dropdown">
                  <div className="dropdown-header">
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="dropdown-avatar"
                    />
                    <div className="dropdown-user-info">
                      <div className="dropdown-name">{user.name}</div>
                      <div className="dropdown-email">{user.email}</div>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleNavigation("profile");
                        setShowProfileMenu(false);
                      }}
                    >
                      <span className="item-icon">👤</span>
                      My Profile
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleNavigation("questions");
                        setShowProfileMenu(false);
                      }}
                    >
                      <span className="item-icon">📊</span>
                      Practice Questions
                    </button>
                    <button className="dropdown-item">
                      <span className="item-icon">🔖</span>
                      Bookmarks
                    </button>
                    <button className="dropdown-item">
                      <span className="item-icon">⚙️</span>
                      Settings
                    </button>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button
                    className="dropdown-item logout-item"
                    onClick={handleLogout}
                  >
                    <span className="item-icon">🚪</span>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="login-section">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
                theme="filled_blue"
                size="large"
                text="signin_with"
                shape="rectangular"
                logo_alignment="left"
                useOneTap={false}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
