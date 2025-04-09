import React, { useContext } from "react";
import "./ImageMenu.css";
import { EllipsisVertical } from "../../../assets/Icons.FIle";
import { ThemeContext } from "../../../App";

const ImageMenu = ({ dropdownOpen, setDropdownOpen }) => {
  const { lightToggle } = useContext(ThemeContext);
  return (
    <div
      className={`menu-container ${lightToggle ? "dark-mode" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
      }}
    >
      <EllipsisVertical className="img-menu" />

      {dropdownOpen && (
        <ul className="menu-dropdown active">
          <li>Download</li>
          <li>Watch Later</li>
          <li>Share</li>
          <li>Save</li>
        </ul>
      )}
    </div>
  );
};

export default ImageMenu;
