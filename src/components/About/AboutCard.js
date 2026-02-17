import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Phathutshedzo Tshikhovhokhovho</span>{" "}
            from <span className="purple">Pretoria, South Africa</span>.
            <br />
            I hold a <span className="purple">BSc in Computer Science</span> from{" "}
            <span className="purple">University of Limpopo</span> (2025), with majors in{" "}
            <span className="purple">Computer Science & Statistics</span>.
            <br />
            <br />
            My strengths:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Strong analytical and problem-solving skills with a data-driven mindset
            </li>
            <li className="about-activity">
              <ImPointRight /> Hands-on experience in Python, SQL, machine learning, and analytics tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Disciplined, adaptable team player with leadership skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Motivated self-learner with a passion for emerging technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build data-driven solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Phathutshedzo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
