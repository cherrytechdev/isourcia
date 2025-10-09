"use client";

import React, { useState } from "react";
import Separator from "../display/Separator";
import Container from "@/common/Container";
import Image from "next/image";
import Infinite from "../icons/Infinite";
import Close from "../icons/Close";
import { Poppins } from "next/font/google";

const popinsSans = Poppins({
  variable: "--font-inter-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

function About() {
  const images = [
    [
      "/img/about/1.webp",
      "/img/about/2.webp",
      "/img/about/3.webp",
      "/img/about/4.webp",
      "/img/about/5.webp",
      // "/img/about/6.webp",
    ],
    ["/img/about/7.webp", "/img/about/9.webp", "/img/about/10.webp"],
    [
      "/img/about/13.webp",
      "/img/about/14.webp",
      "/img/about/15.webp",
      // "/img/about/16.webp",
    ],
    ["/img/about/18.webp", "/img/about/17.webp", "/img/about/8.webp"],
  ];
  const [displayedImage, setDisplayedImage] = useState("/img/about/1.webp");
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div id="about">
      <div className="bg-[#D9D9D9] ">
        <Separator direction="down" background="#0A1027" />
        <Container className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 text-black py-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:w-[80%]  ">
            {images.map((col, id) => (
              <div key={id} className="flex flex-col gap-2">
                {col.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="brand image"
                    className="w-full h-auto cursor-pointer transition-all duration-500 hover:brightness-50 "
                    width={1200}
                    height={800}
                    onClick={() => {
                      setDisplayedImage(image);
                      setShowPreview(true);
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-medium text-4xl md:text-5xl lg:text-6xl text-black text-balance text-center ">
                LE TALENT QUI <span className="text-red-500">DONNE</span> VIE À
                VOS IDÉES
              </h2>
              <div className="flex items-center gap-3 justify-center mt-3 ">
                {" "}
                <div className="h-0.5 bg-white/60 w-2/5"></div>{" "}
                <Infinite className=" w-[50px] lg:w-[70px]  h-auto text-black " />
                <div className="h-0.5 bg-white/60 w-2/5"></div>{" "}
              </div>
            </div>
            <p className={`${popinsSans.variable} !font-light`}>
              {" "}
              Avec nous, la différence, c’est l’impact. Nos talents vont bien
              au-delà d’une prestation : ils traduisent{" "}
              <strong>
                vos valeurs et donnent de la force à vos projets
              </strong>{" "}
              . Créativité, stratégie, innovation : nous transformons vos
              besoins en solutions concrètes, adaptées à vos ambitions.
            </p>
            <div className={` ${popinsSans.variable}  flex flex-col gap-5`}>
              <p className="!font-light">
                Chaque projet est unique. L’innovation s’allie à la rigueur,
                l’esthétique se marie à la performance, et chaque idée devient
                une histoire qui résonne avec votre public
              </p>
              <p className="!font-light">
                {" "}
                De la création visuelle à l’accompagnement stratégique, en
                passant par des solutions digitales innovantes et des services
                centrés sur l’expérience client, nous vous offrons un
                accompagnement sur mesure et une qualité de service unique.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Separator direction="down" />
      <div
        className={`fixed h-screen w-screen bg-black/90 z-50 top-0 left-0 py-8 md:py-10  transition-all duration-500 flex justify-center items-center ${showPreview ? "opacity-100 scale-100" : "opacity-0 scale-0"} `}
      >
        <div onClick={() => setShowPreview(false)}>
          <Close className="w-[25px] lg:w-[30px] h-auto absolute top-[20px] right-[20px] lg:right-[100px]  " />
        </div>
        <Image
          src={displayedImage}
          alt="brand image"
          width={1200}
          height={800}
          className="h-auto w-full lg:h-full lg:w-auto"
        />
      </div>
    </div>
  );
}

export default About;
