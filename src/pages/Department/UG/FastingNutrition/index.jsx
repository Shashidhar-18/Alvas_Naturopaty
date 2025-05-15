import React from "react";
import "./FastingNutrition.css";
import faculty1 from "../../../../assets/user.webp";
import faculty2 from "../../../../assets/user.webp";


const facultyData = [
  {
    id: 1,
    name: "Dr. Subramanya Padyana", 
    image: faculty1,
    designation: "Professor",
    qualification: "BSC , BAMS, DNHE , MD AYU",
    yoe:"17 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Rajini S",
    image: faculty2,
    designation: "Lecturer",
    qualification: "BNYS , Naturopathy",
    yoe:"1 Year",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  

  
  
];

const Anatomy = () => {
  return (
    <div>
      <div className="banner">
        <h1>Fasting , Dietetics, Nutrition and Medicinal Herbs</h1>
      </div>

      <div className="FastingNutrition-container">
      <div className="department container">
          <h2>About Department</h2>
          <p>
          The Department of Fasting, Dietetics, Nutrition, and Medicinal Herbs studies the impact of food, fasting,
and herbs on health. Fasting explores its health benefits like detoxification and weight management.
Dietetics focuses on designing specialized meal plans to manage medical conditions. Nutrition examines
the role of nutrients in maintaining health and preventing diseases. Medicinal Herbs studies the
therapeutic properties of plants for treating various health issues. This department combines these fields
to promote holistic health and wellness.
          </p>
        </div>

        <div className="department container">
          <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To promote holistic health and well-being by integrating the benefits of fasting, nutrition, dietetics, and
medicinal herbs for preventive healthcare and disease management.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To provide comprehensive education on the therapeutic uses of fasting, dietetics, nutrition, and
            medicinal herbs.</li>
            <li>To train students in the application of nutrition and dietetics for managing health conditions and
            promoting wellness.</li>
            <li>To explore and research the health benefits of medicinal herbs and their integration into modern
            healthcare.</li>
            <li>To emphasize evidence-based practices in fasting and nutrition for overall health improvement.</li>
            <li>To encourage sustainable and balanced approaches to nutrition and wellness through scientific and
            traditional knowledge.</li>
          </ul>
        </p>
        </div>
        
        <div className="faculty-grid">
          {facultyData.map((faculty) => (
            <div key={faculty.id} className="faculty-card">
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                  <div className="faculty-info">
                    <h3 className="faculty-name">{faculty.name}</h3>
                    <p className="faculty-designation">{faculty.designation}</p>
                  </div>
                </div>

                {/* Back Side */}
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
