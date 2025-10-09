import Container from "@/common/Container";
import Infinite from "@/components/icons/Infinite";
import Mail from "@/components/icons/Mail";
import Whatsapp from "@/components/icons/Whatsapp";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <Container className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-white py-10 items-center ">
        <p className="!font-light text-nowrap ">© Copyright - ISOURCIA 2025</p>
        <div className="w-full flex items-center gap-8 justify-center ">
          <span className="h-0.5 bg-white w-1/4 flex "></span>
          <Infinite />
          <span className="h-0.5 bg-white w-1/4 flex "></span>
        </div>
        <div className="flex items-center justify-end gap-5 w-full  ">
          <Link href={"mailto:to@isourcia.ca"} target="_blank">
            <Mail />
          </Link>
          <Link
            href={
              "https://wa.me/261388587750?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20service"
            }
            target="_blank"
          >
            <Whatsapp />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
