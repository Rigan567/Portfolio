import React, { useState } from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  const animations = {
    form: {
      initial: {
        x: -100,
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: { y: -150, opacity: 0 },
      whileInView: { y: -10, opacity: 1 },
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
    transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
  };

  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });

  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name: inputs.name,
        email: inputs.email,
        message: inputs.message,
      });
      setInputs({ name: "", email: "", message: "" });
      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");
      setDisableBtn(false);
    }
  };
  return (
    <div id="contact">
      <section>
        <motion.form
          onSubmit={submitHandler}
          {...animations.form}
          transition={animations.transition}
        >
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
          <motion.button
            className={disableBtn ? "disableBtn" : ""}
            disabled={disableBtn}
            {...animations.button}
            type="submit"
          >
            {" "}
            Send
          </motion.button>
        </motion.form>
      </section>
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
