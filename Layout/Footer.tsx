import Container from "@/common/Container";
import Infinite from "@/components/icons/Infinite";
import Insta from "@/components/icons/Insta";
import Mail from "@/components/icons/Mail";
import World from "@/components/icons/World";
import React from "react";

function Footer() {
  return (
    <div>
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-5 text-white py-10 ">
        <p className="!font-light text-nowrap ">© Copyright - ISOURCIA 2025</p>
        <div className="w-full flex items-center gap-8 justify-center ">
          <span className="h-0.5 bg-white w-1/4 flex "></span>
          <Infinite className="w-[70px] md:w-[100px] h-auto " />
          <span className="h-0.5 bg-white w-1/4 flex "></span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Insta />
          <Mail />
          <World />
        </div>
      </Container>
    </div>
  );
}

export default Footer;
