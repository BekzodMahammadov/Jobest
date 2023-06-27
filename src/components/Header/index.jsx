import React from "react";
import Img from "../../assets/img/illustrations/search.png";

export default () => {
  return (
    <div>
      <div className="header w-full h-[90vh] px-[100px] flex items-center">
        <div className="">
          <div className="text-[47px] text-[#112d58] font-bold ">
            Find your job better <br /> and faster
          </div>
          <div className="text-[19px] text-[#7d7987] font-medium">
            Find your best job better and faster with Jobest
          </div>
          <div className="flex items-center mt-[40px]">
            <input
              type="text"
              placeholder="Seacrh by skill, company and job"
              className="w-[370px] h-[40px] p-[20px] rounded-full header_input "
            />
            <img src={Img} width={30} alt="" className="ml-[-40px]" />
          </div>
        </div>
      </div>
      <div className="header_bgImg"></div>
    </div>
  );
};
