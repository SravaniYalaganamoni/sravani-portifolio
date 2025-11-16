import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "VLSI Design Engineer",
          "ASIC/FPGA Enthusiast",
          "Semiconductor Researcher",
          "Digital Circuit Designer",
          "EDA Tools User",
          "RTL to GDSII Flow Specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
