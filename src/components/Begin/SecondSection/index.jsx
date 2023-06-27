import React from "react";
import Img from "../../../assets/img/illustrations/jobs.png";

export default () => {
  return (
    <div>
      <div className="begin_fisrt grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-5 mt-[100px] md:px-[100px]">
        <div className="flex justify-center md:justify-end  text-center md:text-start md:items-center second_Text">
          <div>
            <div className="text-[#112d58] md:w-[300px] xl:w-[400px] text-[27px] font-bold ">
              Million of jobs, finds <br />
              the one thats rights for you
            </div>
            <div className="text-[#7d7987] font-medium w-[300px] md:w-[300px] md:mt-[20px] ">
              Get your blood tests delivered at home collect a sample from the
              news your blood tests.
            </div>
          </div>
        </div>
        <div className="flex justify-center md:items-center md:justify-start second_img">
          <img src={Img} className="w-[368px] xl:w-[400px] " alt="" />
        </div>
      </div>
    </div>
  );
};
