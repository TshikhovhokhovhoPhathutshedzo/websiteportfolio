import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Aspiring <span className="purple">Data Analyst / Data Scientist</span> and{" "}
              <span className="purple">AI Engineer</span> with a strong foundation in
              Computer Science, Statistics, and Applied Statistics.
              <br />
              <br />
              Experienced in data analysis, machine learning, and software
              development using
              <i>
                <b className="purple"> Python, SQL, and modern analytics tools</b>.
              </i>
              <br />
              <br />
              Passionate about building data-driven solutions, automation systems,
              and predictive models that solve real-world problems.
              <br />
              <br />
              I have worked on projects ranging from
              <b className="purple"> wallet-based finance tracking</b> and{" "}
              <b className="purple">anomaly detection</b> to{" "}
              <i>
                <b className="purple">facial recognition</b>,{" "}
                <b className="purple">real estate data analysis</b>, and{" "}
                <b className="purple">machine learning models</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
