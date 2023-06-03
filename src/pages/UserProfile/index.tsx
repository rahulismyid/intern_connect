import React, { useState } from "react";
import "./userprofile.styles.css";

interface UserProfileData {
  name: string;
  skills: string;
  education: string;
  interests: string;
}

const UserProfile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfileData>({
    name: "",
    skills: "",
    education: "",
    interests: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Save user profile data to backend or perform desired actions
    console.log(userProfile);
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <form className="user-profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userProfile.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={userProfile.skills}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education:</label>
          <input
            id="education"
            name="education"
            value={userProfile.education}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interests">Interests:</label>
          <input
            id="interests"
            name="interests"
            value={userProfile.interests}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
