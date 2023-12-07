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
                <strong> Fullstack developer </strong>
                passionate about creating a nice working environment and happy
                to bring a smile along with clean, maintanable and tested code.
                <br />
                <br />
                As a brief introduction of myself, I have worked in several
                countries in a variety of roles, from being a self taught
                freelance video editor to a managerial position with fast paced
                operations leading several teammates and organizing events. I
                also have an acting and musical background and excellent
                communication skills.
                <br />
                <br />
                As a developer, this combination of previous experiences taught
                me a lot of lessons that are useful today, they made me
                confident working autonomously being aware of every aspect
                surrounding a product and also made me feel comfortable working
                with a team and making sure everyone is on the same page and
                have a positive experience when creating solutions. I am
                currently in charge of two React Native applications deployed
                for Android and Ios. I participate in planning, designing and
                developing new products based on customer needs, writing
                documentation to create integrations with other companies,
                designing the CI/CD pipelines, testing code, developing new
                features and staying aligned with my team to assign priorities
                and analyze results in retrospective meetings.
              </Fragment>
            }
          />
        </div>
      </div>
    </motion.main>
  );
};

export default Main;
