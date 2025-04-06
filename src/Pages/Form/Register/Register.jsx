import React, { useState } from "react";
import AuthLayout from "../../../Components/AuthLayout/AuthLayout";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering with:", form);
    // TODO: Add register logic here
  };

  return (
    <AuthLayout mode="register" onSubmit={handleRegister}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.name}
        onChange={handleChange}
        className="auth-input"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
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
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="auth-input"
        required
      />
    </AuthLayout>
  );
};

export default Register;
