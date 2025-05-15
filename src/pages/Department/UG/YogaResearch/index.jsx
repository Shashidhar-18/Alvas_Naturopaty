import React from "react";
import "./YogaResearch.css";
import faculty1 from "../../../../assets/yoga1.jpeg";
import faculty2 from "../../../../assets/user.webp";
import faculty3 from "../../../../assets/yoga3.jpg";
import faculty4 from "../../../../assets/yoga4.jpg";
const facultyData = [
  {
    id: 1,
    name: "Dr. Archana ", 
    image: faculty1,
    designation: "Professor",
    qualification: "BNYS , MD YOGA",
    yoe: "15 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Swathi K V",
    image: faculty2,
    designation: "Associate Professor",
    qualification: "BNYS.MD YOGA",
    yoe: "12 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    name: "Dr. Anupritha", 
    image: faculty3,
    designation: "Assistant Professor",
    qualification: "BAMS, MSc Yoga",
    yoe: "8 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 4,
    name: "Dr. Sharada", 
    image: faculty4,
    designation: "Assistant Professor",
    qualification: "BNYS, MD Yoga",
    yoe: "2 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },

];

const Anatomy = () => {
  return (
    <div>
      <div className="banner">
        <h1>Department of Yoga and Research Methodology</h1>
      </div>

      <div className="YogaResearch-container">
      <div className="department container">
          <h2>About Department</h2>
          <p>
          Yoga is an ancient science that focuses on the holistic development of the body, mind, and spirit.
It includes physical postures (asanas), breathing techniques (pranayama), meditation, and ethical
principles that promote physical health, mental clarity, and emotional stability. In the context of health
sciences, yoga is recognized for its therapeutic benefits in managing stress, lifestyle disorders, and
improving overall well-being. It plays a significant role in preventive and rehabilitative healthcare.<br></br>
Research Methodology refers to the systematic process used to plan, conduct, and analyze research. It
involves identifying a research problem, reviewing literature, selecting appropriate methods, collecting
data, and drawing conclusions. In the field of yoga and health sciences, research methodology is essential
for scientifically validating the benefits of yoga practices. It enables students and professionals to design
effective studies, evaluate outcomes, and contribute to evidence-based practices. Together, yoga and
research methodology promote a scientific and holistic approach to health and wellness.
          </p>
        </div>

        <div className="department container">
          <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To promote holistic health and well-being through the integration of yoga and scientific research, fostering a
balanced and evidence-based approach to healthcare.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To provide comprehensive education in traditional yogic practices and principles.</li>
            <li>To develop scientific research skills for evaluating the effectiveness of yoga in health and disease.</li>
            <li>To encourage interdisciplinary research combining yoga with modern medical science.</li>
            <li>To promote physical, mental, and spiritual well-being through yoga-based lifestyle interventions.</li>
            <li>To contribute to evidence-based healthcare through quality research and publications in yoga and
            allied sciences.</li>
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
