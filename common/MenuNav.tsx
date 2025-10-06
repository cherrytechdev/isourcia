"use client";

import Container from "./Container";
import { MenuNavInf, NavigationLink } from "@/constant";
import { Dispatch, SetStateAction, useState } from "react";

export default function MenuNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [active, setActive] = useState("#home");
  //   const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-full  absolute top-0 left-0 bg-gradient-to-r from-[#040A18] to-[#0A1027] transition-all duration-1000 ${open ? "top-0" : "top-[-100vh]"} `}
    >
      <Container className="flex flex-col gap-8 lg:gap-6 h-screen justify-center ">
        {/* <div className="flex justify-center text-4xl">LOGO</div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="lg:flex flex-col gap-4 hidden ">
            {MenuNavInf.map((items, i) => (
              <div key={i} className="text-2xl font-light">
                {items}
              </div>
            ))}
          </div>
          <div className="">
            <div className="flex flex-col gap-4 lg:text-end">
              {NavigationLink.map((items, i) => (
                <a
                  key={i}
                  href={items.link}
                  onClick={() => {
                    setActive(items.link);
                    setOpen(false);
                  }}
                  className={`text-6xl md:text-7xl lg:text-8xl font-regular ${active === items.link ? "text-[#98CFFF]" : ""}`}
                >
                  {items.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center hidden lg:block ">
          © Copyright - INFINIT 2025
        </p>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className=" text-white cursor-pointer transition hover:rotate-90"
            onClick={() => setOpen(false)}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
      </Container>
    </div>
  );
}
