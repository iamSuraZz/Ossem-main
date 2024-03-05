import React, { useState } from "react";
import Tab1 from "../../../assets/Tab-1.webp";
import Tab2 from "../../../assets/Tab-2.webp";
import Tab3 from "../../../assets/Tab-3.webp";
import "./TabSection.css";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("Adminstration");

  const tabs = {
    Adminstration: {
      img: Tab1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    Support: {
      img: Tab2,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    Services: {
      img: Tab3,
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextTab =
        Object.keys(tabs)[
          (Object.keys(tabs).indexOf(activeTab) + 1) % Object.keys(tabs).length
        ];
      handleTabClick(nextTab);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="TabSection_container">
      <img className="img-tab" src={tabs[activeTab].img} alt="img" />
      <div className="TabSection-second-half">
        <h5>Curious about the benefits of OSSEM?</h5>
        <div className="tab-switcher">
          {Object.entries(tabs).map(([tab, { img }]) => (
            <h2
              key={tab}
              className={`tab-switcher-item ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </h2>
          ))}
        </div>
        <div className="Heading-div">
          <h4>{activeTab}</h4>
          <p>{tabs[activeTab].text}</p>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
