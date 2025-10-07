import Container from "@/common/Container";
import Link from "next/link";
import React from "react";

function Cta() {
  return (
    <div id="contact" className="py-10">
      <Container className="flex flex-col gap-10 bg-[#7BB0FF] rounded-3xl min-h-[50vh] items-center justify-center ">
        <h2 className="font-medium text-4xl md:text-5xl lg:text-6xl  text-balance uppercase text-center lg:max-w-2/3 text-white ">
          que <span className="text-red-500">souhaitez-vous </span> faire
          maintenant ?
        </h2>
        <Link
          href={
            "https://wa.me/261388587750?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20service"
          }
          target="_blank"
        >
          <button className="px-6 md:px-8 py-3 md:py-4 border border-white text-black text-2xl bg-transparent transition-colors duration-500 hover:bg-black hover:text-white  ">
            {" "}
            Je prend contact{" "}
          </button>
        </Link>
      </Container>
    </div>
  );
}

export default Cta;
