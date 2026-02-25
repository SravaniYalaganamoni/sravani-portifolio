import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Certifications & Awards</strong>
      </h1>

      {/* Cadence RTL to GDSII */}
      <Col md={4} className="project-card">
        <Card className="project-card-view">
          <Card.Body>
            <Card.Title>Cadence RTL-to-GDSII Flow</Card.Title>
            <Card.Text>
              Complete ASIC physical design flow including synthesis, floorplanning,
              placement, CTS, routing, and signoff using Cadence tools.
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.credly.com/badges/55a31cd2-7364-438b-9b1c-f63b6a8d0eca"
              target="_blank"
            >
              View Credential
            </Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Static Timing Analysis */}
      <Col md={4} className="project-card">
        <Card className="project-card-view">
          <Card.Body>
            <Card.Title>Basic Static Timing Analysis</Card.Title>
            <Card.Text>
              Timing concepts, setup/hold analysis, clock constraints, and report
              interpretation for digital circuits.
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.credly.com/badges/49a9435d-0cdb-4bb0-9d6e-2b4fdb95b38a"
              target="_blank"
            >
              View Credential
            </Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Semiconductor 101 */}
      <Col md={4} className="project-card">
        <Card className="project-card-view">
          <Card.Body>
            <Card.Title>Semiconductor 101 v1.0</Card.Title>
            <Card.Text>
              Fundamentals of semiconductor manufacturing, device physics, and
              IC fabrication processes.
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.credly.com/badges/4a366d17-31c4-4710-9c37-c94bd2fd2f60"
              target="_blank"
            >
              View Credential
            </Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Perl Training */}
      <Col md={4} className="project-card">
        <Card className="project-card-view">
          <Card.Body>
            <Card.Title>Perl 5 Essential Training</Card.Title>
            <Card.Text>
              Scripting for automation, log parsing, and flow integration useful
              in EDA and verification environments.
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.linkedin.com/learning/certificates/1e7673cb3c18ad59cb6dc94dc8b8776c9c3c2e4750eb1f23e54e900475c4f860"
              target="_blank"
            >
              View Certificate
            </Button>
          </Card.Body>
        </Card>
      </Col>

      {/* Academic Award */}
      <Col md={4} className="project-card">
        <Card className="project-card-view">
          <Card.Body>
            <Card.Title>Academic Star Award</Card.Title>
            <Card.Text>
              Awarded by California State University for outstanding academic
              performance and excellence in engineering coursework.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Github;

