"use client"

import Container from "@/common/Container"
import RessourceForm from "@/common/RessourceForm"
import Link from "next/link"

export default function Ressource(){
    
    return(
        <section className="bg-[#D9D9D9] py-10 lg:py-0">
            <Container className="flex flex-col items-center gap-2 justify-center lg:h-screen">
                <Link 
                    href="/"
                    className="block md:hidden border border-[#0A1027] p-2 rounded-full transition-all hover:border hover:border-[#0A1027] hover:bg-[#0A1027]/30 hover:backdrop-blur-2xl">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#0A1027" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-house-icon lucide-house">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    </svg>

                </Link>
                <h2 className="text-2xl md:text-3xl lg:text-5xl  text-center text-[#0A1027]">Veuillez séléctionner la ressource souhaitée</h2>
                <RessourceForm/>
                <Link 
                    href="/"
                    className="hidden md:block border border-[#0A1027] p-2 rounded-full transition-all hover:border hover:border-[#0A1027] hover:bg-[#0A1027]/30 hover:backdrop-blur-2xl">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#0A1027" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-house-icon lucide-house">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    </svg>

                </Link>
            </Container>
        </section>
    )
}