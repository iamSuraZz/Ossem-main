import React from "react";
import "./Features.css";
import FeatureCard from "./FeatureCard";
// import Addmission from "../../../assets/AdmissionFeature.svg";
// import Account from "../../../assets/AccountFeature.svg";
// import Student from "../../../assets/StudentFeature.svg";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <div className="Features-container">
      <div className="feat__Ttl">
        <Fade direction="up" triggerOnce>
          <h2>
            Easily customizable<br />
            extension templates
          </h2>
        </Fade>

        <p>
          <Fade direction="up" triggerOnce>
            Quickly set up your first Private Extension and speed up
            common workflows that best suit your team’s needs.
          </Fade>

        </p>
      </div>
      <div className="Features-card container">

        <FeatureCard
          // img={Addmission}
          title="Admission"
          para="Let your team share actionable feedback about features in development,to speed up shipping."
        />
        <FeatureCard
          // img={Student}
          title="Student Portal"
          para="Make your design system available to everybody in your company with quick access to colors, icons, and more."
        />
        <FeatureCard
          // img={Account}
          title="Accounts"
          para="Build an index to search and get to know your teammates better. And make it easy for new joiners to discover your organization. "
        />


      </div>
      <div className="ft__Wh-kn">
        <div class="wh_kn">
          <div id="btn_container">
            <Link to="/features" className="learn-more-btn">
              <span className="circle-btn" aria-hidden="true">
                <span className="icon-btn arrow-btn"></span>
              </span>
              <span class="button-text">Know more</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Features;
