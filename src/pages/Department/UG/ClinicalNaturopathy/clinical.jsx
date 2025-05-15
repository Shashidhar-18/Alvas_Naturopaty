import React from "react";
import "./Clinical.css";
import faculty1 from "../../../../assets/clinical6.jpeg";
import faculty2 from "../../../../assets/user.webp";
import faculty3 from "../../../../assets/clinical5.jpeg";
import faculty4 from "../../../../assets/clinical4.jpg";
import faculty5 from "../../../../assets/clinical1.jpg";
import faculty6 from "../../../../assets/clinical3.jpg";
import faculty7 from "../../../../assets/clinical2.jpg";
import faculty8 from "../../../../assets/user.webp";

const facultyData = [
  {
    id: 1,
    name: "Dr. Shankar Shetty", 
    image: faculty1,
    designation: "Professor",
    qualification: "BSc , MLT, MSC(MED), PHD",
    yoe: "15 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,  
    name: "Dr. Padmanabha Shenoy",
    image: faculty2,
    designation: "Professor",
    qualification: "BNYS",
    yoe: "13 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    name: "Dr. Lakshmeesha D R",
    image: faculty3,
    designation: "Associate Professor",
    qualification: "BNYS, MD Naturopathy",
    yoe: "9 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 4,
    name: "Dr. Saritha N K",
    image: faculty4,
    designation: "Assistant Professor",
    qualification: "BNYS",
    yoe: "6 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 5,
    name: "Dr. Prajna P shetty",
    image: faculty5,
    designation: "Associate Professor",
    qualification: "BNYS, MD Naturopathy",
    yoe: "13 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 6,
    name: "Dr. Greeshma Vivek Alva",
    image: faculty6,
    designation: "Lecturer",
    qualification: "BNYS",
    yoe: "1 Year",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 7,
    name: "Dr. Akshatha",
    image: faculty7,
    designation: "Lecturer",
    qualification: "BNYS",
    yoe: "4 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 8,
    name: "Dr. Audrey Pinto",
    image: faculty8,
    designation: " Professor",
    qualification: "MA , PhD",
    yoe: "20 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
];

const Anatomy = () => {
  return (
    <div>
      <div className="banner">
        <h1>Clinical Naturopathy Diagnosis and Research methodology</h1>
      </div>

      <div className="Clinical-container">
        <div className="department container">
          <h2>About Department</h2>
          <p>
          The Department of Clinical Naturopathy, Diagnosis, and Research Methodology focuses on using natural therapies
like nutrition, herbal medicine, and hydrotherapy to promote healing and overall wellness. It combines traditional
diagnostic methods and modern medical techniques to assess health and treat the root causes of illness. The
department also emphasizes research to validate the effectiveness of naturopathic treatments and integrate them
with conventional medicine.
          </p>
        </div>

        <div className="department container">
          <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To advance the field of naturopathic medicine by integrating research-driven, natural healing therapies with
modern healthcare practices for comprehensive patient care and wellness.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To provide education and training in clinical naturopathy, focusing on natural therapeutic methods for
            healing and wellness.</li>
            <li>To conduct research that evaluates the effectiveness of naturopathic treatments in treating various
            health conditions.</li>
            <li>To promote a holistic approach to healthcare, integrating naturopathy with conventional medical
            practices for better patient outcomes.</li>
            <li>To train professionals in research methodology, emphasizing evidence-based practices and scientific
            validation of natural therapies.</li>
            <li>To foster awareness of the benefits of naturopathic medicine in maintaining and improving health.</li>
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
