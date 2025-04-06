import React from "react";
import { useNavigate } from "react-router-dom";
import "./AuthLayout.css";

const AuthLayout = ({ mode, onSubmit, children }) => {
  const navigate = useNavigate();
  const isLogin = mode === "login";

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={onSubmit}>
        <h2 className="auth-title">{isLogin ? "Login" : "Register"}</h2>

        {children}

        <button type="submit" className="auth-button">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="auth-toggle-text">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="auth-toggle-button"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="auth-toggle-button"
              >
                Login
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthLayout;
