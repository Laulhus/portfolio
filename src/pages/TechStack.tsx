import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import ReactNativeIcon from "../assets/tech-icons/react-native.svg";
import JavascriptIcon from "../assets/tech-icons/js.svg";
import TypescriptIcon from "../assets/tech-icons/typescript.svg";
import HtmlIcon from "../assets/tech-icons/html.svg";
import CSSIcon from "../assets/tech-icons/css.svg";

import TechIcon from "../components/TechIcon";
import ReduxIcon from "../assets/tech-icons/redux.svg";
import SassIcon from "../assets/tech-icons/sass.svg";
import FirebaseIcon from "../assets/tech-icons/firebase.svg";
import JestIcon from "../assets/tech-icons/jest.svg";
import GitIcon from "../assets/tech-icons/git-icon.svg";
import ExpressIcon from "../assets/tech-icons/express.svg";
import NestIcon from "../assets/tech-icons/nestjs-icon.svg";
import PostmanIcon from "../assets/tech-icons/postman-icon.svg";
import MongoDBIcon from "../assets/tech-icons/mongodb-icon.svg";
import PostgreSQLIcon from "../assets/tech-icons/postgresql-icon.svg";
import GoogleCloudIcon from "../assets/tech-icons/google_cloud-icon.svg";

const TechStack: React.FC = (): JSX.Element => {
  return (
    <motion.main
      initial={{ opacity: "0%" }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: "100%" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="main-container"
    >
      <h1>Tech Stack</h1>
      <div className="stack-container">
        <motion.div
          initial={{ x: "-300px", opacity: "0%" }}
          animate={{ x: "0px", opacity: "100%" }}
          exit={{ opacity: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="icon-row"
        >
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
          <TechIcon
            icon={ReactNativeIcon}
            name="React Native"
            url="https://reactnative.dev/"
          />
        </motion.div>
        <motion.div
          initial={{ x: "300px", opacity: "0%" }}
          animate={{ x: "0px", opacity: "100%" }}
          exit={{ opacity: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="icon-row"
        >
          <TechIcon icon={ReduxIcon} name="Redux" url="https://redux.js.org/" />
          <TechIcon icon={SassIcon} name="Sass" url="https://sass-lang.com/" />
          <TechIcon icon={JestIcon} name="Jest" url="https://jestjs.io/" />
          <TechIcon
            icon={FirebaseIcon}
            name="Firebase"
            url="https://firebase.google.com"
          />
          <TechIcon icon={GitIcon} name="Git" url="https://git-scm.com/" />
          <TechIcon
            icon={ExpressIcon}
            name="Express"
            url="https://expressjs.com/"
          />
        </motion.div>
        <motion.div
          initial={{ x: "-300px", opacity: "0%" }}
          animate={{ x: "0px", opacity: "100%" }}
          exit={{ opacity: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="icon-row"
        >
          <TechIcon icon={NestIcon} name="Nest" url="https://nestjs.com/" />
          <TechIcon
            icon={PostmanIcon}
            name="Postman"
            url="https://www.postman.com/"
          />
          <TechIcon
            icon={MongoDBIcon}
            name="MongoDB"
            url="https://www.mongodb.com/es"
          />
          <TechIcon
            icon={PostgreSQLIcon}
            name="PostgreSQL"
            url="https://www.postgresql.org/"
          />
          <TechIcon
            icon={GoogleCloudIcon}
            name="Google Cloud"
            url="https://cloud.google.com"
          />
        </motion.div>
      </div>
    </motion.main>
  );
};

export default TechStack;
