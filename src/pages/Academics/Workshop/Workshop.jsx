import React from 'react';
import './Workshop.css';
import img1 from '../../../assets/image/w1.png';
// import img111 from '../../../assets/image/w11.png';
// import img2 from '../../../assets/image/w2.png';
// import img3 from '../../../assets/image/w3.png';
// import img4 from '../../../assets/image/w4.png';
// import img5 from '../../../assets/image/w5.png';
// import img6 from '../../../assets/image/w6.png';
// import img7 from '../../../assets/image/w7.png';
// // import img8 from '../../../assets/image/w8.png';
// // import img9 from '../../../assets/image/w9.png';
// // import img10 from '../../../assets/image/w10.png';
// import img11 from '../../../assets/image/w111.png';
// import img12 from '../../../assets/image/w12.png';
// // import img13 from '../../../assets/image/w13.png';


// src/pages/Activities.jsx



// Seminars
import seminars1 from '../../../assets/act1.jpeg';
import seminars2 from '../../../assets/act2.jpeg';

// Case Discussions
import case1 from '../../../assets/act3.jpeg';
import case2 from '../../../assets/act4.jpeg';

// Journal Club
import journal1 from '../../../assets/act5.jpeg';
import journal2 from '../../../assets/act6.jpeg';

// Guest Lecture
import guest1 from '../../../assets/act7.jpeg';
import guest2 from '../../../assets/act8.jpeg';

// Conferences
import conf1 from '../../../assets/act9.jpeg';
import conf2 from '../../../assets/act10.jpeg';

// Articles Published
import article1 from '../../../assets/act11.jpeg';
import article2 from '../../../assets/act12.jpeg';

// Staff as Resource Persons
import staff1 from '../../../assets/act13.jpeg';
import staff2 from '../../../assets/act14.jpeg';

// Webinars Conducted
import conducted1 from '../../../assets/act1.jpeg';
import conducted2 from '../../../assets/act2.jpeg';

// Webinars Attended
import attended1 from '../../../assets/act12.jpeg';
import attended2 from '../../../assets/act13.jpeg';

const activitiesData = [
  {
    id: 1,
    title: 'Kids Camp',
    description: 'The Chinnara Arogya Camp, held from April 28 to May 4, 2025, was a transformative experience for children, focusing on physical fitness, emotional well-being, and holistic health.',
    date: 'April 28 - May 4, 2025',
    highlights: [
      'Yoga, Zumba, Kridayoga, and reflexology sessions',
      'Health talks on hydration, gratitude, and nutrition',
      'Visit to herbal garden for experiential learning',
      'Concluded with valedictory program by Dr. Vidyarani',
      'Interactive sessions on waste management and hygiene',
      'Personal growth activities promoting confidence and teamwork'
    ],
    images: [img1, img1, img1]
  },
  {
    id: 2,
    title: 'Virasat Yoga Camp',
    description: 'Held from December 10-15, 2024, this camp focused on promoting physical, mental, and emotional well-being through comprehensive yoga sessions, including both theory and practical components.',
    date: 'December 10-15, 2024',
    highlights: [
      'Over 1800 participants across multiple venues',
      'Guided by expert instructors and senior practitioners',
      'Incorporated traditional yoga practices and pranayama',
      'Concluded with a mass yoga event with over 1800 participants',
      'Feedback sessions highlighting personal transformations',
      'Special sessions on meditation and deep breathing techniques'
    ],
    images: [img1, img1, img1]
  },
  {
    id: 3,
    title: 'Scouts and Guides Mass Yoga',
    description: 'This mass yoga event, held on January 24-25, 2025, aimed at fostering physical, mental, and emotional well-being among scouts and guides, reinforcing the spirit of discipline and unity.',
    date: 'January 24-25, 2025',
    highlights: [
      'Held across Alvas Ugrana Vedike and Alvas Krishi Siri Vedike',
      'Included separate sessions for boys and girls',
      'Guidance from experienced instructors',
      'Concluded with grand mass yoga in the presence of state officials',
      'Participation from over 930 students from various institutions',
      'Special sessions on self-discipline and group coordination'
    ],
    images: [img1, img1, img1]
  },
  {
    id: 4,
    title: 'Yoga Achievements',
    description: 'Recognizing the remarkable accomplishments of our students and staff in various yoga competitions at district, state, national, and international levels, showcasing their dedication and excellence.',
    date: 'Ongoing',
    highlights: [
      '20+ Gold medals, 25+ Silver medals, 10+ Bronze medals',
      'Participation in national and international yoga events',
      'Achievements in artistic, traditional, and rhythmic yoga',
      'Representation at major events like Khelo India and International Yoga Festival',
      'Special recognition in WFF Karnataka State Yogasana Championship',
      'Selections for national and international level competitions'
    ],
    images: [img1, img1, img1]
  },
  {
    id: 8,
    title: 'Other Events',
    description: 'A collection of various academic and professional events that enhance the learning experience and provide valuable exposure to students and faculty.',
    date: 'Ongoing',
    highlights: [
      'Seminars, case discussions, and journal clubs',
      'Guest lectures from industry experts',
      'National and international conferences',
      'Research articles and papers published',
      'Staff contributions as resource persons',
      'Webinars conducted and attended by faculty and students'
    ],
    images: [
      seminars1, seminars2,
      case1, case2,
      journal1, journal2,
      guest1, guest2,
      conf1, conf2,
      article1, article2,
      staff1, staff2,
      conducted1, conducted2,
      attended1, attended2
    ]
  }
];

const Activities = () => {
  return (
    <div className="activities-container">
      <h1 className="page-title">College Activities</h1>
      {activitiesData.map((activity) => (
        <div key={activity.id} className="activity-section">
          <h2 className="activity-title">{activity.title}</h2>
          <p className="activity-date">{activity.date}</p>
          <p className="activity-description">{activity.description}</p>
          <div className="activity-gallery">
            {activity.images.map((image, index) => (
              <img key={index} src={image} alt={activity.title + ' Image ' + (index + 1)} className="activity-image" />
            ))}
          </div>
          <ul className="activity-highlights">
            {activity.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Activities;

