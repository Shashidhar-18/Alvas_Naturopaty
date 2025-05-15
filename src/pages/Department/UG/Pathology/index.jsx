import React from "react";
import "./Pathology.css";
import faculty1 from "../../../../assets/patho1.jpg";
import faculty2 from "../../../../assets/patho2.jpg";
import faculty3 from "../../../../assets/patho3.jpg";
const facultyData = [
  {
    id: 1,
    name: "Mrs. Srivanitha", 
    image: faculty1,
    designation: "Professor",
    qualification: "M.sc (MED Microbiology)",
    yoe: "11 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,  
    name: "Dr. Rashmi Pandith",
    image: faculty2,
    designation: "Associate Professor",
    qualification: "BAMS, MSC Physiology",
    yoe: "8 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    name: "Dr. Prajwal H M",
    image: faculty3,
    designation: "Assistant Professor",
    qualification: "BNYS, MD Naturopathy",
    yoe: "1 Year",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
];

const Anatomy = () => {
  return (
    <div>
      <div className="banner">
        <h1>Pathology and Microbiology</h1>
      </div>

      <div className="Pathology-container">
      <div className="department container">
          <h2>About Department</h2>
          <p>
          Pathology is the study of diseases, focusing on their causes, development, and effects on the
human body. It involves examining tissues, organs, and bodily fluids to understand the nature of diseases,
whether they are infectious, genetic, or environmental. Pathologists play a crucial role in diagnosing
diseases, guiding treatment decisions, and advancing medical research through laboratory investigations.<br></br>
Microbiology, on the other hand, is the study of microorganisms, including bacteria, viruses, fungi, and
parasites. It explores their characteristics, behavior, and role in causing diseases. Microbiologists work to
identify pathogens, understand their mechanisms of infection, and develop strategies for prevention,
diagnosis, and treatment. Both Pathology and Microbiology are integral to medical diagnostics, clinical
practice, and public health, providing valuable insights into disease mechanisms and management.
          </p>
        </div>

        <div className="department container">
          <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To advance knowledge in the diagnosis and understanding of diseases, contributing to improved
healthcare through research and education in pathology and microbiology.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To provide high-quality education and training in pathology and microbiology for medical and
            healthcare professionals.</li>
            <li>To foster critical thinking and scientific inquiry in the study of disease mechanisms and
            microorganisms.</li>
            <li>To encourage research in disease diagnosis, prevention, and treatment, contributing to advancements
            in medical science.</li>
            <li>To integrate modern diagnostic technologies and techniques in pathology and microbiology. </li>
            <li>To promote interdisciplinary collaboration for better patient care and public health outcomes.</li>
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
