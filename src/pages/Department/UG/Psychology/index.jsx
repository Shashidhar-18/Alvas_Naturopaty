import React from "react";
import "./Psycology.css";
import faculty1 from "../../../../assets/psych2.jpg";
import faculty2 from "../../../../assets/psych1.jpg";


const facultyData = [
  {
    id: 1,
    name: "Dr.Amshuman R Yadav", 
    image: faculty1,
    designation: "Assistant Professor",
    qualification: "BNYS, MD Yoga",
    yoe: "1 Year",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,  
    name: "Dr. Rashmitha",
    image: faculty2,
    designation: "Assistant Professor",
    qualification: "BNYS, Msc.Yoga ",
    yoe: "6 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  
];

const Anatomy = () => {
  return (
    <div>
      <div className="banner">
        <h1>Psycology  Allied Health Sciences</h1>
      </div>

      <div className="Psycology-container">
      <div className="department container">
          <h2>About Department</h2>
          <p>
          The Department of Psychology and Allied Health Sciences focuses on the study of human behavior,
mental processes, and the application of psychological principles in healthcare. It covers various aspects
of mental health, including diagnosis, treatment, and prevention of psychological disorders. Allied health
sciences in this department include therapeutic techniques, counseling, and rehabilitation strategies to
support individuals with mental health challenges, disabilities, or chronic conditions. The department
combines theoretical knowledge with practical applications to improve mental well-being and enhance
the quality of life.
          </p>
        </div>

        <div className="department container">
          <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To foster mental well-being through comprehensive psychological care and allied health practices, enhancing the
quality of life for individuals across diverse healthcare settings.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To provide high-quality education and training in psychology and allied health sciences, preparing
            professionals for effective mental health support.</li>
            <li>To offer evidence-based therapeutic interventions for the diagnosis, treatment, and prevention of
            psychological disorders.</li>
            <li>To integrate psychological principles with allied health practices for holistic care and rehabilitation.</li>
            <li>To conduct research focused on improving mental health care practices and outcomes.</li>
            <li>To promote mental health awareness and reduce the stigma associated with psychological conditions.</li>
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
