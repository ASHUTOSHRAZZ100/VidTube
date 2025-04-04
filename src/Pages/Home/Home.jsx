import React from "react";
import "./Home.css";
import Sidebar from "../../Components/Navbar/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar, lightToggle }) => {
  console.log("light->", lightToggle);
  return (
    <>
      <Sidebar sidebar={sidebar} lightToggle={lightToggle} />
      <div
        className={`container ${sidebar ? "" : "large-container"} ${
          lightToggle ? "dark-container" : ""
        }`}
      >
        <Feed lightToggle={lightToggle} />
      </div>
    </>
  );
};

export default Home;
