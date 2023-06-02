import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login-page.styles.css";

interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
}

const LoginPage: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    setIsValidEmail(validateEmail(enteredEmail));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(email, password);
    navigate("/app");
    // onLogin(email, password);
  };
  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {email && !isValidEmail && (
              <p>Please enter a valid email address.</p>
            )}
          </div>
          <div className="login-btn-group">
            <button type="submit">Login</button>
            <button onClick={() => navigate("/registration")}>Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
