import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Task Manager"
              description="Using the fundamental ideas of React hooks, a task manager project was developed that enables users to manage and arrange their work in a user-friendly manner. The programme offers a user-friendly interface for adding, updating, and removing tasks."
              ghLink="https://github.com/Tejas-21-code/task-manager-api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Chat Application"
              description="Leveraging the fundamentals of Node.js and Express, I made a Real Time Chat Application using socket.io."
              ghLink="https://github.com/Tejas-21-code/Chat-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Expense Tracker"
              description="It displays a graphic of the users' expenses for each month. JavaScript, HTML, and CSS are the technologies used. Users can add tasks and filter them based on their requirements."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
