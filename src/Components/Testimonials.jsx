import React from "react";
import data from "../assets/data.json";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div id="testimonial">
      <section>
        <h2>Skills</h2>
        <div className="skillbox">
          {data.Skills.map((item, index) => (
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
