"use client"

import Container from "@/common/Container"
import RessourceForm from "@/common/RessourceForm"

export default function Ressource(){
    
    return(
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-red-900 h-screen">
            <Container>
                <RessourceForm/>
            </Container>
        </section>
    )
}