import React, { useState } from "react";
import "./create-project-form.css";

interface ProjectPost {
  title: string;
  description: string;
  requirements: string;
  owner: string;
  status: string;
}

const CreateProjectForm: React.FC = () => {
  const [projectPost, setProjectPost] = useState<ProjectPost>({
    title: "",
    description: "",
    requirements: "",
    owner: "",
    status: "",
  });

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setProjectPost((prevProjectPost) => ({
      ...prevProjectPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle project post submission
    console.log(projectPost);
  };

  return (
    <div className="project-post-form-container">
      <h2>Post Project Details</h2>
      <form className="project-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={projectPost.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={projectPost.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="requirements">Requirements:</label>
          <textarea
            id="requirements"
            name="requirements"
            value={projectPost.requirements}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="owner">Owner:</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={projectPost.owner}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            name="status"
            id="status"
            value={projectPost.status}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleInputChange(e)
            }
          >
            <option value="New">New</option>
            <option value="On Going">On Going</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProjectForm;
