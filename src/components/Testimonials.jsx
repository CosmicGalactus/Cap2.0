import React from "react";

const testimonials = [
  {
    name: "Jennifer Lopez",
    title: "Medical Student",
    text: "The courses here completely transformed my learning experience. The clear explanations and interactive exercises helped me master difficult concepts I had been struggling with for years.",
    course: "Mathematics Fundamentals",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Thomas Wright",
    title: "Software Engineer",
    text: "As someone switching careers into programming, these courses provided exactly what I needed - practical knowledge I could immediately apply. Now I'm working at my dream company!",
    course: "Introduction to Programming",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    name: "Sophia Chen",
    title: "High School Teacher",
    text: "The teaching methodology is exceptional. I've not only improved my own skills but have incorporated many of the teaching techniques into my own classroom with great success.",
    course: "World History: Ancient Civilizations",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  }
];

const Testimonials = () => (
  <section className="testimonials">
    <h2 className="testimonials__title">What Our Students Say</h2>
    <div className="testimonials__list">
      {testimonials.map((t) => (
        <div key={t.name} className="testimonial-card">
          <div className="testimonial-card__header">
            <img src={t.image} alt={t.name} className="testimonial-card__img" />
            <div>
              <b>{t.name}</b>
              <div className="testimonial-card__role">{t.title}</div>
            </div>
          </div>
          <div className="testimonial-card__text">“{t.text}”</div>
          <div className="testimonial-card__footer">
            <div className="testimonial-card__stars">
              {Array.from({length: t.rating}).map((_,i) => <span key={i}>⭐</span>)}
              {t.rating < 5 && Array.from({length: 5-t.rating}).map((_,i) => <span key={i}>☆</span>)}
            </div>
            <span className="testimonial-card__course">{t.course}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 