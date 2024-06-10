import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/rig.png";
import { FaDownload } from "react-icons/fa6";

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
    div: {
      initial: {
        x: "-100%",
        // scale: "0.7",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        // scale: 1,
        opacity: 1,
      },
    },
    img: {
      initial: {
        x: "100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };
  return (
    <>
      <div id="home">
        <section>
          <div>
            <motion.h1
              {...animations.h1}
              transition={({ delay: 0.3 }, { duration: 0.6 })}
            >
              Hi, I Am <br /> Rigan Paul
            </motion.h1>

            <motion.h5
              {...animations.h1}
              transition={({ delay: 0.3 }, { duration: 0.6 })}
            >
              <Typewriter
                options={{
                  strings: [
                    " A Researcher",
                    " A Web Developer",
                    " A React Developer",
                    " A MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 25,
                  wrapperClassName: "typewriterpara",
                }}
              />
            </motion.h5>
            <motion.div
              {...animations.h1}
              transition={({ delay: 0.3 }, { duration: 0.6 })}
            >
              <a
                href="https://www.dropbox.com/scl/fi/8z0f2giqj7mffw20zpc0l/Rigan-Resume.pdf?rlkey=cc6ix0gx49gc3rymje6f4i7p6&st=rs730b8y&dl=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
                <FaDownload />
              </a>
              <a href="#works">
                Projects <BsArrowUpRight />
              </a>
            </motion.div>

            <motion.aside
              {...animations.h1}
              transition={({ delay: 0.3 }, { duration: 0.6 })}
            >
              <article>
                <p>
                  +
                  <motion.span
                    transition={({ delay: 4 }, { duration: 2 })}
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
            </motion.aside>
          </div>
        </section>
        <motion.section
          {...animations.img}
          transition={({ delay: 0.3 }, { duration: 0.6 })}
        >
          <img src={me} alt="Rigan" />
        </motion.section>
        <BsChevronDown />
      </div>
      <motion.div
        className="description"
        {...animations.div}
        transition={({ delay: 0.3 }, { duration: 0.6 })}
      >
        <div>
          <p>
            I am a recent Computer Science & Engineering graduate from BRAC
            University with a solid foundation in web development. I am
            proficient in JavaScript, specializing in ReactJS, and possess
            fundamental skills in the MERN Stack. Additionally, I have research
            experience in steganography, with an IEEE publication to my credit.
            Currently, I am focusing on software development, aiming to create
            efficient and scalable solutions. I am actively seeking
            opportunities to apply my skills in a professional setting and
            contribute to innovative projects.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
