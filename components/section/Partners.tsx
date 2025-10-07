import Container from "@/common/Container";
import React from "react";
import Infinite from "../icons/Infinite";
import Image from "next/image";

function Partners() {
  const images = [
    "/img/partner/partner-one.png",

    "/img/partner/partner-three.png",
    "/img/partner/partner-four.png",
    "/img/partner/partner-two.png",
    "/img/partner/partner-five.png",
  ];
  return (
    <div id="partner">
      <Container className="flex flex-col gap-10 md:gap-14 py-10 ">
        <div className="flex flex-col gap-5 ">
          <h2 className="uppercase font-light text-4xl md:text-5xl lg:text-6xl text-center ">
            <span className="text-red-500">il nous font </span> confiance
          </h2>
          <div className="flex items-center gap-3 justify-center ">
            {" "}
            <div className="h-0.5 bg-white/60 w-1/5"></div> <Infinite />
            <div className="h-0.5 bg-white/60 w-1/5"></div>{" "}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-5 md:p-8 border border-white flex items-center  ">
            <Image
              src={"/img/partner/partner-image.png"}
              alt="partenariat image"
              width={600}
              height={600}
              className="w-full h-auto  "
            />
          </div>

          <div className="grid grid-cols-2 gap-10 lg:w-2/3 ">
            {images.map((image, id) => (
              <Image
                key={id}
                src={image}
                alt="partner logo image"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Partners;
