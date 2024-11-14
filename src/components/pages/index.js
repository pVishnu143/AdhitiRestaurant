import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    contact: '',
    gender: '',
  });
  const [errors, setErrors] = useState({});
  const [action, setAction] = useState("REGISTER");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { email, password, contact, gender } = formData;
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    const newErrors = {};

    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!passwordRegex.test(password)) {
      newErrors.password = "Password must be at least 6 characters, include one uppercase letter, one number, and one special character.";
    }

    if (action === "REGISTER") {
      if (contact.length !== 10 || isNaN(contact)) {
        newErrors.contact = "Please enter a valid 10-digit contact number.";
      }
      if (!gender) {
        newErrors.gender = "Please select your gender.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`You have successfully ${action === "REGISTER" ? "registered" : "logged in"}.`);
      navigate('/home'); 
    }
  };

  const toggleAction = () => {
    setAction(action === "REGISTER" ? "Login" : "REGISTER");
    setErrors({});
    setFormData({ email: '', password: '', contact: '', gender: '' });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-side">
          <img src="/images/backlogin.webp" alt="Welcome" />
        </div>
        <div className="right-side">
          <div className="wrapper">
            <form id="registrationForm" onSubmit={handleSubmit}>
              <h1>{action}</h1>
              
              <div className="input-box">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email id"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="input-box">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>

              {action === "REGISTER" && (
                <>
                  <div className="input-box">
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      placeholder="Contact Number"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                    />
                    {errors.contact && <span className="error">{errors.contact}</span>}
                  </div>

                  <div className="gender">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                      />
                      Female
                    </label>
                    {errors.gender && <span className="error">{errors.gender}</span>}
                  </div>
                </>
              )}

              <button type="submit" className={action === "" ? "btn" : "submit"}>{action}</button>
              <div className="login">
                <p>
                  {action === "REGISTER" ? "Do you have an account?" : "Don't have an account?"}{" "}
                  <span onClick={toggleAction} style={{ cursor: 'pointer', color: 'red' }}>
                    {action === "REGISTER" ? "Login" : "Register"}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
