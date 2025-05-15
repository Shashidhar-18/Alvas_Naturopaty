import React from "react";
import "./Hydrotheraphy.css";
import faculty1 from "../../../../assets/hydrotherapy1.jpeg";
import faculty2 from "../../../../assets/hydrotherapy2.jpeg";

const facultyData = [
  {
    id: 1,
    name: "Dr. Vineetha", 
    image: faculty1,
    designation: "Associate Professor",
    qualification: "BNYS , MD Naturopathy",
    yoe: "10 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Jyothi K V",
    image: faculty2,
    designation: "Assistant Professor",
    qualification: "BNYS",
    yoe: "9 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
];

const Anatomy = () => {
  return (
    <div>
      <div className="banner">
        <h1>Department of Hydrotheraphy and Mud Theraphy</h1>
      </div>

      <div className="Hydrotheraphy-container">
      <div className="department container">
          <h2>About Department</h2>
          <p>
          The Department of Hydrotherapy and Mud Therapy focuses on using water and mud-based treatments for
therapeutic purposes. These therapies are part of alternative medicine and are known for their healing
properties. Hydrotherapy uses water in various forms—such as hot or cold baths, steam, and underwater
massages—to improve circulation, reduce pain, and enhance overall health. It’s commonly used for
conditions like arthritis, muscle tension, and skin disorders.<br></br>
Mud therapy involves the use of natural mud to promote healing. The mud, rich in minerals, is applied to
the body to treat a variety of conditions, including inflammation, joint pain, and skin problems. It is
believed to draw out toxins, improve blood circulation, and promote relaxation. Both hydrotherapy and
mud therapy are utilized to reduce stress, improve detoxification, and enhance physical well-being in a
natural and holistic manner.
          </p>
        </div>

        <div className="department container">
          <h2>VISION-MISSION</h2>
          <h3>Vission</h3>
          <p>
          To promote natural healing and wellness through hydrotherapy and mud therapy, providing alternative and
          effective treatments for a range of health conditions.
          </p>
          <h3>Mission</h3>
          <p>
          <ul>
            <li>To offer education and training on hydrotherapy and mud therapy techniques for holistic healing.</li>
            <li>To integrate water and mud therapies into wellness programs for physical and mental health
            improvement.</li>
            <li>To research and promote the therapeutic benefits of natural treatments in managing chronic conditions.</li>
            <li>To provide safe and effective treatment options that complement traditional medical approaches. </li>
            <li>To foster awareness and acceptance of alternative therapies for enhancing overall well-being.</li>
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
