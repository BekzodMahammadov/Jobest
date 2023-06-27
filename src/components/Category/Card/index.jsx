import React from "react";

export default (props) => {
  return (
    <div>
      <div className="category_card w-[340px] md:w-[300px] bg-[#fff] p-[28px] border border-[#DFDFDF] rounded-xl mx-auto mt-[20px] lg:w-[205px]">
        <div className="flex justify-center items-center">
          <img src={props.icon} className="w-[120px] h-[120px]" alt="" />
        </div>
        <div className="text-[19px] font-bold text-[#112d58] text-center mt-[10px] card_text">
          {props.title}
        </div>
        <div className="text-[16px] text-[#7d7987] font-normal text-center mt-[10px] card_text">
          {props.about}
        </div>
      </div>
    </div>
  );
};
