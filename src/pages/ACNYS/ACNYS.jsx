import React, { useState } from 'react';
import './ACNYS.css';

// Import videos properly
import video1 from '../../assets/videos/Art_Gallery.mp4';

import video2 from '../../assets/videos/Shobhavana.mp4';

import video3 from '../../assets/videos/Chir/c1.mp4';
import video4 from '../../assets/videos/Chir/c2.mp4';
import video5 from '../../assets/videos/Chir/c3.mp4';
// import video6 from '../../assets/videos/Chir/c4.mp4';
// import video7 from '../../assets/videos/Chir/c5.mp4';

import video8 from '../../assets/videos/NCC/nc1.mp4';
import video9 from '../../assets/videos/NCC/nc2.mp4';
import video10 from '../../assets/videos/NCC/nc3.mp4';

import video11 from '../../assets/videos/Republic/r1.mp4';
import video12 from '../../assets/videos/Republic/r2.mp4';
import video13 from '../../assets/videos/Republic/r3.mp4';
// import video14 from '../../assets/videos/Republic/r4.mp4';
// import video15 from '../../assets/videos/Republic/r5.mp4';

import video16 from '../../assets/videos/sp/s1.mp4';
import video17 from '../../assets/videos/sp/s2.mp4';
import video18 from '../../assets/videos/sp/s3.mp4';
// import video19 from '../../assets/videos/sp/s4.mp4';
// import video20 from '../../assets/videos/sp/s5.mp4';

import video21 from '../../assets/videos/td/t1.mp4';
import video22 from '../../assets/videos/td/t2.mp4';
import video23 from '../../assets/videos/td/t3.mp4';
// import video24 from '../../assets/videos/td/t4.mp4';
// import video25 from '../../assets/videos/td/t5.mp4';

import video26 from '../../assets/videos/yo/y11.mp4';
import video27 from '../../assets/videos/yo/y22.mp4';
import video28 from '../../assets/videos/yo/y33.mp4';

const videoSections = [
  {
    title: 'Shobavana',
    videos: [
      { id: 2, src: video2, title: 'Campus Tour 1' },
  
    ],
  },
 
  
  {
    title: 'Christmas',
    videos: [
      // Add videos for Christmas
      { id: 3, src: video3, title: 'Christmas' },
      { id: 4, src: video4, title: 'Christmas' },
      { id: 5, src: video5, title: 'Christmas' },
  
    ],
  },
  {
    title: 'NCC',
    videos: [
      // Add videos for NCC

      { id: 8, src: video8, title: 'NCC' },
      { id: 9, src: video9, title: 'NCC' },
      { id: 10, src: video10, title: 'NCC' },
    ],
  },
  {
    title: 'Republic Day 2025',
    videos: [
      // Add videos for Republic Day
      { id: 11, src: video11, title: 'Republic Day' },
      { id: 12, src: video12, title: 'Republic Day' },
      { id: 13, src: video13, title: 'Republic Day' },
  
    ],
  },
  {
    title: 'Sports Day',
    videos: [
      // Add videos for Sports Day

      { id: 16, src: video16, title: 'Sports Day' },
      { id: 17, src: video17, title: 'Sports Day' },
      { id: 18, src: video18, title: 'Sports Day' },
     
    ],
  },
  {
    title: 'Traditional Day',
    videos: [
      // Add videos for Traditional Day
      
      { id: 21, src: video21, title: 'Traditional Day' },
      { id: 22, src: video22, title: 'Traditional Day' },
      { id: 23, src: video23, title: 'Traditional Day' },
    
    ],
  },
  {
    title: 'Yogathon',
    videos: [
      { id: 26, src: video26, title: 'Yogathon' },
      { id: 27, src: video27, title: 'Yogathon' },
      { id: 28, src: video28, title: 'Yogathon' }, // Add videos for Yogathon
    ],
  },
  {
    title: 'Art Gallery',
    videos: [
      { id: 1, src: video1, title: 'Art Gallery - Exhibit 1' },
    ],
  },
];

const ACNYS = () => {
  const [modalVideo, setModalVideo] = useState(null); // State to hold modal video data

  // Function to open modal with the selected video
  const openModal = (video) => {
    setModalVideo(video);
  };

  // Function to close modal
  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <div className="acnys-container">
      <header className="acnys-header">
        <h1>Life @ ACNYS</h1>
        <p>Experience the vibrant campus life through our memorable events and activities.</p>
      </header>

      {videoSections.map((section, index) => (
        <section key={index} className="video-section">
          <h2 className="section-title">{section.title}</h2>
          <div className="video-gallery">
            {section.videos.map((video) => (
              <div key={video.id} className="video-card" onClick={() => openModal(video)}>
                <video
                  src={video.src}
                  controls
                  className="video-player"
                  preload="metadata"
                />
                <h3 className="video-title">{video.title}</h3>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Modal to show the selected video */}
      {modalVideo && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>X</button>
            <h2>{modalVideo.title}</h2>
            <video
              src={modalVideo.src}
              controls
              className="modal-video"
              autoPlay
              preload="metadata"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ACNYS;
