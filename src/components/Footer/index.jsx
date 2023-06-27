import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

export default () => {
  return (
    <div>
      <div className="footer w-full h-[auto] bg-[#579FF1] pt-[120px] pb-[20px] ">
        <div className="footer_top grid lg:grid-cols-2">
          <div className="text-[36px] text-[#fff] font-semibold mx-auto ">
            Get started now
          </div>
          <div className="mx-auto mt-[40px] lg:mt-[10px]">
            <input
              type="text"
              className=" w-[216px] md:w-[236px] h-[43px] p-[12px] text-[16px] rounded-lg"
              placeholder="email adress"
            />
            <button className="w-[85px] h-[43px] rounded-lg bg-[#1f3a63] text-[#fff] font-bold">
              Submit
            </button>
          </div>
        </div>
        <div className="footer_bottom grid grid-col-2 gap-6 md:grid-cols-3 md:px-[50px] lg:grid-cols-4 mt-[100px] lg:px-[100px]">
          <div className="flex flex-col gap-[30px] mx-auto">
            <div className="text-[19px] text-white font-semibold">
              CATEGORIES
            </div>
            <div className="text-[16px] text-white flex flex-col gap-[15px]">
              <a href="#">IOS Developers</a>
              <a href="#">Front-End Developers</a>
              <a href="#">UX Designers</a>
              <a href="#">UI Designers</a>
              <a href="#">Content Writer</a>
              <a href="#">Program & Tech</a>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] mx-auto">
            <div className="text-[19px] text-white font-semibold">
              COMMUNITY
            </div>
            <div className="text-[16px] text-white flex flex-col gap-[15px]">
              <a href="#">Events</a>
              <a href="#">Blog</a>
              <a href="#">Forum</a>
              <a href="#">Podcast</a>
              <a href="#">Affiliates</a>
              <a href="#">Invite a Friend</a>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] mx-auto">
            <div className="text-[19px] text-white font-semibold">ABOUT</div>
            <div className="text-[16px] text-white flex flex-col gap-[15px]">
              <a href="#">About U</a>
              <a href="#">Partnershipss</a>
              <a href="#">Finance Experts</a>
              <a href="#">Project Management</a>
              <a href="#">Product Manager</a>
              <a href="#">The Team</a>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] mx-auto  md:mt-[40px] lg:mt-[0px]">
            <div className="text-[19px] text-white font-semibold">CONTACT</div>
            <div className="text-[16px] text-white flex flex-col gap-[15px]">
              <a href="#">Contact Us</a>
              <a href="#">Press Center</a>
              <a href="#">Careers</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>

        <div className="Icon text-[32px] text-[#1F3A63] flex gap-5 mt-[70px] justify-center">
          <a href="#">
            <BsTwitter />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
        </div>
        <div className="text-[#fff] foot_center mt-[70px] flex items-center justify-center gap-[5px]">
          © This template is made with
          <span className="text-[#1F3A63]">
            <AiFillHeart />
          </span>{" "}
          by ThemeWagon
        </div>
      </div>
    </div>
  );
};
