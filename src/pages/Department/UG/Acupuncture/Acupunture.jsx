import React from "react";
import "./Acupuncture.css";
import faculty1 from "../../../../assets/message1.jpeg";
import faculty2 from "../../../../assets/user.webp";
import faculty3 from "../../../../assets/Accupunture1.jpeg";
const facultyData = [
  {
    id: 1,
    name: "Dr. Vanitha S Shetty", 
    image: faculty1,
    designation: "Principal",
    qualification: "BNYS, MS Councelling",
    yoe: "20 Years",
    mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,  
    name: "Dr. Mohammed Aquathar",
    image: faculty2,
    designation: "Lecturer",
    qualification: "BNYS",
    yoe: "1 Year",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    name: "Dr. Swathi S",
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
        <h1>Acupunture and Acupressure, Color and Magneto Biology</h1>
      </div>

      <div className="Acupunture-container">
        <div className="department container">
          <h2>About Department</h2>
          <p>
          The Department of Acupuncture and Acupressure focuses on traditional therapies that stimulate specific
points on the body to promote healing and relieve pain. Acupuncture uses fine needles, while acupressure
applies physical pressure to these points, helping manage pain, stress, and improve overall well-being.<br></br>
Color and Magneto Biology studies the therapeutic effects of colors and magnetic fields on living
organisms. Color therapy uses different colors to promote emotional and physical healing, while
magnetobiology explores how magnetic fields can improve circulation, reduce inflammation, and support
health. Both fields combine holistic practices with scientific principles to enhance overall health.
          </p>
        </div>

        <div className="department container">
        <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To integrate traditional healing practices with modern science, promoting holistic health and wellness through
acupuncture, acupressure, color therapy, and magnetobiology.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To provide comprehensive education in acupuncture, acupressure, color therapy, and magnetobiology.</li>
            <li>To promote the therapeutic benefits of natural healing techniques for pain management and overall
            health.</li>
            <li>To encourage research in the fields of acupuncture, acupressure, and the effects of color and magnetic
            fields on human biology.</li>
            <li>To foster interdisciplinary collaboration between traditional and modern medicine for a holistic
            approach to wellness.</li>
            <li>To empower students and healthcare professionals with the knowledge and skills to apply alternative
            therapies for improving health outcomes.</li>
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
                    <p className="faculty-back-mobile"><strong>Mobile:</strong> {faculty.mobile}</p>
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
