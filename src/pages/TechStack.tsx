import React from "react";
import "../App.css";
import ReactIcon from "../assets/tech-icons/react.svg";
import JavascriptIcon from "../assets/tech-icons/js.svg";
import HtmlIcon from "../assets/tech-icons/html.svg";
import CSSIcon from "../assets/tech-icons/css.svg";

const TechStack: React.FC = (): JSX.Element => {
  return (
    <main className="main-container">
      <h1>Tech Stack</h1>
      <div className="icon-row">
        <img src={JavascriptIcon} width={80} height={80}></img>
        <img src={ReactIcon} width={80} height={80}></img>
      </div>
    </main>
  );
};

export default TechStack;
