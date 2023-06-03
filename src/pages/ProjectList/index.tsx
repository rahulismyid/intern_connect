import React from "react";
import "./project-list.styles.css";

interface Project {
  id: string;
  title: string;
  description: string;
  requirements: string;
  owner: string;
  status: string;
}

interface ProjectListProps {
  projects?: Project[];
}

const PROJECTS = [
  {
    id: "1",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    requirements: "React, TypeScript, CSS",
    owner: "John Doe",
    status: "ongoing",
  },
  {
    id: "2",
    title: "Project 2",
    description: "Nulla consectetur sem vel magna luctus consectetur.",
    requirements: "JavaScript, HTML, CSS",
    owner: "Jane Smith",
    status: "completed",
  },
  {
    id: "3",
    title: "Project 3",
    description: "Vestibulum malesuada ipsum a nisi interdum, id consectetur.",
    requirements: "Python, Django, PostgreSQL",
    owner: "Michael Johnson",
    status: "new",
  },
  {
    id: "4",
    title: "Project 4",
    description: "Sed bibendum felis sit amet tellus tincidunt feugiat.",
    requirements: "Java, Spring Boot, MongoDB",
    owner: "Emily Davis",
    status: "ongoing",
  },
  {
    id: "5",
    title: "Project 5",
    description: "Morbi eget turpis euismod, posuere nisi nec, imperdiet quam.",
    requirements: "Ruby, Rails, SQLite",
    owner: "David Wilson",
    status: "completed",
  },
];
const ProjectList: React.FC<ProjectListProps> = ({ projects = PROJECTS }) => {
  return (
    <div className="project-list-container">
      <h2>Created Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Skills: {project.requirements}</p>
            <p>Posted By: {project.owner}</p>
            <p>Status: {project.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
