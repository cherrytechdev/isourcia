"use client";

import Container from "@/common/Container";
import MenuNav from "@/common/MenuNav";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="fixed z-20 bg-gradient-to-r from-[#040A18] to-[#0A1027] w-full shadow-lg">
      <div className="relative z-10 ">
        <MenuNav open={isOpen} setOpen={setOpen} />
        <Container className="relative py-4">
          <div className="flex justify-between">
            <Image
              src={"/logo-white.png"}
              alt="logo image"
              width={900}
              height={300}
              className=" w-[200px] h-auto  "
            />

            <div
              className="flex flex-col items-center gap-2 font-bold cursor-pointer group"
              onClick={() => setOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-700 group-hover:rotate-45"
              >
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
              Navigation
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
