import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Menu from "../../Assets/Projects/Menu.png";
import zenvue from "../../Assets/Projects/zenvue.png";
import todo from "../../Assets/Projects/todo.png";
import onlineLearning from "../../Assets/Projects/onlineLearning.png";
import movieReco from "../../Assets/Projects/movieReco.png";
import contactForm from "../../Assets/Projects/contactForm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've built recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={Menu}
              isBlog={false}
              title="Digital Menu Card"
              description="A MERN Stack based digital restaurant menu application. Customers can browse menu items online by category, image, and price, while admins manage the menu via a secure panel."
              ghLink="https://github.com/shahid9370/digital-menu"
              demoLink="https://digital-qr-menu.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zenvue}
              isBlog={false}
              title="ZenVue-Job-Recommender"
              description="AI-powered platform that helps job seekers find ideal roles based on skills and preferences. Uses NLP for personalized job suggestions. Built with React.js, Node.js, HTML, CSS. Future plans: ATS integration and resume parsing."
              ghLink="https://github.com/shahid9370/ZenVue-JobRecommender"
              demoLink="https://zenvue-jobrecommeus-lollipop-5103b6.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="React ToDo App"
              description="Simple and efficient ToDo App with full CRUD functionality. Stores tasks in localStorage and supports task creation, editing, completion toggling, and deletion. Responsive UI for seamless experience across devices."
              ghLink="https://github.com/shahid9370/Shahid9370-React-ToDo"
              demoLink="https://shahid-todo.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineLearning}
              isBlog={false}
              title="Online Learning System"
              description="Platform for students and admins to manage learning resources efficiently. Frontend built with React.js, backend with Node.js and MongoDB."
              ghLink="https://github.com/shahid9370/Learning-Management-System"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieReco}
              isBlog={false}
              title="Movie Recommendation System"
              description="Helps users find their next favorite film based on genre and rating. Built with React.js with a clean and intuitive UI."
              ghLink="https://github.com/shahid9370/Movie-Recommendation-System"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactForm}
              isBlog={false}
              title="Contact Form Page"
              description="Online form page built with React.js supporting live validation, email sending functionality, and responsive design."
              ghLink="https://github.com/shahid9370/Contact-Us-page"
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
