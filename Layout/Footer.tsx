import Container from "@/common/Container";
import Infinite from "@/components/icons/Infinite";
import Mail from "@/components/icons/Mail";
import Whatsapp from "@/components/icons/Whatsapp";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-5 text-white py-10 ">
        <p className="!font-light text-nowrap ">© Copyright - ISOURCIA 2025</p>
        <div className="w-full flex items-center gap-8 justify-center ">
          <span className="h-0.5 bg-white w-1/4 flex "></span>
          <Image
            src={"/favicon.png"}
            alt="favicon image"
            width={100}
            height={100}
            className=""
          />
          <span className="h-0.5 bg-white w-1/4 flex "></span>
        </div>
        <div className="flex items-center justify-center gap-3">
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
