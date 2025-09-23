'use client'

import Container from "@/common/Container";
import MenuNav from "@/common/MenuNav";
import { useState } from "react";


export default function Header(){

    const [ isOpen, setOpen ] = useState(false)

    return(
        <section className="bg-gradient-to-r from-[#040A18] to-[#0A1027] ">
            <Container className="py-4">
                <div className="flex justify-between">
                    <p className="text-4xl font-white font-bold">
                        LOGO
                    </p>
                    <div className="cursor-pointer" onClick={() => setOpen(!isOpen)}>
                        Navigation
                    </div>
                </div>
                {isOpen && (
                    <div className="h-screen w-full">
                        <MenuNav/>
                    </div>
                )}
            </Container>
        </section>
    )
}