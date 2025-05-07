import React from "react";

const learningPaths = [
  {
    title: "Data Science & Analytics",
    description: "Master the skills needed to analyze data and extract meaningful insights for business decisions.",
    tags: ["Python", "Statistics", "Data Visualization", "+1 more"],
    duration: "6 months",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Full-Stack Web Development",
    description: "Build modern, responsive websites and web applications from front to back end.",
    tags: ["HTML/CSS", "JavaScript", "React", "+2 more"],
    duration: "8 months",
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Business & Entrepreneurship",
    description: "Develop the knowledge and skills to start and grow your own successful business.",
    tags: ["Business Planning", "Marketing", "Finance", "+1 more"],
    duration: "4 months",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  }
];

const LearningPaths = () => (
  <section className="learning-paths">
    <div className="learning-paths__header">
      <h2>Learning Paths</h2>
      <button className="btn btn--outline">View All Paths</button>
    </div>
    <div className="learning-paths__list">
      {learningPaths.map((path) => (
        <div key={path.title} className="path-card">
          <img src={path.image} alt={path.title} />
          <div className="path-card__info">
            <h3>{path.title}</h3>
            <p>{path.description}</p>
            <div className="path-card__tags">
              {path.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <div className="path-card__meta">
              <span>{path.duration}</span>
              <span>{path.level}</span>
              <button className="btn btn--primary btn--small">View Path</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LearningPaths; 