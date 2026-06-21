import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images
import adaptiveMbist from "../../Assets/Projects/adaptive_mbist.png";
import sramBist from "../../Assets/Projects/sram_bist.png";
import firFilter from "../../Assets/Projects/fir_filter.png";
import adder from "../../Assets/Projects/adder.png";
import fpu from "../../Assets/Projects/fpu.png";
import alu from "../../Assets/Projects/alu.png";
import transistorAdder from "../../Assets/Projects/transistor_adder.png";
import mbist from "../../Assets/Projects/mbist.png";
import niosGame from "../../Assets/Projects/heart_beat.png";
import dcnn from "../../Assets/Projects/dcnn_matlab.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adaptiveMbist}
              isBlog={false}
              title="Fault-Feedback-Driven SRAM MBIST for Low-Power and Time-Efficient SoC Memory Validation"
              description="Designed a power-aware adaptive Memory Built-In Self-Test (MBIST) architecture for 256×32 SRAM arrays. Developed March-based testing with fault-feedback-driven control to reduce redundant test cycles and switching activity. Modeled stuck-at, transition, coupling, and address decoder faults and performed RTL verification using ModelSim. Evaluated synthesis, timing, power, and DFT metrics using Synopsys Design Compiler and TetraMAX."
              ghLink="https://github.com/SravaniYalaganamoni/Fault-Feedback-Driven-SRAM-MBIST-for-Low-Power-and-Time-Efficient-SoC-Memory-Validation"
            />
          </Col>

          {/* 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sramBist}
              isBlog={false}
              title="32-bit RISC-V Processor with Integrated Floating-Point Unit"
              description="The design, implementation, and physical layout of a pipelined 32-bit RISC-V processor with an integrated floating-point arithmetic unit (FPU)."
              ghLink="https://github.com/SravaniYalaganamoni/32-bit-RISC-V-Processor-with-Integrated-Floating-Point-Unit"
            />
          </Col>

          {/* 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firFilter}
              isBlog={false}
              title="Test-Aware Low Power Clock Gating in DSP Blocks"
              description="Developed a 7-tap FIR filter for DSP applications with clock gating and scan chain insertion to optimize power efficiency and fault coverage. Achieved 100% fault coverage, reduced power to 247.8 µW, and maintained timing closure."
              ghLink="https://github.com/SravaniYalaganamoni/Test-Aware-Low-Power-Clock-Gating-in-DSP-Blocks"
            />
          </Col>

          {/* 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adder}
              isBlog={false}
              title="Low-Power Full Adder Design using TGL"
              description="Designed and compared a low-power full adder using Transmission Gate Logic (TGL) against a CMOS-based full adder. Achieved a 15% reduction in power and 10% reduction in delay, validated with Synopsys Design Compiler and PrimeTime."
              ghLink="https://github.com/SravaniYalaganamoni/Low-Power-Full-Adder-Design-using-TGL"
            />
          </Col>

          {/* 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transistorAdder}
              isBlog={false}
              title="Transistor-Level Design and Optimization of 6T and 14T Adders"
              description="Performed schematic design, layout creation, and post-layout simulation in Cadence Virtuoso for 6T and 14T adders. Achieved 99.98% delay reduction in 6T adder and 40.01% improvement in 14T adder through transistor sizing techniques."
              ghLink="https://github.com/SravaniYalaganamoni/Transistor-Level-Design-and-Optimization-of-6T-and-14T-Adders"
            />
          </Col>

          {/* 6 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fpu}
              isBlog={false}
              title="Floating-Point Unit (FPU) Synthesis and Physical Design"
              description="Synthesized a Verilog-based FPU using Synopsys Design Compiler and completed full physical design in Cadence Innovus. Achieved post-route timing closure and zero DRC/LVS violations."
              ghLink="https://github.com/SravaniYalaganamoni/Floating-Point-Unit-FPU-Synthesis-and-Physical-Design"
            />
          </Col>

          {/* 7 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alu}
              isBlog={false}
              title="Design, Verification, and Physical Implementation of an 8-bit Ripple Carry Adder"
              description="Designed an 8-bit Ripple Carry Adder (RCA) using Verilog, simulated in ModelSim, synthesized in Synopsys Design Compiler, and physically implemented using Cadence Innovus."
              ghLink="https://github.com/SravaniYalaganamoni/Design-Verification-and-Physical-Implementation-of-an-8-bit-Ripple-Carry-Adder"
            />
          </Col>

          {/* 8 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mbist}
              isBlog={false}
              title="A DCNN-Based Image Classification"
              description="Developed a deep convolutional neural network for fruit classification using MATLAB with custom CNN and pretrained models including ResNet-50 and SqueezeNet. Achieved high classification accuracy on Kaggle datasets."
              ghLink="https://github.com/SravaniYalaganamoni/DCNN-Image-Classification-MATLAB"
            />
          </Col>

          {/* 9 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={niosGame}
              isBlog={false}
              title="Heartbeat Monitor Simulator using Nios-II and RTOS"
              description="Designed a real-time heartbeat monitoring simulator on the DE1-SoC FPGA using the Nios-II processor and MicroC/OS-II RTOS. Implemented interrupt-driven pulse detection, BPM calculation, seven-segment display output, and abnormal heart-rate alerts."
              ghLink="https://github.com/SravaniYalaganamoni/Heartbeat-Monitor-Simulator-Using-Nios-II-and-RTOS"
            />
          </Col>

          {/* 10 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dcnn}
              isBlog={false}
              title="Wine Quality Classification using ML"
              description="Performed PCA, SVM, Decision Trees, and KNN on Kaggle wine dataset to classify wine quality based on physicochemical features such as acidity, alcohol content, pH, residual sugar, and density."
              ghLink="https://github.com/SravaniYalaganamoni/Wine-Quality-Classification-using-ML"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;