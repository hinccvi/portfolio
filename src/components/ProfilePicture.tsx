import React from "react";
import profilePicture from "../assets/wanhin.webp";

const Header: React.FC = () => {
  return (
    <img
      className="block mx-auto rounded-full bg-gray-600 object-scale-down"
      src={profilePicture}
      alt="profile picture"
    />
  );
};

export default Header;
