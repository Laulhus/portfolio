import React, { Fragment } from "react";
import edgarPicture from "../assets/Edgar.webp";
import "../App.css";
import SectionCard from "../components/SectionCard";
import { motion } from "framer-motion";
import ContactCard from "../components/ContactCard";
const Main: React.FC = (): JSX.Element => {
  return (
    <motion.main
      initial={{ opacity: "0%" }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: "0%" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="main-container"
    >
      <div className="image-container logo">
        <img
          src={edgarPicture}
          className="picture"
          alt="Edgar Alcolea smiling"
        />
      </div>
      <h1 className="name">Edgar Alcolea</h1>
      <h2>Full Stack Developer</h2>
      <div className="content-container">
        <div className="about-me">
          <ContactCard
            mail="edgaralcolea@gmail.com"
            github="https://github.com/Laulhus"
            linkedIn="https://www.linkedin.com/in/edgaralcolea/"
          />
        </div>
        <div className="contact">
          <SectionCard
            title="Who am I?"
            text={
              <Fragment>
                My name is Edgar Alcolea, and I am a
                <span> Fullstack developer </span>
                passionate about creating a nice working environment and happy
                to bring a smile along with clean, maintanable and tested code.
              </Fragment>
            }
          />
        </div>
      </div>
    </motion.main>
  );
};

export default Main;
