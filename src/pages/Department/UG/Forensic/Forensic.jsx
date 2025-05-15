import React from "react";
import "./Forensic.css";
import faculty1 from "../../../../assets/trustee1.webp";
import faculty2 from "../../../../assets/forensic2.jpeg";

const facultyData = [
  {
    id: 1,
    name: "Dr. Vinay Alva", 
    image: faculty1,
    designation: "Associate Professor",
    qualification: "MBBS, MS surgery",
    yoe: "8 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Charishma",
    image: faculty2,
    designation: "Lecturer",
    qualification: "BNYS",
    yoe: "1 Year",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
];

const Anatomy = () => {
  return (
    <div>
      <div className="banner">
        <h1>Forensic Medicine & Toxicology, Pharmacology</h1>
      </div>

      <div className="Forensic-container">
      <div className="department container">
          <h2>About Department</h2>
          <p>
          Forensic Medicine and Toxicology applies medical knowledge to legal matters, investigating causes of
death, injuries, and poisonings. Forensic medicine focuses on determining the cause of death and
providing legal evidence, while toxicology studies the effects of poisons and toxins on the body.<br>
</br>
Pharmacology is the study of drugs, including their actions, effects, therapeutic uses, and side effects. It
helps understand how drugs interact with the body and their potential benefits or risks, supporting safe
and effective medical treatments.
          </p>
        </div>

        <div className="department container">
          <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To advance knowledge in forensic medicine, toxicology, and pharmacology, fostering expertise in legal
investigations, drug safety, and therapeutic applications to improve public health and justice.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To provide comprehensive education in forensic medicine, toxicology, and pharmacology for
            professionals in the healthcare, law enforcement, and research sectors.</li>
            <li>To train students in the identification, investigation, and legal aspects of diseases, injuries, and
            poisoning cases.</li>
            <li>To promote research in drug development, safety, and the identification of toxins and poisons.</li>
            <li>To foster interdisciplinary collaboration in the fields of law, medicine, and pharmacology for better
            healthcare outcomes.</li>
            <li>To ensure ethical practices and a deep understanding of the legal, medical, and societal implications of
            forensic science and pharmacological advancements.</li>
          </ul>
        </p>
        </div>

        <h2 className="faculty-heading">Our Faculty</h2>

        <div className="faculty-grid">
          {facultyData.map((faculty) => (
            <div key={faculty.id} className="faculty-card">
              <div className="card-inner">
                <div className="card-front">
                  <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                  <div className="faculty-info">
                    <h3 className="faculty-name">{faculty.name}</h3>
                    <p className="faculty-designation">{faculty.designation}</p>
                  </div>
                </div>
                <div className="card-back">
                  <div className="faculty-back-details">
                    <h3 className="faculty-back-name">{faculty.name}</h3>
                    <p className="faculty-back-designation">{faculty.designation}</p>
                    <p className="faculty-back-qualification"><strong>Qualification:</strong> {faculty.qualification}</p>
                    <p className="faculty-back-yoe"><strong>YOE:</strong> {faculty.yoe}</p>
                    {/* <p className="faculty-back-mobile"><strong>Mobile:</strong> {faculty.mobile}</p> */}
                    <p className="faculty-back-email"><strong>Email:</strong> {faculty.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Anatomy;
