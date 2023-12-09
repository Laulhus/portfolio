import React from "react";
import "../App.css";
import SectionCard from "../components/SectionCard";
import { motion } from "framer-motion";

const Experience: React.FC = (): JSX.Element => {
  return (
    <motion.main
      initial={{ y: "100%", opacity: "0%" }}
      animate={{ y: "0%", opacity: "100%" }}
      exit={{ opacity: "100%" }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="main-container"
    >
      <h1>Experience</h1>
      <ul>
        <li>
          <SectionCard
            title="Software Engineer"
            subtitle="Bumerang | Apr 2022 | Barcelona, Spain"
            text="In charge of two mobile apps built from scratch with React Native for Android and IOS devices, performed code maintenance, reviewing and
refactoring. Making decisions based on business needs, designing new
features and uploading production builds to store platforms."
          ></SectionCard>
        </li>
        <li>
          <SectionCard
            title="Full Stack Developer"
            subtitle="ISDI Coders | 2021 - 2022 | Barcelona, Spain"
            text={`Web development bootcamp where I built several full stack projects in
Javascript on fully tested code using Jest, React testing library and
Cypress, ensuring good practices and SOLID principles. (+1000h)`}
          ></SectionCard>
        </li>
        <li>
          <SectionCard
            title="Freelance Video Editor"
            subtitle="Edgar Alcolea | 2018 - 2022 | Los Angeles, USA"
            text="Self taught editor using Adobe Premiere, Illustrator and After Effects
for audiovisual productions, I built my own website with WordPress
and offered my recording and editing services to international clients."
          ></SectionCard>
        </li>
        <li>
          <SectionCard
            title="Business Class Cabin Crew"
            subtitle="Emirates | 2013 - 2017 | Dubai, UAE"
            text="Delivered the world awarded Emirates Airline customer service in
premium cabins onboard Boeing 777 and Airbus 380 aircrafts.
Responsible for safety checks, fire fighting, attention to detail and
security."
          ></SectionCard>
        </li>
      </ul>
    </motion.main>
  );
};

export default Experience;
