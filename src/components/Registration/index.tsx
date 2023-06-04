import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RegistrationContainerDiv,
  RegistrationHeaderDiv,
  RegistrationForm,
  RegistrationFormGroupDiv,
  RegistrationFormLabel,
  RegistrationFormInput,
  RegistrationPasswordInputDiv,
  RegistrationPasswordInput,
  RegistrationPasswordToggle,
} from "./registration.styles";

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password" || name === "confirmPassword") {
      validatePasswords();
    }
  };

  const validatePasswords = (): void => {
    if (formData.password !== formData.confirmPassword) {
      // Passwords do not match, handle error
      console.log("Passwords do not match");
    } else {
      // Passwords match, no error
      console.log("Passwords match");
    }
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = (): void => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle registration logic
    console.log(formData);
  };

  return (
    <RegistrationContainerDiv>
      <RegistrationHeaderDiv>
        <h2>Registration</h2>
        <Link to="/login">Back</Link>
      </RegistrationHeaderDiv>
      <RegistrationForm onSubmit={handleSubmit}>
        <RegistrationFormGroupDiv>
          <RegistrationFormLabel htmlFor="name">Name:</RegistrationFormLabel>
          <RegistrationFormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </RegistrationFormGroupDiv>
        <RegistrationFormGroupDiv>
          <RegistrationFormLabel htmlFor="email">Email:</RegistrationFormLabel>
          <RegistrationFormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </RegistrationFormGroupDiv>
        <RegistrationFormGroupDiv>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </RegistrationFormGroupDiv>
        <RegistrationFormGroupDiv>
          <RegistrationFormLabel htmlFor="password">
            Password:
          </RegistrationFormLabel>
          <RegistrationPasswordInputDiv>
            <RegistrationPasswordInput
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <RegistrationPasswordToggle
              className={`password-toggle ${showPassword ? "visible" : ""}`}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </RegistrationPasswordToggle>
          </RegistrationPasswordInputDiv>
        </RegistrationFormGroupDiv>
        <RegistrationFormGroupDiv>
          <RegistrationFormLabel htmlFor="confirmPassword">
            Confirm Password:
          </RegistrationFormLabel>
          <RegistrationPasswordInputDiv>
            <RegistrationPasswordInput
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <RegistrationPasswordToggle
              className={`password-toggle ${
                showConfirmPassword ? "visible" : ""
              }`}
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </RegistrationPasswordToggle>
          </RegistrationPasswordInputDiv>
        </RegistrationFormGroupDiv>
        <button type="submit">Register</button>
      </RegistrationForm>
    </RegistrationContainerDiv>
  );
};

export default Registration;
