import React, { useState } from "react";
import "./CollegeRegistration.css";

export default function CollegeRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    dob: "",
    address: "",
  });

  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.department ||
      !formData.year ||
      !formData.dob ||
      !formData.address
    ) {
      alert("⚠ Please fill all fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("⚠ Phone number must be 10 digits.");
      return;
    }

    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      year: "",
      dob: "",
      address: "",
    });
  };

  return (
    <div className="container">
      <h2>College Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />

        <label>Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="CSE">Computer Science</option>
          <option value="ECE">Electronics</option>
          <option value="ME">Mechanical</option>
          <option value="CE">Civil</option>
        </select>

        <label>Year</label>
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
        >
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        <label>Address</label>
        <textarea
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Register</button>
      </form>

      {success && <p className="success">✅ Registration Successful!</p>}
    </div>
  );
}
