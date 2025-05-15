import React from "react";
import "./Anatomy.css";
import faculty1 from "../../../../assets/anatomy1.jpg";
import faculty2 from "../../../../assets/anatomy2.jpg";

const facultyData = [
  {
    id: 1,
    name: "Dr. Harish Nayak",
    image: faculty1,
    designation: "Professor",
    qualification: "MBBS, MS",
    yoe: "22 Years",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Manu Bhat",
    image: faculty2,
    designation: "Professor",
    qualification: "BHMS.MD HOMEO",
    yoe: "13 Years",
    email: "jane.smith@example.com"
  },
];

const Anatomy = () => {
  return (
    <div>
      <div className="banner">
        <h1>Anatomy Department</h1>
      </div>

      <div className="anatomy-container">
        <div className="department container">
          <h2>About Department</h2>
          <p>
          The Anatomy Department is a fundamental part of any medical or health sciences institution,
dedicated to the study of the structure of the human body. It covers various areas such as gross anatomy,
which involves the study of organs and body parts visible to the naked eye, and microscopic anatomy
(histology), which focuses on tissues and cells observed under a microscope. The department also deals
with developmental anatomy (embryology), exploring how the body forms before birth, and
neuroanatomy, which studies the structure of the nervous system. Students in the anatomy department
learn through practical experiences like cadaver dissection, the use of anatomical models, histology
slides, and digital tools. The department plays a crucial role in building a strong foundation for future
doctors and healthcare professionals by combining theoretical knowledge with hands-on practice, and it
often supports research activities related to human biology and disease mechanisms.
          </p>
        </div>

        <div className="department container">
          <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To provide an excellent foundation in human anatomy through innovative education, research, and hands-on training,
          preparing students for advanced medical practice and scientific exploration.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To deliver high-quality teaching in gross anatomy, histology, embryology, and neuroanatomy using
            both traditional and modern methods.</li>
            <li>To encourage hands-on learning through cadaver dissection, microscopy, and digital simulations.</li>
            <li>To promote critical thinking and research skills in the field of anatomical sciences.</li>
            <li>To foster ethical practices, professionalism, and respect for human dignity in anatomical study.</li>
            <li>To support interdisciplinary collaboration for advancing knowledge in medicine and healthcare.</li>
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
