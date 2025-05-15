import React from "react";
import "./DiagnosisGynecology.css";
import faculty1 from "../../../../assets/user.webp";
import faculty2 from "../../../../assets/diagnosis1.webp";

const facultyData = [
  {
    id: 1,
    name: "Dr. Vasantha T", 
    image: faculty1,
    designation: "Professor",
    qualification: "MBBS, MD",
    yoe: "16 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Hana Shetty",
    image: faculty2,
    designation: "Assistant Professor",
    qualification: "MBBS , MD(OBG)",
    yoe: "6 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
];

const Anatomy = () => {
  return (
    <div>
      <div className="banner">
        <h1>Modern Diagnosis and Obstetrics and gynecology</h1>
      </div>

      <div className="DiagnosisGynecology-container">
        <div className="department container">
          <h2>About Department</h2>
          <p>
          The Department of Modern Diagnosis and Obstetrics and Gynecology focuses on advanced diagnostic
techniques and specialized care for women&#39;s health. Modern Diagnosis uses technologies like ultrasound
and genetic testing for accurate disease detection. Obstetrics manages pregnancy, childbirth, and
postpartum care, ensuring safe deliveries. Gynecology deals with female reproductive health, addressing
conditions like menstrual disorders, infertility, and reproductive system diseases. This department
provides comprehensive care for women’s health through modern diagnostics and expert medical
practices.
          </p>
        </div>

        <div className="department container">
          <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To provide comprehensive, advanced diagnostic and healthcare services for women, ensuring optimal maternal and
reproductive health through innovative treatments and expert care.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To offer high-quality diagnostic services using state-of-the-art technologies for accurate disease
            detection.</li>
            <li>To offer high-quality diagnostic services using state-of-the-art technologies for accurate disease
            detection.</li>
            <li>To specialize in gynecological health, addressing disorders of the female reproductive system and
            promoting preventive care.</li>
            <li>To foster research in modern diagnostic methods and women’s health to enhance clinical outcomes.</li>
            <li>To deliver compassionate and patient-centered care that empowers women to achieve optimal
            reproductive health.</li>
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
