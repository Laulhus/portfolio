import React from "react";
import "../App.css";
import BumerangIcon from "../assets/bumerang-icon.png";
import { motion } from "framer-motion";

const Projects: React.FC = (): JSX.Element => {
  return (
    <motion.main
      className="main-container"
      initial={{ y: "100%", opacity: "0%" }}
      animate={{ y: "0%", opacity: "100%" }}
      exit={{ opacity: "100%" }}
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <h1>Projects</h1>
      <section className="app-container">
        <div className="app-side-section">
          <img
            style={{ paddingLeft: "0.58em" }}
            width={130}
            height={130}
            src={BumerangIcon}
          ></img>
          <div className="store-badges-container">
            <div className="store-badge">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.bumerang.app&hl=es_419&gl=US&pli=1&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                rel="noreferrer"
              >
                <img
                  width={160}
                  alt="Get Bumerang on Google Play"
                  src="https://play.google.com/intl/es-419/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
            </div>
            <div className="store-badge">
              <a
                target="_blank"
                href="https://apps.apple.com/es/app/bumerang/id1540586577?itsct=apps_box_badge&amp;itscg=30200"
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  borderRadius: "13px",
                }}
                rel="noreferrer"
              >
                <img
                  width={141}
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&amp;releaseDate=1608163200"
                  alt="Download Bumerang on the App Store"
                  style={{ borderRadius: "13px", paddingLeft: "0.58em" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="app-side-section">
          <h2>Bumerang App</h2>
          <p>
            Bumerang is a reusable container service aimed for the takeaway
            industry that allows the user to enjoy their favourite food in a
            waste and deposit free way.
          </p>
        </div>
        <div className="app-side-section">
          <ul>
            <li>
              <b>10k+ downloads</b>
            </li>
            <li>
              <b>4.1 user rating on Google Play</b>
            </li>
            <li>
              <b>Num 128 in Food & Beverage apps and 4.5 user rating on App</b>
              Store
            </li>
          </ul>
        </div>
      </section>
    </motion.main>
  );
};

export default Projects;
