import React from "react";
import ProfilePicture from "./ProfilePicture";
import { DarkModeProps } from "../interfaces/app_interface";

const Content: React.FC<DarkModeProps> = (props) => {
  const { darkMode } = props;

  return (
    <div
      className={
        "w-2/3 h-auto py-10 " +
        (darkMode ? "dark-glassmorphism" : "light-glassmorphism")
      }
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-6/12 md:w-1/12 lg:w-2/12">
          <ProfilePicture />
        </div>
        <p className="w-4/6 md:w-2/6 pt-7 text-justify text-xl">
            Malaysia 🇲🇾 Software Engineer currently located in Cambodia 🇰🇭.
          Golang, distributed system & DDD enthusiastic.
        </p>
        <p className="w-4/6 md:w-2/6 pt-7 text-justify text-xl">
            Interested in exploring interview. If you think there's anything
          else that might interest me, feel free to send them my way too! DMs on
          the platforms above works fine but here's my email if you prefer
        </p>
        <div className="flex pt-7 space-x-7 text-lg">
          <p>
            <a
              className="hover:underline underline-offset-4"
              href="mailto:alexander.thong.wh@gmail.com"
              target="_blank"
            >
              Email
            </a>
          </p>
          <a
            className="hover:underline underline-offset-4"
            href="https://www.linkedin.com/in/wanhin-thong"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
