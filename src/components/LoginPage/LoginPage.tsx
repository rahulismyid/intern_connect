import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  LoginContainerDiv,
  LoginFormH2,
  LoginFormGroupDiv,
  LoginButtonGroupDiv,
  LoginFormDiv,
} from "./login-page.styles";

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
      <LoginContainerDiv>
        <LoginFormDiv onSubmit={handleSubmit}>
          <LoginFormH2>Login</LoginFormH2>
          <LoginFormGroupDiv>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </LoginFormGroupDiv>
          <LoginFormGroupDiv>
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
          </LoginFormGroupDiv>
          <LoginButtonGroupDiv>
            <button type="submit">Login</button>
            <button onClick={() => navigate("/registration")}>Sign up</button>
          </LoginButtonGroupDiv>
        </LoginFormDiv>
      </LoginContainerDiv>
    </>
  );
};

export default LoginPage;
