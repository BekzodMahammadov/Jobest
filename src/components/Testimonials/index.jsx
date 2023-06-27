import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { BsStarFill } from "react-icons/bs";
import Img1 from "../../assets/img/gallery/user-1.png";
import Img2 from "../../assets/img/gallery/user-2.png";
import Img3 from "../../assets/img/gallery/user-3.png";

export default () => {
  return (
    <div className="mt-[100px] ">
      <div className="text-[33px] text-[#112d58] font-[600] ml-[40px] md:ml-[60px] lg:ml-[120px] xl:ml-[250px]">
        Testimonials
      </div>
      <Carousel
        className="rounded-xl py-[150px] mt-[-40px]"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 -translate-y-2/4 left-4 mt-[-720px] ml-[320px] md:ml-[600px] md:mt-[-280px] lg:ml-[800px] xl:ml-[980px] carusel_left"
          >
            <ArrowLeftIcon
              strokeWidth={2}
              className="w-6 h-6 text-[#111d58] "
            />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 -translate-y-2/4 !right-4 mt-[-720px] md:mt-[-280px] md:mr-[50px] lg:mr-[100px] xl:mr-[220px]"
          >
            <ArrowRightIcon
              strokeWidth={2}
              className="w-6 h-6 text-[#111d58] "
            />
          </IconButton>
        )}
      >
        <div className="item grid grid-cols-1 md:grid-cols-3 md:px-[50px] lg:px-[100px] xl:px-[200px] ">
          <div className="carusel_card w-[272px] lg:w-[234px] px-[16px] py-[64px] rounded-xl mx-auto">
            <div className="flex justify-center ">
              <img src={Img1} className="w-[134px] carusel_img" alt="" />
            </div>
            <div className="flex gap-[10px] justify-center text-[#FFA024] mt-[30px] text-[24px]">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <div className="text-center text-[#112d58] text-[16px] mt-[20px] w-full flex justify-center">
              <p className="w-[170px]">
                I love Jobest, easy platform to use,fantasic staff and nothing
                but great results!
              </p>
            </div>
          </div>
          <div className="carusel_card w-[272px] lg:w-[234px] px-[16px] py-[64px] rounded-xl mx-auto">
            <div className="flex justify-center">
              <img src={Img2} className="w-[134px] carusel_img" alt="" />
            </div>
            <div className="flex gap-[10px] justify-center text-[#FFA024] mt-[30px] text-[24px]">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <div className="text-center text-[#112d58] text-[16px] mt-[20px] w-full flex justify-center">
              <p className="w-[170px]">
                I love Jobest, easy platform to use,fantasic staff and nothing
                but great results!
              </p>
            </div>
          </div>
          <div className="carusel_card w-[272px] lg:w-[234px] px-[16px] py-[64px] rounded-xl mx-auto">
            <div className="flex justify-center">
              <img src={Img3} className="w-[134px] carusel_img" alt="" />
            </div>
            <div className="flex gap-[10px] justify-center text-[#FFA024] mt-[30px] text-[24px]">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <div className="text-center text-[#112d58] text-[16px] mt-[20px] w-full flex justify-center">
              <p className="w-[170px]">
                I love Jobest, easy platform to use,fantasic staff and nothing
                but great results!
              </p>
            </div>
          </div>
        </div>
        <div className="item grid grid-cols-1 md:grid-cols-3 md:px-[50px] lg:px-[100px] xl:px-[200px]">
          <div className="carusel_card w-[272px] lg:w-[234px] px-[16px] py-[64px] rounded-xl mx-auto">
            <div className="flex justify-center ">
              <img src={Img1} className="w-[134px] carusel_img" alt="" />
            </div>
            <div className="flex gap-[10px] justify-center text-[#FFA024] mt-[30px] text-[24px]">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <div className="text-center text-[#112d58] text-[16px] mt-[20px] w-full flex justify-center">
              <p className="w-[170px]">
                I love Jobest, easy platform to use,fantasic staff and nothing
                but great results!
              </p>
            </div>
          </div>
          <div className="carusel_card w-[272px] lg:w-[234px] px-[16px] py-[64px] rounded-xl mx-auto">
            <div className="flex justify-center">
              <img src={Img2} className="w-[134px] carusel_img" alt="" />
            </div>
            <div className="flex gap-[10px] justify-center text-[#FFA024] mt-[30px] text-[24px]">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <div className="text-center text-[#112d58] text-[16px] mt-[20px] w-full flex justify-center">
              <p className="w-[170px]">
                I love Jobest, easy platform to use,fantasic staff and nothing
                but great results!
              </p>
            </div>
          </div>
          <div className="carusel_card w-[272px] lg:w-[234px] px-[16px] py-[64px] rounded-xl mx-auto">
            <div className="flex justify-center">
              <img src={Img3} className="w-[134px] carusel_img" alt="" />
            </div>
            <div className="flex gap-[10px] justify-center text-[#FFA024] mt-[30px] text-[24px]">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <div className="text-center text-[#112d58] text-[16px] mt-[20px] w-full flex justify-center">
              <p className="w-[170px]">
                I love Jobest, easy platform to use,fantasic staff and nothing
                but great results!
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
