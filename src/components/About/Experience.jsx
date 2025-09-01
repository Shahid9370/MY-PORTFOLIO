import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants for floating panels
const panelVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
  hover: {
    scale: 1.05,
    rotateX: 5,
    rotateY: 5,
    boxShadow: "0 0 25px rgba(211, 139, 252, 0.6), 0 0 40px rgba(211, 139, 252, 0.3)",
    transition: { duration: 0.3 },
  },
};

const detailVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonVariants = {
  plus: {
    scale: 1,
    rotate: 0,
    background: "#d38bfc",
    boxShadow: "0 0 10px rgba(211, 139, 252, 0.5)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  cross: {
    scale: 1.2,
    rotate: 45,
    background: "#7b3fe4",
    boxShadow: "0 0 15px rgba(123, 63, 228, 0.7)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

function Experience() {
  const [expanded, setExpanded] = useState(null);

  // Sample experience data (replace with your actual experiences)
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Uptoskills Org",
      duration: "4 months",
      description: "Worked as a MERN Stack Intern, building and maintaining full-stack web features with React, Node, Express, and MongoDB. Focused on UI, APIs, and code quality.",
    },
    {
      title: "Frontend Developer",
      company: "Aroma Brand Solution, Pune",
      duration: "2 months",
      description: "Designed responsive UI components and integrated REST APIs for a client-facing dashboard. Optimized front-end performance, reducing load times by 25%.",
    },
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Container className="experience-section" style={{ padding: "50px 0", minHeight: "600px" }}>
      <h1 style={{ color: "#fff", textAlign: "center", fontSize: "2.1em", paddingBottom: "30px" }}>
        Professional <strong style={{ color: "#d38bfc" }}>Experience</strong>
      </h1>
      <Row style={{ justifyContent: "center" }}>
        <Col md={8}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={panelVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover="hover"
              style={{
                background: "linear-gradient(45deg, #d38bfc, #a55bff)",
                borderRadius: "20px",
                marginBottom: "30px",
                padding: "20px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glowing overlay for futuristic effect */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "radial-gradient(circle, rgba(211, 139, 252, 0.2), transparent)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div style={{ display: "flex", alignItems: "center", position: "relative", zIndex: 1 }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: "#fff", fontWeight: "900", fontSize: "1.8rem", margin: 0 }}>
                    {exp.title}
                  </h3>
                  <h5 style={{ color: "#e6e6e6", fontWeight: "500", margin: "8px 0 0" }}>
                    {exp.company} | {exp.duration}
                  </h5>
                </div>
                <motion.div
                  variants={buttonVariants}
                  animate={expanded === index ? "cross" : "plus"}
                  onClick={() => toggleExpand(index)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "24px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {expanded === index ? "✕" : "+"}
                </motion.div>
              </div>
              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    variants={detailVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    style={{
                      background: "linear-gradient(45deg, #b68bff, #7b3fe4)",
                      borderRadius: "0 20px 20px 0",
                      padding: expanded === index ? "20px" : "0",
                      marginLeft: "20px",
                      marginTop: "15px",
                      borderLeft: "2px solid #d38bfc",
                    }}
                  >
                    <p style={{ color: "#e6e6e6", margin: 0, fontSize: "1rem" }}>{exp.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;