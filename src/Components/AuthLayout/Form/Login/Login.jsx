import React, { useState } from "react";
import AuthLayout from "../../AuthLayout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", form);
    toast.success("Nice Done")
  };

  return (
    <AuthLayout mode="login" onSubmit={handleLogin}>
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
    </AuthLayout>
  );
};

export default Login;
