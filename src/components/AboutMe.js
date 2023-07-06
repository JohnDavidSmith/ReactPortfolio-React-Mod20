
import React from 'react';
import myPhoto from '../my-image2.png';

const AboutMe = () => {
  return (
    <section className="about-me" >
       <div className="about-me-content">
      <h2>About Me</h2>
      <img src={myPhoto} alt="John face and half of his body" className="profile-photo" />
      <p>
Initiated and developed innovations, technologies and procedures to optimize operations and operational costs. 
Troubleshot and investigated operations to find the causes of operational problems.
Assisted in identifying, creating and tracking the key metrics associated with chemical used and continually improve process performance, business management, and safety KPIs. 
Developed and monitored the output of controlled tests in order to prepare procedures for field execution to upgrade, repair, retrofit, replacement and repair of plant equipment. 
Oversaw daily operations; mentored, trained and supervised the chemist and new engineers.
Developed testing procedures and performed audits to ensure consistency in both process and results.
Prepared Operating Instruction Manuals and reviewed or developed small and large projects required to maintain Maximum Sustainable Capacity. 
Used my knowledge in engineering practices, economic principles, calculation methods and design in order to support department objectives and improve process performance, business management, and safety KPIs. 
Utilized my knowledge and experience in international codes, standards, specifications and industry EPC entities, such as API Standards in order to prepare procedures for field execution to upgrade, repair, retrofit, replacement and repair of plant equipment and prepare Operating Instruction Manuals.  
</p>
</div>
    </section>
  );
};

export default AboutMe;

