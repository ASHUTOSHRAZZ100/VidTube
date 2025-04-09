import React, { useState } from "react";
import AuthLayout from "../../AuthLayout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: null,
    coverImage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm({ ...form, [name]: files[0] });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return toast.error("Password and Confirm Password do not match!");
    }

    try {
      const formData = new FormData();
      formData.append("fullname", form.fullname);
      formData.append("username", form.username);
      formData.append("email", form.email);
      formData.append("password", form.password);
      if (form.avatar) formData.append("avatar", form.avatar);
      if (form.coverImage) formData.append("coverImage", form.coverImage);
      toast.success("Register Completed");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <AuthLayout mode="register" onSubmit={handleRegister}>
      <input
        type="text"
        name="fullname"
        placeholder="Full Name"
        value={form.fullname}
        onChange={handleChange}
        className="auth-input"
        required
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
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
      <div className="upload-row">
        <div className="upload-item">
          <label className="auth-label">Upload Avatar:</label>
          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleFileChange}
            className="auth-input"
          />
        </div>

        <div className="upload-item">
          <label className="auth-label">Upload Cover Image:</label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleFileChange}
            className="auth-input"
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
