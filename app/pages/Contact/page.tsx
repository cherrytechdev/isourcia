'use client'

import ContactForm from "@/common/ContactForm";
import { useFormStore } from "@/store/formStore";


export default function Contact(){
    const {values} = useFormStore()
    return(
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-red-900">
            <ContactForm/>
        </section>
    )
}