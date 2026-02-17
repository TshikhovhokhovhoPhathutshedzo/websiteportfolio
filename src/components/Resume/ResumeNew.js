import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

// PDF from public folder - always loads correctly for display and download
const pdfUrl =
  (process.env.PUBLIC_URL || "") + "/Phathutshedzo_Tshikhovhokhovho_CV.pdf";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfUrl}
            download="Phathutshedzo_Tshikhovhokhovho_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume resume-pdf-row">
          <div className="resume-pdf-wrapper">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=1&scrollbar=1`}
              title="Phathutshedzo Tshikhovhokhovho - CV"
              className="resume-pdf-iframe"
            />
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfUrl}
            download="Phathutshedzo_Tshikhovhokhovho_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
