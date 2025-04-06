import React, { useState } from "react";
import AuthLayout from "../../../Components/AuthLayout/AuthLayout";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", form);
    // TODO: Add login logic here
  };

  return (
    <AuthLayout mode="login" onSubmit={handleLogin}>
      <input
        type="email"
        name="email-username"
        placeholder="Email / Username"
        value={form.email}
        onChange={handleChange}
        className="auth-input"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="auth-input"
        required
      />
    </AuthLayout>
  );
};

export default Login;
