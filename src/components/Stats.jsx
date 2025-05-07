import React from "react";

const stats = [
  { label: "Courses", value: "300+" },
  { label: "Expert Educators", value: "50+" },
  { label: "Students", value: "100K+" },
  { label: "Learning Paths", value: "15+" },
];

const Stats = () => (
  <div className="stats">
    {stats.map((stat) => (
      <div key={stat.label} className="stat">
        <h2>{stat.value}</h2>
        <p>{stat.label}</p>
      </div>
    ))}
  </div>
);

export default Stats;