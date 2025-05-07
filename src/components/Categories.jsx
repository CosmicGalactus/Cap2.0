import React from "react";

const categories = [
  "Mathematics", "Science", "Programming", "Languages", "History", "Business", "Arts & Creativity", "Health & Fitness"
];

const Categories = () => (
  <section className="categories">
    <h2>Explore Categories</h2>
    <div className="categories__list">
      {categories.map((cat) => (
        <div key={cat} className="category-card">{cat}</div>
      ))}
    </div>
  </section>
);

export default Categories;