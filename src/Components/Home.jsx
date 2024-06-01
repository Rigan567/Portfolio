import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/rig.png";

const Home = () => {
  const projectCount = useRef(null);

  const animationProjectsCount = () => {
    animate(0, 20, {
      duration: 0.7,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Rigan Paul
          </motion.h1>

          <motion.h5 {...animations.h1}>
            A &nbsp;
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Frontend Developer",
                  "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 25,
                wrapperClassName: "typewriterpara",
              }}
            />
          </motion.h5>
          <div>
            <a href="mailto:rigan.paul@g.bracu.ac.bd">Hire Me</a>
            <a href="#works">
              Projects <BsArrowUpRight />
            </a>
          </div>
          {/* <article>
            <p>
              +
              <motion.span
                whileInView={animationClientsCount}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>Clients Worldwide</span>
          </article> */}

          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectCount}
                  whileInView={animationProjectsCount}
                ></motion.span>
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>rigan.paul@g.bracu.ac.bd</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Rigan" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
