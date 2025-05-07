import React from "react";

const courses = [
  {
    title: "Mathematics Fundamentals",
    educator: "Prof. Amanda Johnson",
    rating: 4.8,
    students: 15320,
    level: "Beginner",
    price: "$49.99",
    category: "Mathematics",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Introduction to Programming",
    educator: "David Chen",
    rating: 4.9,
    students: 24150,
    level: "Beginner",
    price: "$59.99",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "The Wonders of Physics",
    educator: "Dr. Robert Taylor",
    rating: 4.6,
    students: 7820,
    level: "Intermediate",
    price: "Free",
    category: "Science",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  }
];

const FeaturedCourses = () => (
  <section className="featured-courses">
    <div className="featured-courses__header">
      <h2>Featured Courses</h2>
      <button className="btn btn--outline">View All Courses</button>
    </div>
    <div className="featured-courses__list">
      {courses.map((course) => (
        <div key={course.title} className="course-card">
          <img src={course.image} alt={course.title} />
          <div className="course-card__info">
            <span className="course-card__category">{course.category}</span>
            <h3>{course.title}</h3>
            <p>{course.educator}</p>
            <div className="course-card__meta">
              <span>⭐ {course.rating}</span>
              <span>{course.students.toLocaleString()} students</span>
              <span>{course.level}</span>
            </div>
            <div className="course-card__footer">
              <span className="course-card__price">{course.price}</span>
              <button className="btn btn--primary btn--small">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedCourses;