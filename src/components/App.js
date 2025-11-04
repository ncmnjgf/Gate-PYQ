import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import Header from "./Header";
import Welcome from "./Welcome";
import QuestionList from "./QuestionList";
import UserProfile from "./UserProfile";
import About from "./About";
import "../css/App.css";

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

// Main App Content Component
const AppContent = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const { isAuthenticated, loading } = useAuth();

  // Handle navigation
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Redirect to home if trying to access questions without auth
  useEffect(() => {
    if (currentPage === "questions" && !isAuthenticated && !loading) {
      setCurrentPage("home");
    }
  }, [isAuthenticated, currentPage, loading]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="app-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading...</p>
        </div>
      </div>
    );
  }

  // Render current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return isAuthenticated ? (
          <QuestionList />
        ) : (
          <Welcome onNavigate={handleNavigate} />
        );

      case "questions":
        return isAuthenticated ? (
          <QuestionList />
        ) : (
          <Welcome onNavigate={handleNavigate} />
        );

      case "profile":
        return isAuthenticated ? (
          <UserProfile />
        ) : (
          <Welcome onNavigate={handleNavigate} />
        );

      case "about":
        return <About />;

      default:
        return isAuthenticated ? (
          <QuestionList />
        ) : (
          <Welcome onNavigate={handleNavigate} />
        );
    }
  };

  return (
    <div className="app-container">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <div className="main-content">{renderPage()}</div>
      <Analytics />
    </div>
  );
};

// Main App Component with Providers
const App = () => {
  // Check if Google Client ID is available
  if (!GOOGLE_CLIENT_ID) {
    return (
      <div className="app-container">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h2 className="error-title">Configuration Error</h2>
          <p className="error-message">
            Google Client ID is not configured. Please check your .env file and
            make sure REACT_APP_GOOGLE_CLIENT_ID is set correctly.
          </p>
          <div className="error-details">
            <h3>Setup Instructions:</h3>
            <ol>
              <li>Create a .env file in the root directory</li>
              <li>Add: REACT_APP_GOOGLE_CLIENT_ID=your_client_id_here</li>
              <li>Restart the development server</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
