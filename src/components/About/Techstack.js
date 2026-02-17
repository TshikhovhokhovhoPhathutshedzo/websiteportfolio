import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPandas, SiNumpy, SiMysql, SiPostgresql, SiPowerbi } from "react-icons/si";
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Git from "../../Assets/TechIcons/Git.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas fontSize={"24px"} />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>R</span>
        <div className="tech-icons-text">R</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql fontSize={"24px"} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize={"24px"} />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi fontSize={"24px"} />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy fontSize={"24px"} />
        <div className="tech-icons-text">NumPy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "20px" }}>scikit-learn</span>
        <div className="tech-icons-text">scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "20px" }}>MATLAB</span>
        <div className="tech-icons-text">MATLAB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "20px" }}>SAS</span>
        <div className="tech-icons-text">SAS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span style={{ fontSize: "20px" }}>SPSS</span>
        <div className="tech-icons-text">SPSS</div>
      </Col>
    </Row>
  );
}

export default Techstack;
