import React from "react";
import data from "../assets/data.json";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".timelineItem");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        cards.forEach((c) => {
          if (c !== card) {
            c.classList.add("blur");
          }
        });
      });

      card.addEventListener("mouseleave", () => {
        cards.forEach((c) => {
          c.classList.remove("blur");
        });
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div id="timeline">
      <h2>Academic Qualifications</h2>
      <div className="timelineBox">
        {data.study.map((item, index) => (
          <TimelineItem
            heading={item.institution}
            grade={item.grade}
            years={item.years}
            program={item.program}
            index={index}
            key={item.institution}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, grade, index, years, program }) => {
  const animation = {
    initial:
      index % 2 === 0
        ? {
            x: "-100%",
            opacity: 0,
          }
        : { x: "100%", opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className={`timelineItem ${
        index % 2 === 0 ? "leftTimeline" : "rightTimeline"
      }`}
    >
      <motion.div
        className="timelineItem_content"
        initial={animation.initial}
        whileInView={animation.whileInView}
      >
        <h3>{heading}</h3>
        <h5>{program}</h5>
        <p>{grade}</p>
        <span>{years}</span>
      </motion.div>
    </div>
  );
};
export default Timeline;
