import React from "react";
import Img from "../../assets/img/illustrations/come-on-join.png";

export default () => {
  return (
    <div>
      <div className="join_us mt-[100px]">
        <div>
          <img src={Img} className="w-[100%]" alt="" />
        </div>
        <div>
          <div className="text-[39px] font-bold text-[#112d58] w-full flex justify-center">
            <p className="text-center">
              Come on, join <br /> with us !
            </p>
          </div>
          <div className="text-[18px] text-[#7d7987] text-center">
            Create an account and refer your friend
          </div>
        </div>
      </div>
    </div>
  );
};
