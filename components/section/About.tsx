import React from "react";
import Separator from "../display/Separator";
import Container from "@/common/Container";
import Image from "next/image";
import Infinite from "../icons/Infinite";

function About() {
  const images = [
    [
      "/img/about/1.png",
      "/img/about/2.png",
      "/img/about/3.png",
      "/img/about/4.png",
      "/img/about/5.png",
      "/img/about/6.png",
    ],
    [
      "/img/about/7.png",

      "/img/about/9.png",
      "/img/about/10.png",
      "/img/about/11.png",
    ],
    [
      "/img/about/13.png",
      "/img/about/14.png",
      "/img/about/15.png",
      "/img/about/16.png",
    ],
    [
      "/img/about/18.png",
      "/img/about/12.png",
      "/img/about/17.png",
      "/img/about/8.png",
    ],
  ];
  return (
    <div id="about">
      <Separator direction="up" />
      <div className="bg-[#D9D9D9] ">
        <Container className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 text-black py-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
            {images.map((col, id) => (
              <div key={id} className="flex flex-col gap-2">
                {col.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="brand image"
                    className="w-full h-auto"
                    width={100}
                    height={200}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-medium text-4xl md:text-5xl lg:text-6xl text-black text-balance ">
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
            <p>
              {" "}
              Avec nous, la différence, c’est l’impact. Nos talents vont bien
              au-delà d’une prestation : ils traduisent{" "}
              <strong>
                vos valeurs et donnent de la force à vos projets
              </strong>{" "}
              . Créativité, stratégie, innovation : nous transformons vos
              besoins en solutions concrètes, adaptées à vos ambitions.
            </p>
            <div className="flex flex-col gap-5">
              <p>
                Chaque projet est unique. L’innovation s’allie à la rigueur,
                l’esthétique se marie à la performance, et chaque idée devient
                une histoire qui résonne avec votre public
              </p>
              <p>
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
    </div>
  );
}

export default About;
