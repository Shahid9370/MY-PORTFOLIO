import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">TELL YOU ABOUT MYSELF</span>
            </h1>
            <p className="home-about-body">
              Hi! I’m <b className="purple">Shahid Shaikh</b>, a Full-Stack MERN Developer and MCA graduate from Vishwakarma University, Pune.  
              <br /><br />
              I specialize in building <b className="purple">AI-powered and user-centric web applications</b>, with strong fundamentals in 
              <b className="purple"> Data Structures, Algorithms, OOP, and Databases</b>.
              <br /><br />
              My tech stack includes <i><b className="purple">React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, REST APIs</b></i>, and I enjoy integrating AI/ML features into scalable web solutions. 🚀
              <br /><br />
              I’m passionate about <b className="purple">Web Technologies, Blockchain, and innovative products</b>, and love turning ideas into real-world applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

  

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>Feel free to <span className="purple">connect</span> with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shahid9370"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shahid-shaikh-68993a214"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/knowledge_corner_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
