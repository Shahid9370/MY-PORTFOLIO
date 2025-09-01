import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumeImg from "../../Assets/Shahid_Shaikh_Resume.png"; // ✅ Image version
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download button */}
        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={resumeImg}
            download="Shahid_Shaikh_Resume.png"
            style={{ maxWidth: "250px", width: "90%" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        {/* Resume Image preview */}
        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <div
            style={{
              width: width > 1200 ? "60%" : width > 992 ? "70%" : width > 768 ? "80%" : "95%",
              maxHeight: "90vh",
              overflow: "auto",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              borderRadius: "10px",
              background: "#fff",
              padding: "10px",
            }}
          >
            <img
              src={resumeImg}
              alt="Shahid Shaikh Resume"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </Row>

        {/* Duplicate Download button */}
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={resumeImg}
            download="Shahid_Shaikh_Resume.png"
            style={{ maxWidth: "250px", width: "90%" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
