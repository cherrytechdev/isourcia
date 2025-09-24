'use client'

import Container from "./Container";
import { MenuNavInf, NavigationLink } from "@/constant";
import { useState } from "react";


export default function MenuNav(){

    const [ active, setActive ] = useState<string>()

    return(
        <div className="bg-gradient-to-r from-[#040A18] to-[#0A1027]">
            <Container className="">
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
                                    onClick={() => setActive(items.link)} 
                                    className={`text-8xl font-regular ${active === items.link ? 'text-[#98CFFF]' : ''}`}>
                                    {items.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-center">© Copyright - INFINIT 2025</p>
            </Container>
        </div>
    )
}