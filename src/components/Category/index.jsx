import React from "react";
import Icon1 from "../../assets/img/illustrations/finance.png";
import Icon2 from "../../assets/img/illustrations/design.png";
import Icon3 from "../../assets/img/illustrations/programmer.png";
import Icon4 from "../../assets/img/illustrations/production.png";
import Icon5 from "../../assets/img/illustrations/education.png";
import Icon6 from "../../assets/img/illustrations/consultancy.png";

import Card from "./Card";

const data = [
  {
    id: 1,
    title: "Accounting",
    about: "100 open position",
    icon: Icon1,
  },
  {
    id: 2,
    title: "Design/Creative",
    about: "100 open position",
    icon: Icon2,
  },
  {
    id: 3,
    title: "Programmer",
    about: "100 open position",
    icon: Icon3,
  },
  {
    id: 4,
    title: "Production",
    about: "100 open position",
    icon: Icon4,
  },
  {
    id: 5,
    title: "Education",
    about: "100 open position",
    icon: Icon5,
  },
  {
    id: 6,
    title: "Consultancy",
    about: "100 open position",
    icon: Icon6,
  },
];

export default () => {
  return (
    <div>
      <div className="category mt-[150px]">
        <div className="title text-[39px] font-bold text-[#112d58] text-center">
          Browse jobs by category
        </div>
        <div className="text-[16px] text-[#7d7987] font-medium text-center ">
          Choose from the list of most popular categories
        </div>
        <div className="bg_Category"></div>

        <div className="category_cont md:mt-[-150px] grid grid-cols-1  gap-[20px] md:grid-cols-2 md:px-[70px] lg:grid-cols-3 lg:px-[150px] xl:px-[250px]">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              about={item.about}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
