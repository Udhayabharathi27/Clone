import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import "./Auth.css";

function Login({ onLoginSuccess, onSwitchToRegister, onSwitchToPhone, onBackToLanding }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onLoginSuccess(userCredential.user);
    } catch (error) {
      console.error("Login error:", error);
      if (error.code === "auth/user-not-found") {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          onLoginSuccess(userCredential.user);
        } catch (createError) {
          console.error("Account creation error:", createError);
          setError(getErrorMessage(createError.code));
        }
      } else {
        setError(getErrorMessage(error.code));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      onLoginSuccess(userCredential.user);
    } catch (error) {
      console.error("Google login error:", error);
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (!resetEmail) {
      setError("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(resetEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetEmailSent(true);
    } catch (error) {
      console.error("Password reset error:", error);
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Invalid email address format.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/wrong-password":
        return "Incorrect password.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      case "auth/invalid-credential":
        return "Invalid login credentials.";
      case "auth/missing-email":
        return "Please enter your email address.";
      case "auth/email-already-in-use":
        return "This email is already in use.";
      case "auth/weak-password":
        return "Password should be at least 6 characters long.";
      default:
        return "An error occurred. Please try again.";
    }
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setResetEmailSent(false);
    setResetEmail("");
    setError("");
  };

  if (showForgotPassword) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Reset Password</h2>
            <p>Enter your email to receive a password reset link</p>
          </div>

          {error && <div className="auth-error">{error}</div>}
          {resetEmailSent && (
            <div className="auth-success">
              <p>Password reset email sent!</p>
              <p>Check your inbox at {resetEmail} for instructions.</p>
            </div>
          )}

          {!resetEmailSent && (
            <form onSubmit={handleForgotPassword} className="auth-form">
              <div className="form-group">
                <label htmlFor="resetEmail">Email Address</label>
                <input
                  type="email"
                  id="resetEmail"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                />
              </div>

              <button type="submit" className="auth-button primary" disabled={loading}>
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          )}

          <div className="auth-footer">
            <p>
              Remember your password?{" "}
              <button type="button" className="link-button" onClick={handleBackToLogin}>
                Back to Login
              </button>
            </p>
            <p>
              <button type="button" className="link-button" onClick={onBackToLanding}>
                Back to Home
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Sign In to Your Account</h2>
          <p>Enter your credentials to continue</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleEmailLogin} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <button
              type="button"
              className="link-button forgot-link"
              onClick={() => setShowForgotPassword(true)}
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="auth-button primary" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="auth-divider">
          <span>Or continue with</span>
        </div>

        <button className="auth-button google" onClick={handleGoogleLogin} disabled={loading} type="button">
          <span className="google-icon">G</span>
          Sign in with Google
        </button>

        <button
          className="auth-button secondary"
          onClick={onSwitchToPhone}
          disabled={loading}
          type="button"
        >
          📱 Sign in with Phone
        </button>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <button type="button" className="link-button" onClick={onSwitchToRegister}>
              Create Account
            </button>
          </p>
          <p>
            <button type="button" className="link-button" onClick={onBackToLanding}>
              Back to Home
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;