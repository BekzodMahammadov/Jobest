import React from "react";
import Img from "../../../assets/img/illustrations/passion.png";

export default () => {
  return (
    <div>
      <div className="begin_fisrt grid grid-cols-1 md:grid-cols-2 md:px-[100px] gap-[0px] md:gap-5">
        <div className="flex justify-center md:justify-end ">
          <img src={Img} className="w-[368px] xl:w-[400px]" alt="" />
        </div>
        <div className="flex justify-center  md:justify-start md:items-center   text-center md:text-start">
          <div>
            <div className="text-[#112d58] text-[27px] font-bold ">
              Find your passion and <br /> achieve success
            </div>
            <div className="text-[#7d7987] font-medium w-[300px] md:w-[300px] xl:w-[400px]  md:mt-[20px]">
              find a job that suits your interests and talents. A high salary is
              not the top priority. Most importantly,You can work according to
              your heart's desire.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
