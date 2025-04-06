import React from "react";
import "./ImageMenu.css";
import { MoreVertical } from "lucide-react";

const ImageMenu = ({ dropdownOpen, setDropdownOpen, lightToggle }) => {
  return (
    <div
      className={`menu-container ${lightToggle ? "dark-mode" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
      }}
    >
      <MoreVertical className="img-menu" />

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
