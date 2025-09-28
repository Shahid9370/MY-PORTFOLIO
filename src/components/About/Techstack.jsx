import React, { useEffect, useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiCode,
} from "react-icons/di";
import { SiMysql, SiNextdotjs } from "react-icons/si";

function Techstack() {
  const [loaded, setLoaded] = useState(false); // page load state
  const [visible, setVisible] = useState(false); // scroll state
  const sectionRef = useRef();

  // Page load effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 50); // slight delay ensures animation triggers
    return () => clearTimeout(timer);
  }, []);

  // Scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const techStack = [
    { name: "C++", icon: <CgCPlusPlus /> },
    { name: "Java", icon: <DiJava /> },
    { name: "Python", icon: <DiPython /> },
    { name: "HTML5", icon: <DiHtml5 /> },
    { name: "CSS3", icon: <DiCss3 /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "React.js", icon: <DiReact /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "Spring Boot", icon: <DiCode /> }, // Placeholder
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Bootstrap", icon: <DiBootstrap /> },
    { name: "Git", icon: <DiGit /> },
  ];

  return (
    <Row
      ref={sectionRef}
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      className={`
        techstack-pop-in 
        ${loaded ? "animate" : ""} 
        ${visible ? "techstack-scroll-pop visible" : "techstack-scroll-pop"}
      `}
    >
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons">
          <div
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {tech.icon}
            <span
              style={{
                color: "#e6e6e6",
                fontSize: "0.9rem",
                marginTop: "8px",
                textAlign: "center",
              }}
            >
              {tech.name}
            </span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
