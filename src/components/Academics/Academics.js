import React from "react";
import "./Academics.css";
import Particle from "../Particle";

const academicsData = [
  {
    title: "Master of Science in Electrical and Computer Engineering",
    institution: "California State University, Fresno, CA, USA",
    duration: "Aug 2023 - Dec 2025",
    cgpa: "3.5 / 4.0",
    details: [
      "Relevant coursework: Semiconductor Manufacturing, VLSI Design, VLSI Testing, Machine Learning, Cybersecurity, Probability Theory",
      "Projects: Adaptive Test Pattern Generation for SRAM BIST, Test-Aware Low Power Clock Gating in DSP Blocks, Floating-Point Unit Synthesis",
      "Hands-on experience with Synopsys and Cadence EDA tools",
    ],
  },
  {
    title: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "Malla Reddy Engineering College, Hyderabad, India",
    duration: "June 2018 - May 2022",
    cgpa: "8.8 / 10",
    details: [
      "Relevant coursework: Computer Architecture, Digital System Design, CMOS Design, Microcontrollers & Microprocessors, Electronic Device Circuits",
      "Final year project in digital circuit design",
      "Active participation in technical workshops and seminars",
    ],
  },
  {
    title: "Secondary Education (12th Grade)",
    institution: "Board of Intermediate Education, Telangana, India",
    duration: "2016 - 2018",
    cgpa: "9.67 / 10",
    details: [
      "Focus: Mathematics, Physics, Chemistry",
      "Strong foundation in Science and Mathematics",
      "Awarded for academic excellence",
    ],
  },
];

function Academics() {
  return (
    <div className="academics-container">
      <Particle />
      <h1 className="academics-title">My Academic Journey</h1>
      <div className="academics-grid">
        {academicsData.map((edu, index) => (
          <div key={index} className="academic-card">
            <h2>{edu.title}</h2>
            <h3>{edu.institution}</h3>
            <p className="academic-duration">{edu.duration}</p>
            <p className="academic-cgpa">CGPA: {edu.cgpa}</p>
            <ul>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academics;
