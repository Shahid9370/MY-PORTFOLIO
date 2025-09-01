import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiDocker,
  SiMongodb,
  SiIntellijidea,
  SiPycharm,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiGithubBadge } from "react-icons/di";
import { FaWindows } from "react-icons/fa";

// ✅ Define labelStyle *before* using it in JSX (moved up)
const labelStyle = {
  color: "#e6e6e6",
  fontSize: "0.9rem",
  marginTop: "8px",
  display: "block",
  textAlign: "center",
};

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows size={40} />
        <span style={labelStyle}>Windows</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode size={40} />
        <span style={labelStyle}>VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea size={40} />
        <span style={labelStyle}>IntelliJ IDEA</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm size={40} />
        <span style={labelStyle}>PyCharm</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman size={40} />
        <span style={labelStyle}>Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb size={40} />
        <span style={labelStyle}>MongoDB Compass</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel size={40} />
        <span style={labelStyle}>Vercel</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify size={40} />
        <span style={labelStyle}>Netlify</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge size={40} />
        <span style={labelStyle}>GitHub</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma size={40} />
        <span style={labelStyle}>Figma</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker size={40} />
        <span style={labelStyle}>Docker</span>
      </Col>
    </Row>
  );
}

export default Toolstack;