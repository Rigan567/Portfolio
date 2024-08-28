import React, { useState } from "react";
import data from "../assets/data.json";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? data.Skills
      : data.Skills.filter((skill) => skill.category === selectedCategory);

  return (
    <div id="testimonial">
      <section>
        <h2>Skills</h2>
        <div className="category-filter">
          {["All", "Languages", "Frameworks", "Database", "Tools"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "active" : ""}
              >
                {category}
              </button>
            )
          )}
        </div>
        <div className="skillbox">
          {filteredSkills.map((item, index) => (
            <TestimonialCard img={item.imgSrc} key={item.name} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

const TestimonialCard = ({ img, index }) => {
  const animations = {
    initial: index % 2 === 0 ? { y: -100, opacity: 0 } : { x: 100, opacity: 0 },

    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    transition: { duration: 0.8, ease: "easeOut" },
  };
  return (
    <motion.div
      className="cards"
      whileInView={animations.whileInView}
      initial={animations.initial}
      transition={animations.transition}
    >
      <img src={img} alt="skills" />
    </motion.div>
  );
};

export default Testimonials;
