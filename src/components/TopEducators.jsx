import React from "react";

const educators = [
  {
    name: "Prof. Amanda Johnson",
    title: "Mathematics Specialist | PhD in Applied Mathematics",
    tags: ["Mathematics", "Statistics", "Data Science"],
    courses: 6,
    students: 45280,
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "David Chen",
    title: "Software Engineer | Programming Instructor",
    tags: ["Programming", "Web Development", "Python", "+1 more"],
    courses: 8,
    students: 67320,
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Maria Gonzalez",
    title: "Language Expert | Native Spanish Speaker",
    tags: ["Spanish", "Portuguese", "Linguistics"],
    courses: 5,
    students: 23180,
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Dr. Robert Taylor",
    title: "Physics Professor | Research Scientist",
    tags: ["Physics", "Astronomy", "Mathematics"],
    courses: 4,
    students: 15920,
    rating: 4.6,
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

const TopEducators = () => (
  <section className="top-educators">
    <div className="top-educators__header">
      <h2>Top Educators</h2>
      <button className="btn btn--outline">View All Educators</button>
    </div>
    <div className="top-educators__list">
      {educators.map((ed) => (
        <div key={ed.name} className="educator-card">
          <img src={ed.image} alt={ed.name} className="educator-card__img" />
          <h3>{ed.name}</h3>
          <p className="educator-card__title">{ed.title}</p>
          <div className="educator-card__tags">
            {ed.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
          <div className="educator-card__meta">
            <span><b>{ed.courses}</b> Courses</span>
            <span><b>{ed.students.toLocaleString()}</b> Students</span>
            <span><b>{ed.rating}</b> Rating</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TopEducators; 