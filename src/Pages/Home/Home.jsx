import React, { useContext } from "react";
import "./Home.css";
import { Sidebar, Feed } from "../../Components/Components.Files";
import { ThemeContext } from "../../App";

const Home = () => {
  const { lightToggle, sidebar } = useContext(ThemeContext);
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
