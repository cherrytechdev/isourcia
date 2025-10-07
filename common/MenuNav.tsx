'use client'

import Container from "./Container";
import { MenuNavInf, NavigationLink } from "@/constant";
import { useState, useRef } from "react";


type MenuNavProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


export default function MenuNav({ setOpen }: MenuNavProps) {

    const [active, setActive] = useState("#home")

    return (
        <div>
            <Container className="flex flex-col gap-6">
                <div className="flex justify-center text-4xl">
                    LOGO
                </div>
                <div className="grid grid-cols-2 items-center">
                    <div className="flex flex-col gap-4">
                        {MenuNavInf.map((items, i) => (
                            <div key={i} className="text-2xl font-light">
                                {items}
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <div className="flex flex-col gap-4 text-end">
                            {NavigationLink.map((items, i) => (
                                <a
                                    key={i}
                                    href={items.link}
                                    onClick={() => {
                                        setActive(items.link);
                                        setTimeout(() => {setOpen(false), 400})
                                    }}
                                    className={`text-8xl font-regular ${active === items.link ? 'text-[#98CFFF]' : ''}`}
                                    >
                                    {items.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-center">© Copyright - INFINIT 2025</p>
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
                        onClick={() => setOpen(false)}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </div>
            </Container>
        </div>
    )
}