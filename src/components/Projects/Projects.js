import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images from Unsplash (free to use, matching project themes)
const PROJECT_IMAGES = {
  finance: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  facialRecognition: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
  realEstate: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  ticTacToe: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
  lottery: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&q=80",
  anomalyDetection: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Experience & projects from University of Limpopo and personal AI & Machine Learning work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PROJECT_IMAGES.finance}
              isBlog={false}
              title="Wallet-based Finance Tracking App"
              description="Designed and developed a wallet-based finance tracking application to analyze user spending behavior and detect anomalies using Python and SQL. Implemented statistical analysis and data visualization to identify trends and potential fraud patterns."
              ghLink="https://github.com/TshikhovhokhovhoPhathutshedzo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PROJECT_IMAGES.facialRecognition}
              isBlog={false}
              title="Facial Recognition System"
              description="Developed a facial recognition system using machine learning and computer vision techniques for identity verification."
              ghLink="https://github.com/TshikhovhokhovhoPhathutshedzo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PROJECT_IMAGES.realEstate}
              isBlog={false}
              title="Real Estate Data Analyzer"
              description="Created a real estate data analyzer to evaluate property pricing trends using regression models and visualization tools."
              ghLink="https://github.com/TshikhovhokhovhoPhathutshedzo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PROJECT_IMAGES.ticTacToe}
              isBlog={false}
              title="AI-powered Tic-Tac-Toe"
              description="Built an AI-powered Tic-Tac-Toe game using the Minimax algorithm to demonstrate decision-making logic."
              ghLink="https://github.com/TshikhovhokhovhoPhathutshedzo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PROJECT_IMAGES.lottery}
              isBlog={false}
              title="Lottery Data Predictor"
              description="Designed a lottery data predictor using probability theory and time series concepts to explore predictive modeling."
              ghLink="https://github.com/TshikhovhokhovhoPhathutshedzo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PROJECT_IMAGES.anomalyDetection}
              isBlog={false}
              title="ML Anomaly Detection for Finance"
              description="Implemented a machine learning–based anomaly detection system for financial transactions using Python and statistical analysis. Built multiple end-to-end data projects, from data collection and cleaning to modeling and visualization."
              ghLink="https://github.com/TshikhovhokhovhoPhathutshedzo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
