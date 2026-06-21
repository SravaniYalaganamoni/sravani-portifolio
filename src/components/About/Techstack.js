import React from "react";
import "./ProfessionalSkills.css"; // Create and style this CSS file

const skills = [
  { name: "Verilog", level: "Advanced" },
  { name: "SystemVerilog", level: "Advanced" },
  { name: "UVM", level: "Advanced" },
  { name: "C++", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "MATLAB", level: "Advanced" },
  { name: "TCL", level: "Advanced" },
  { name: "C", level: "Advanced" },
  { name: "Perl", level: "Advanced" },
  { name: "Machine Learning", level: "Intermediate" },
  { name: "SPICE", level: "Intermediate" },
  { name: "Linux", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
  { name: "Java", level: "Intermediate" }
];

const getLevelClass = (level) => {
  switch (level) {
    case "Advanced": return "level-advanced";
    case "Intermediate": return "level-intermediate";
    case "Beginner": return "level-beginner";
    default: return "";
  }
};

function Techstack() {
  return (
    <div className="skills-section">
      <h2 className="skills-title"> </h2>
      <p className="skills-description">
        These are the technologies and programming languages I&apos;ve worked with and continue to develop expertise in.
      </p>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            <span className="skill-name">{skill.name}</span>
            <span className={`skill-level ${getLevelClass(skill.level)}`}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;
