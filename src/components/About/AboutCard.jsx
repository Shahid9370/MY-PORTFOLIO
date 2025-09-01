import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shahid Shaikh</span> from <span className="purple">Pune, India</span>.
            <br />
            I am currently working as a <b>Web Developer Intern</b>.
            <br />
            I am pursuing my <b>Master of Computer Applications (MCA)</b> at Vishwakarma University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography & Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Great things take time, but dedication makes them happen!"{" "}
          </p>
          <footer className="blockquote-footer">Shahid Shaikh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
