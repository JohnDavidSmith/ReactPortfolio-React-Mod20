

import React from 'react';

const Resume = () => {
  return (
    <section className="centered-section">
      <div className="centered-content">
      <h2>Resume</h2>
      <a href="path_to_resume" download>Download Resume</a>
      <ul class="list">
        <li>Process Engineer / Educator with 15 years of production engineering experience</li>
        <li>Professional Engineers Ontario (P.E.O) – Provisional Licence Holder</li>
        <li>Expert to handle multiple projects to its conclusions from design to commissioning stages.</li>
        {/* Add more proficiencies as needed */}
      </ul>
      </div>
    </section>
  );
};

export default Resume;

