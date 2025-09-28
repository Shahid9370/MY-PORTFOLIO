import React, { useEffect, useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef();

  // Page load effect
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className={`quote-card-view 
                  ${loaded ? "about-card-pop-in" : ""} 
                  ${visible ? "about-card-scroll-pop visible" : "about-card-scroll-pop"}`}
    >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shahid Shaikh</span> from{" "}
            <span className="purple">Pune, India</span>.
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
