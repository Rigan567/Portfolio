import React from "react";

const Testimonials = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Rigan"}
          feedback={"Being consistant is the mightiest tool for success"}
        />
        <TestimonialCard
          name={"Rigan"}
          feedback={"Being consistant is the mightiest tool for success"}
        />
        <TestimonialCard
          name={"Rigan"}
          feedback={"Being consistant is the mightiest tool for success"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonials;
