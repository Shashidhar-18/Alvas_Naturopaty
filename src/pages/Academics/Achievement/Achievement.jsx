import React from 'react';
import './Achievement.css';

const placementData = [
  {
    name: "Dr. Sangeethalaxmi M J",
    photo: "/src/assets/alumni/a1.jpg",
    jobSector: "Private Sector",
    address: "Yenepoya Naturopathy and Yogic Science College",
    institution: "Yenepoya Deemed to be University",
    designation: "Associate Professor cum SMO"
  },
  {
    name: "Dr. Abhijna",
    photo: "/src/assets/alumni/a2.jpeg",
    jobSector: "Private Sector",
    address: "Yenepoya Naturopathy and Yoga Medical College",
    institution: "Yenepoya Naturopathy and Yoga Medical College",
    designation: "Assistant Professor and Medical Officer"
  },
  {
    name: "Dr. Sharada Shetty P S",
    photo: "/src/assets/alumni/a3.jpg",
    jobSector: "Private Sector",
    address: "Alvas College of Naturopathy and Yogic Science",
    institution: "Alvas College of Naturopathy and Yogic Science",
    designation: "Assistant Professor"
  },
  {
    name: "Dr. Prajna P Shetty",
    photo: "/src/assets/alumni/a4.jpg",
    jobSector: "Private Sector",
    address: "Alva's College of Naturopathy and Yogic Science",
    institution: "Alva's",
    designation: "Associate Professor"
  },
  {
    name: "Dr. Soubhagya",
    photo: "/src/assets/alumni/a5.jpeg",
    jobSector: "Private Sector",
    address: "Sparsh Hospital Bangalore",
    institution: "Sparsh",
    designation: "Assistant Physician / Duty Doctor"
  },
  {
    name: "Dr. Geetarani Devi",
    photo: "/src/assets/alumni/a6.JPG",
    jobSector: "Private Sector",
    address: "Dabangere",
    institution: "Tapovana Medical College",
    designation: "Assistant Professor"
  },
  {
    name: "Dr. Suhas B",
    photo: "/src/assets/alumni/a7.webp",
    jobSector: "Private Sector",
    address: "Subharti University, Meerut, Uttar Pradesh",
    institution: "Samruddhi Holistics",
    designation: "Entrepreneur"
  },
  {
    name: "Dr. Divyashree MN",
    photo: "/src/assets/alumni/a8.jpeg",
    jobSector: "Private Sector",
    address: "Bangalore",
    institution: "S-VYASA",
    designation: "Assistant Professor"
  },
  {
    name: "Dr. Khadheejattul Muneera",
    photo: "/src/assets/alumni/a9.jpeg",
    jobSector: "Private Sector",
    address: "Shas Care Health Land - Naturopathic Wellness and Research Centre, Pavaratty, Thrissur, 680507",
    institution: "Shas Care Health Land",
    designation: "BNYS"
  },
  {
    name: "Dr. Sweety S Hegde",
    photo: "/src/assets/alumni/a10.jpeg",
    jobSector: "Private Sector",
    address: "Praba’s Vcare Hair and Skin Clinic, Kankandy Bypass Road, Mangalore",
    institution: "Praba’s Vcare Hair and Skin Clinic",
    designation: "Consultant Doctor"
  },
  {
    name: "Dr. Ashwathi",
    photo: "/src/assets/alumni/a11.jpg",
    jobSector: "Government Sector",
    address: "Kannur",
    institution: "Govt. Hospital Kannur",
    designation: "Medical Officer"
  },
  {
    name: "Dr. Bhavana R Gowda",
    photo: "/src/assets/alumni/a12.jpg",
    jobSector: "Private Sector",
    address: "Ahmedabad",
    institution: "Atma wellness clinic, Ahmedabad",
    designation: "Chief medical officer"
  },
  {
    name: "Dr. Vinod Kumar Karicheri",
    photo: "/src/assets/alumni/a13.jpeg",
    jobSector: "Private Sector, Freelancing (Online/Offline), Cruises/Spa/Wellness",
    address: "VRIJE University of Brussels, Laarbeeklaan 1090, Health campus, Jette, Belgium",
    institution: "SatSwara Health and wellness",
    designation: "Director"
  },
  {
    name: "Dr. Adithi S Prabhu",
    photo: "/src/assets/alumni/a14.jpg",
    jobSector: "Private Sector",
    address: "#18, Nenapu, 1st floor, 7th cross, F block, Gopala, Near Ramakrishna School, Shivamogga - 577205",
    institution: "Kshemavana Pvt. Ltd, Ambara wellness clinic, Life at Nature, MIOYN, Yogaksema Pvt Ltd",
    designation: "CEO and Co-founder, Head of wellness, Assistant Professor, Senior consultant"
  },
  {
    name: "Dr. Deepthi Babu",
    photo: "/src/assets/alumni/a15.jpg",
    jobSector: "Cruises/Spa/Wellness",
    address: "Atmantan Wellness centre, Pune, Maharashtra",
    institution: "Atmantan",
    designation: "Wellness Advisor"
  },
  {
    name: "Dr. Pooja G",
    photo: "/src/assets/alumni/a16.jpg",
    jobSector: "Private Sector",
    address: "SDM Yoga and Nature cure hospital, Sowkhyavana, Pareeka, Udupi, Karnataka",
    institution: "SDM Yoga and Nature cure hospital",
    designation: "Medical Officer"
  },
  {
    name: "Basil",
    photo: "/src/assets/alumni/a17.jpg",
    jobSector: "Cruises/Spa/Wellness",
    address: "One spa world",
    institution: "One spa world",
    designation: "Acupuncturist"
  },
  {
    name: "Nimitha M",
    photo: "/src/assets/alumni/a18.jpg",
    jobSector: "Private Sector, Freelancing (Online/Offline)",
    address: "Navacare Ayurvedic Wellness Center, Kunumpuram, Ernakulam",
    institution: "Navacare Wellness Center",
    designation: "Doctor"
  },
  {
    name: "Dr. Kanshouwa Angshim",
    photo: "/src/assets/alumni/a19.JPG",
    jobSector: "Private Sector",
    address: "Topavana Medical College & Hospital of Naturopathy & Yogic Sciences, Doddabathi, Davangere - 577566",
    institution: "Tapovana Medical College & Hospital of Naturopathy & Yogic Sciences",
    designation: "Lecturer & Medical Officer"
  },
  {
    name: "Dr. Padmashree",
    photo: "/src/assets/alumni/a20.jpg",
    jobSector: "Private Sector",
    address: "Yenepoya Naturopathy and Yogic Science College and Hospital",
    institution: "Institute",
    designation: "Associate Professor"
  },
  {
    name: "Reshma Biju",
    photo: "/src/assets/alumni/a21.jpg",
    jobSector: "Government Sepctor",
    address: "Government Homeo Hospital",
    institution: "Ayushmanbhava",
    designation: "MO"
  },
  {
    name: "Lairenlakpam Haripriya Devi",
    photo: "/src/assets/alumni/a22.jpg",
    jobSector: "Private Sector",
    address: "Khuman Lampak near Lamlong Thong",
    institution: "ASHA (Ayush Secure Health Association)",
    designation: "Physician"
  },
  {
    name: "Dr. Oinam Babbychand Bash Devi",
    photo: "/src/assets/alumni/a23.jpg",
    jobSector: "Private Sector",
    address: "Svyasa School of Yoga and Naturopathy Medicine, Prashanthi Kutiram, Bengaluru -560105",
    institution: "Svyasa School of Yoga and Naturopathy Medicine",
    designation: "Assistant Professor"
  }
];


const Placement = () => {
  return (
    <div className="placement-container">
      <h2 className="placement-title">Our Placed Students</h2>
      <div className="placement-grid">
        {placementData.map((student, index) => (
          <div className="placement-card" key={index}>
            <img src={student.photo} alt={student.name} className="placement-photo" />
            <div className="placement-details">
              <h3>{student.name}</h3>
              <p><strong>Job Sector:</strong> {student.jobSector}</p>
              <p><strong>Working Address:</strong> {student.address}</p>
              <p><strong>Institute/Company:</strong> {student.institution}</p>
              <p><strong>Designation:</strong> {student.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placement;
