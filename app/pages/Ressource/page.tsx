"use client"

import Container from "@/common/Container"
import RessourceForm from "@/common/RessourceForm"

export default function Ressource(){
    
    return(
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-red-900 h-screen">
            <Container className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-5xl font-semibold text-center">Veuillez séléctionner la ressource souhaitée</h2>
                <RessourceForm/>
            </Container>
        </section>
    )
}