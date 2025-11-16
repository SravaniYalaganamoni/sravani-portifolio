import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* <<< CHANGED */}
            Hi Everyone, I am <span className="purple">Sravani Yalaganamoni</span> from <span className="purple"> Fresno, California (originally Hyderabad, India).</span>
            <br />
            I'm a graduate student in Computer Engineering specializing in VLSI testing, low-power circuit design, and verification.
            <br />
            I am expected to graduate from California State University, Fresno in December 2025.
            <br />
            I am passionate about digital and analog circuit design, ASIC/FPGA synthesis, and exploring the intersection of hardware and AI.
            <br />
            <br />
            Apart from engineering, some other activities I love:
            {/* >>> */}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring the latest in semiconductor technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books on personal growth and innovation
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {/* <<< CHANGED */}
            "Continuous learning and curiosity drive true innovation." 
            {/* >>> */}
          </p>
          <footer className="blockquote-footer">Sravani Yalaganamoni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
