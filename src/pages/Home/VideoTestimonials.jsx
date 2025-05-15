import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import './VideoTestimonials.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Dr Geetarani Devi',
    quote: '"I have had a positive experience at [Alvas college of naturopathy and yogic science ]The professors are knowledgeable and approachable, creating an engaging learning environment. The campus facilities are well-maintained and conducive to both studying and relaxation. I especially appreciate the diverse extracurricular activities available, which allow students to explore their interests outside of academics. The college fosters a sense of community, and I have made lasting friendships during my time here. Overall, it has been a great place for personal and academic growth."',
    image: '/src/assets/alumni/a6.JPG',
  },
  {
    name: 'Dr Divyashree MN',
    quote: 'My mind often wanders back to my days as a student at Alva’s College ,Mijar, Mangalore, where I pursued my Doctor of Medicine (MD) degree. I vividly remember the long hours spent studying in library, the beautiful place, intense discussions with my peers, and the guidance of our esteemed faculty. Those formative years laid the foundation for my future success, and I am grateful for the experience and knowledge gained during my time at Alvas. Now, as an Assistant Professor, I strive to pay it forward, inspiring and mentoring the next generation of medical professionals.',
    image: '/src/assets/alumni/a8.jpeg',
  },
  {
    name: 'Dr Sweety S Hegde',
    quote: 'Alva’s is the place where they modify students to the fullest,not only education we got more exposure in every aspects.A blend of Culture and tradition under one place.I always proud to say i was an Alvasian .',
    image: '/src/assets/alumni/a10.jpeg',
  },
  {
    name: 'Dr.Sharada Shetty P S',
    quote: 'Going  through BNYS course at alvas has been an incredible experience. The subject itself is both fascinating and enriching, offering a deep dive into holistic health. My classmates have been amazing, creating a supportive and collaborative learning environment. I have learned so much, not only from the curriculum but also from the diverse perspectives of my peers. Overall, it’s been an inspiring journey at alvas.',
    image: '/src/assets/alumni/a3.jpg',
  },
  {
    name: 'Dr Deepthi Babu',
    quote: 'Studying at Alva’s College was a memorable journey filled with learning, exposure, and unforgettable experiences. The college provided incredible opportunities to participate in cultural events like Yoga Day, Nudisiri, and Virasat, which enriched my understanding of tradition and diversity. Celebrating Independence Day and Republic Day on campus was a proud moment that still resonates with me today.',
    image: '/src/assets/alumni/a15.jpg',
  },
];


const TestimonialSlider = () => {
  return (
    <section className="testimonial-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="testimonial-card">
  <img src={t.image} alt={t.name} className="testimonial-image" />
  <p className="testimonial-text">{t.quote}</p>
  <p className="testimonial-name">{t.name}</p>
</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
