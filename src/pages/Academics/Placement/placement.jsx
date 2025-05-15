import React from 'react';
import './placement.css';

const posters = [
  {
    src: "/src/assets/1.jpg",
    alt: "Placement Poster 1"
  },
  {
    src: "/src/assets/2.jpg",
    alt: "Placement Poster 2"
  },
  {
    src: "/src/assets/3.jpg",
    alt: "Placement Poster 3"
  }
];

const Placement = () => {
  return (
    <>
      {/* Achievements Section */}
      <div className="poster-container">
        <h2 className="poster-title">Achievements</h2>
        <div className="poster-grid">
          {posters.map((poster, index) => (
            <div className="poster-card" key={index}>
              <img src={poster.src} alt={poster.alt} className="poster-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Alumni Spotlight Section */}
      <div className="alumni-container">
        <h2 className="poster-title">Alumni Spotlight</h2>

        {/* Dr. Mushtafa */}
        <div className="alumni-section">
          <div className="alumni-profile">
            <img src="/src/assets/mustafa.jpg" alt="Dr. Mushtafa Mahamood TPK" className="alumni-image" />
            <div className="alumni-details">
              <h3>Dr. Mushtafa Mahamood TPK</h3>
              <p><strong>Degree Obtained:</strong> BNYS from Alva’s College</p>
              <p>After completing my Bachelor's in Naturopathy and Yogic Sciences from Rajiv Gandhi University of Health Sciences, I pursued a Post Graduate Diploma in Dietetics and Applied Nutrition at Manipal University and later earned an MPH in Global Health from European International University, Paris...</p>
              <p><strong>Year of Graduation:</strong> 2014 - BNYS, 2016 - PGDDN, 2024 - MPH</p>
              <p><strong>Current Designation:</strong> Naturopathy Practitioner, Dubai</p>

              <h4>Testimonial</h4>
              <p>“As a proud graduate of Alva’s College of Naturopathy and Yogic Sciences, my journey in the field of Naturopathy has been nothing short of transformative...”</p>

              <h4>Achievements</h4>
              <ul>
                <li>2017 - Cracked UAE Licensing Exam under MOHAP (Naturopathic Medicine)</li>
                <li>2021 - Obtained Dubai Health Authority’s License as Naturopathy Practitioner</li>
                <li>Former faculty at Dr. MGR University (Naturopathic Medical College)</li>
                <li>Teaching Herbal Medicine to international undergraduate students</li>
                <li>Independent researcher in Quantum Medicine</li>
                <li>Collaborating on Gut Health research including Colon Irrigation & FMT</li>
                <li>Published poetry collection: <em>"116 Eeksha Pushpangal"</em></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dr. Praneel */}
        <div className="alumni-section">
          <div className="alumni-profile">
            <img src="/src/assets/praneel2.jpg" alt="Dr. Praneel Rodrigues" className="alumni-image" />
            <div className="alumni-details">
              <h3>Dr. Praneel Rodrigues</h3>
              <p><strong>Achievement:</strong> Leads Alva's to Victory at National Naturopathy Championship</p>
              <p>Dr. Rodrigues emerged as a standout performer at the <strong>7th Naturopathy Day Intercollegiate Intellectual Meet 2025</strong>, held at the <em>National Institute of Naturopathy, Pune</em>...</p>
              <p>His performance helped his institution clinch the <strong>Overall Intercollegiate Championship</strong>, a proud moment of national recognition.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placement;
