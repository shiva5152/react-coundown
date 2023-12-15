import React from "react";
import socialsImg from "../assets/socialsImg.png";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";

const Socials = () => {
  return (
    <section className="socials w-full mt-[120px] px-[20px] vsm:px-[50px] xmd:px-[80px] flex flex-col xl:flex-row justify-between text-white">
      <div className="w-full xl:w-[53%]">
        <h1 className="text-[24px] vsm:text-[40px] xmd:text-[60px] xl:text-[90px] vsm:text-center xl:text-left font-bold leading-[1.2] xl:leading-[90px]">
          Tag along our Trading Journey!
        </h1>
        <p className="vsm:mx-auto xl:mx-0 md:w-[70%] xl:w-fit my-[16px] text-[12px] vsm:text-2xl vsm:text-center xl:text-left">
          Stay subscribed to our trading community and be a part of our mission.
        </p>

        <img className="hidden xl:block" src={socialsImg} alt="robot" />
      </div>

      <div className="mt-[30px] xl:mt-0 mx-auto xl:mx-0 md:w-[40%] flex flex-col gap-[24px]">
        <div className="social">
          <a href="https://twitter.com/0xflexbot" target="blank">
            <FaTwitter className="text-[#55ACEE]" />
          </a>
          <a href="https://twitter.com/0xflexbot" target="blank">
            <h1>Twitter</h1>
          </a>
          <p>Tweet to us @handle and be a part of our twitter community.</p>
        </div>
        <div className="social">
          <a href="https://t.me/FlexBotAnn" target="blank">
            <FaTelegramPlane className="text-[#2AABEE]" />
          </a>

          <a href="https://t.me/FlexBotAnn" target="blank">
            <h1>Telegram</h1>
          </a>

          <p>
            Be a part of our magnificent telegram community & get updated about
            the latest happenings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Socials;
