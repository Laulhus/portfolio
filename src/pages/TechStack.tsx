import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import ReactIcon from "../assets/tech-icons/react.svg";
import ReactNativeIcon from "../assets/tech-icons/react-native.svg";
import JavascriptIcon from "../assets/tech-icons/js.svg";
import TypescriptIcon from "../assets/tech-icons/typescript.svg";
import HtmlIcon from "../assets/tech-icons/html.svg";
import CSSIcon from "../assets/tech-icons/css.svg";
import TechIcon from "../components/TechIcon";

const TechStack: React.FC = (): JSX.Element => {
  return (
    <motion.main
      initial={{ opacity: "0%" }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: "0%" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="main-container"
    >
      <h1>Tech Stack</h1>
      <div className="icon-row">
        <TechIcon
          icon={HtmlIcon}
          name="Html"
          url="https://developer.mozilla.org/en-US/docs/Web/HTML"
        />
        <TechIcon
          icon={CSSIcon}
          name="Css"
          url="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <TechIcon
          icon={JavascriptIcon}
          name="Javascript"
          url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <TechIcon
          icon={TypescriptIcon}
          name="Typescript"
          url="https://www.typescriptlang.org/"
        />
        <TechIcon icon={ReactIcon} name="React" url="https://es.react.dev/" />
        <TechIcon
          icon={ReactNativeIcon}
          name="React Native"
          url="https://reactnative.dev/"
        />
      </div>
    </motion.main>
  );
};

export default TechStack;
