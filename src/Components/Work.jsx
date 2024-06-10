import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import { motion } from "framer-motion";

const Work = () => {
  const animation = {
    section: {
      initial: { x: "-100%", opacity: "0" },
      whileInView: { x: 0, opacity: 1 },
    },
  };
  return (
    <div id="works">
      <h2>WORK</h2>
      <motion.section {...animation.section}>
        <article>
          <Carousel
            // showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={i.url}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </motion.section>
    </div>
  );
};

export default Work;
