import React from "react";
import data from "../assets/data.json";
import { useEffect } from "react";

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
      <div className="timelineBox">
        {data.study.map((item, index) => (
          <TimelineItem
            heading={item.institution}
            grade={item.grade}
            years={item.years}
            index={index}
            key={item.institution}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, grade, index, years }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{grade}</p>
      <span>{years}</span>
    </div>
  </div>
);
export default Timeline;
