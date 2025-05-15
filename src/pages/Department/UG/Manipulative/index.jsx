import React from "react";
import "./Manipulative.css";
import faculty1 from "../../../../assets/manipulative1.jpeg";
import faculty2 from "../../../../assets/manipulative2.jpeg";

const facultyData = [
  {
    id: 1,
    name: "Dr. Darvine Sebastine", 
    image: faculty1,
    designation: "Assistant Professor",
    qualification: "BPT, MPT",
    yoe: "4 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Pragathi",
    image: faculty2,
    designation: "Assistant Professor",
    qualification: "BNYS, M.sc Nutrition & Dietetics",
    yoe: "5 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
];

const Anatomy = () => {
  return (
    <div>
      <div className="banner">
        <h1>Manipulative Therapies & Physical Medicine</h1>
      </div>

      <div className="Manipulative-container">
      <div className="department container">
          <h2>About Department</h2>
          <p>
          The Department of Manipulative Therapies and Physical Medicine focuses on the use of hands-on
techniques and physical interventions to treat musculoskeletal pain, injuries, and disorders. Manipulative
therapies include various manual techniques like chiropractic adjustments, osteopathy, and therapeutic
massage, aimed at improving joint mobility, reducing pain, and restoring normal function. These
therapies are often used for conditions such as back pain, neck pain, and joint stiffness.<br></br>
Physical medicine involves the use of physical methods such as exercise, heat therapy, cold therapy,
ultrasound, electrical stimulation, and hydrotherapy to treat and rehabilitate individuals with
musculoskeletal injuries, neurological conditions, or disabilities. This department emphasizes non-
invasive, holistic approaches to healing and rehabilitation, aiming to improve physical function, reduce
pain, and enhance the quality of life. Students in this department are trained to assess, diagnose, and treat
physical impairments using manual and physical modalities, supporting overall health and mobility.
          </p>
        </div>

        <div className="department container">
          <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To be a leader in providing evidence-based, non-invasive treatments through manipulative therapies and physical
medicine, enhancing the well-being and quality of life for individuals with musculoskeletal and neurological
conditions.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To offer high-quality education and training in manipulative therapies and physical medicine for
            effective rehabilitation and pain management.</li>
            <li>To develop skilled practitioners who can assess and treat musculoskeletal and neurological disorders
            through hands-on and physical interventions.</li>
            <li>To integrate modern techniques with traditional healing practices, ensuring holistic patient care.</li>
            <li>To foster research and innovation in physical medicine and manipulative therapies for improved
            treatment outcomes.</li>
            <li>To promote a patient-centered approach, focusing on rehabilitation, mobility, and overall health
            improvement.</li>
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
