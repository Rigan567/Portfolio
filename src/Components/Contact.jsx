import React, { useState } from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";

const Contact = () => {
  const animations = {
    initial: {
      x: -100,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
    initialAsideView: {
      y: 100,
      opacity: 0,
    },
    asideView: {
      x: 100,
      y: 0,
      opacity: 1,
    },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });

  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs.name, inputs.email, inputs.message);
  };
  return (
    <div id="contact">
      <motion.section
        whileInView={animations.whileInView}
        initial={animations.initial}
        transition={animations.transition}
      >
        <form onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name"
            required
            name="name"
            value={inputs.name}
            onChange={changeHandler}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            value={inputs.email}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            name="message"
            value={inputs.message}
            onChange={changeHandler}
          />
          <button type="submit"> Send</button>
        </form>
      </motion.section>
      <aside>
        <motion.div
          initial={animations.initialAsideView}
          whileInView={animations.asideView}
          transition={animations.transition}
        >
          <img src={vg} alt="Graphics" />
        </motion.div>
      </aside>
    </div>
  );
};

export default Contact;
