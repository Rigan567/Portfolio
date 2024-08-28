import React from "react";
import { motion, transform } from "framer-motion";
import {} from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import webimg from "../assets/webdev.png";
import mernimg from "../assets/mern.png";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>1+</h3>
          <p>Years Experience</p>
        </motion.div>

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <img src={webimg} />
          <span>HTML,CSS & Javascript Development</span>
        </motion.div>

        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{ delay: 0.2 }}
        >
          <FaReact />
          <span>Frontend Development</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <img src={mernimg} />
          <span>MERN Stack Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
