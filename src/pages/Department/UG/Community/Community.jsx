import React from "react";
import "./Community.css";
import faculty1 from "../../../../assets/community1.jpeg";
// import faculty2 from "../../../../assets/user.webp";
            

const facultyData = [
  {
    id: 1,
    name: "Dr.Sriram Bhat", 
    image: faculty1,
    designation: " Professor",
    qualification: "B Pharma , DPH",
    yoe: "20 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  // {
  //   id: 2,  
  //   name: "Dr. Shravya C N",
  //   image: faculty2,
  //   designation: "Assistant Professor",
  //   qualification: "BNYS, MD Naturopathy",
  //   yoe: "1 Year",
  //   // mobile: "+91 87654 32109",
  //   email: "jane.smith@example.com"
  // },
  
];

const Anatomy = () => {
  return (
    <div>
      <div className="banner">
        <h1>Community Medicine</h1>
      </div>

      <div className="Community-container">
        <div className="department container">
          <h2>About Department</h2>
          <p>
          Community Medicine focuses on the health of populations, aiming to prevent and manage diseases at the
community level. It involves studying health patterns, addressing health disparities, and implementing
public health policies and programs. Professionals in this field work to improve health outcomes, promote
health education, and ensure equitable access to healthcare for all communities.
          </p>
        </div>

        <div className="department container">
          <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To improve the health and well-being of communities through the prevention of diseases, promotion of health, and
equitable access to healthcare services.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To provide quality education and training in community medicine, focusing on public health and
            preventive care.</li>
            <li>To conduct research on community health issues, identifying key determinants of health and effective
            interventions.</li>
            <li>To promote health awareness and preventive measures through community-based programs.</li>
            <li>To collaborate with government and health organizations to enhance healthcare delivery at the
            community level.</li>
            <li>To foster a holistic approach to health, addressing physical, mental, and social well-being in
            populations</li>
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
