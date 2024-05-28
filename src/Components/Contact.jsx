import React, { useState } from "react";
import vg from "../assets/vg.png";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
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
      <section>
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
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;
