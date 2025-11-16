import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              {/* <<< CHANGED */}
              I am a graduate student in Computer Engineering at California State University, Fresno, specializing in VLSI testing, low-power circuit design, and verification.
              <br />
              <br />
              I am proficient in industry-standard languages like
              <i>
                <b className="purple"> Verilog, SystemVerilog, Python, C++, and Java. </b>
              </i>
              <br />
              <br />
              My core interests include digital and analog circuit design, ASIC/FPGA synthesis, and low-power hardware architectures.
              <i>
                <b className="purple">
                  VLSI Testing, RTL-to-GDSII Implementation, and Digital System Design.
                </b>
                <br />
                I have hands-on experience with leading EDA tools such as
                <b className="purple">
                  {" "}Synopsys Design Compiler, PrimeTime, Cadence Innovus, Virtuoso, and ModelSim.
                </b>
              </i>
              <br />
              <br />
              I am always eager to collaborate on projects involving
              <b className="purple"> ASIC/FPGA design, verification, and semiconductor hardware innovation.</b>
              {/* >>> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  // <<< CHANGED
                  href="https://github.com/SravaniYalaganamoni"
                  // >>>
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // <<< CHANGED
                  href="https://x.com/"
                  // >>>
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  // <<< CHANGED
                  href="https://www.linkedin.com/in/sravani-yalaganamoni/"
                  // >>>
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
