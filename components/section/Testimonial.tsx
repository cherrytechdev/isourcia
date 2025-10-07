"use client";

import Container from "@/common/Container";
import Infinite from "../icons/Infinite";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Star from "../icons/Star";

type TestimonialType = {
  text: string;
  startNumber: number;
  name: string;
};

const testimonialData: TestimonialType[] = [
  {
    name: "Julia Roberts.",
    text: "Nous nous engageons à accompagner  nos clients avec proximité, réactivité et  responsabilité, en favorisant la confiance,  la transparence et la qualité de service  au quotidien.",
    startNumber: 5,
  },
  {
    name: "John doe",
    text: "Nous nous engageons à accompagner  nos clients avec proximité, réactivité et  responsabilité, en favorisant la confiance,  la transparence et la qualité de service  au quotidien.",
    startNumber: 4,
  },
  {
    name: "Alpha one",
    text: "Nous nous engageons à accompagner  nos clients avec proximité, réactivité et  responsabilité, en favorisant la confiance,  la transparence et la qualité de service  au quotidien.",
    startNumber: 5,
  },
  {
    name: "Nekfeu",
    text: "Nous nous engageons à accompagner  nos clients avec proximité, réactivité et  responsabilité, en favorisant la confiance,  la transparence et la qualité de service  au quotidien.",
    startNumber: 3,
  },
];

function Testimonial() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 flex items-center "
      style={{ backgroundImage: "url(/img/testimonial-image.png)" }}
    >
      <Container className="flex flex-col items-center justify-center gap-10 ">
        <div className="flex flex-col gap-3 ">
          <h2 className="uppercase font-light text-4xl md:text-5xl lg:text-6xl ">
            <span className="text-red-500">nos </span> témoignages
          </h2>
          <div className="flex items-center gap-3 justify-center ">
            {" "}
            <div className="h-0.5 bg-white/60 w-2/5"></div> <Infinite />
            <div className="h-0.5 bg-white/60 w-2/5"></div>{" "}
          </div>
        </div>

        <div className="w-full h-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full relative px-10 text-white min-h-[50vh] "
          >
            {testimonialData.map((testimonial, id) => (
              <SwiperSlide key={id}>
                <div className="!h-full flex flex-col gap-10 !items-center justify-center relative pt-10 ">
                  <h4 className=" !text-2xl md:!text-3xl lg:!text-5xl text-center font-semibold !text-white w-3/4 text-balance ">
                    {" "}
                    {testimonial.text}{" "}
                  </h4>
                  <p className="italic !font-light"> {testimonial.name} </p>
                  <div className="flex items-center justify-center !absolute !top-0 !right-0 ">
                    {Array.from(
                      { length: testimonial.startNumber },
                      (_, id) => {
                        return (
                          <Star
                            key={id}
                            className="w-[25px] md:w-[30px] lg:w-[35px] h-auto "
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;
