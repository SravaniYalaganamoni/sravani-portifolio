import React from "react";
import "./ToolsGrid.css"; // Copy the CSS below and save as ToolsGrid.css

const tools = [
  { name: "Synopsys ICC2", level: "Advanced" },
  { name: "Design Compiler", level: "Advanced" },
  { name: "PrimeTime", level: "Advanced" },
  { name: "VCS", level: "Intermediate" },
  { name: "Cadence Innovus", level: "Advanced" },
  { name: "Virtuoso", level: "Intermediate" },
  { name: "ModelSim", level: "Intermediate" },
  { name: "TetraMAX", level: "Intermediate" },
  { name: "MATLAB", level: "Intermediate" },
  { name: "Machine Learning Tools", level: "Intermediate" },
  { name: "SPICE", level: "Intermediate" },
  { name: "Linux", level: "Advanced" },
  { name: "VS Code", level: "Advanced" }
];

const getLevelClass = (level) => {
  switch (level) {
    case "Advanced": return "level-advanced";
    case "Intermediate": return "level-intermediate";
    case "Beginner": return "level-beginner";
    default: return "";
  }
};

function ToolsGrid() {
  return (
    <div className="tools-section">
      <h2 className="tools-title">Professional Tools</h2>
      <p className="tools-description">
        These are the VLSI/EDA/software tools I've worked with and continue to develop expertise in.
      </p>
      <div className="tools-grid">
        {tools.map((tool, i) => (
          <div key={i} className="tool-card">
            <span className="tool-name">{tool.name}</span>
            <span className={`tool-level ${getLevelClass(tool.level)}`}>
              {tool.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolsGrid;
