import React from "react";
import Img from "../../assets/img/illustrations/feature.png";

export default () => {
  return (
    <div>
      <div className="begin_fisrt grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-5 mt-[150px] md:px-[100px]">
        <div className="flex justify-center md:justify-end  text-center md:text-start second_Text md:items-center">
          <div>
            <div className="text-[#112d58] text-[27px] font-bold ">
              Over 10,000 top <br />
              companies join with us
            </div>
            <div className="text-[#7d7987] font-medium w-[300px] md:w-[300px] md:mt-[20px] ">
              Posting now includes out of the box integration with major CRM
              &amp; accounting and ERP platforms, as well as an open API that
              allows you to seamlessly integrate with your business systems
            </div>
          </div>
        </div>
        <div className="flex justify-center md:items-center md:justify-start second_img">
          <img src={Img} className="w-[368px] xl:w-[450px]" alt="" />
        </div>
      </div>
    </div>
  );
};
