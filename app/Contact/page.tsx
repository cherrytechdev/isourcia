'use client'

import ContactForm from "@/common/ContactForm";
import { useFormStore } from "@/store/formStore";


export default function Contact(){
    const {values} = useFormStore()
    return(
        <section className="bg-gradient-to-bl from-[#090F25] to-[#DA2E2B]">
            <h1>Contact</h1>
            {values.contratDuration}
            <ContactForm/>
        </section>
    )
}