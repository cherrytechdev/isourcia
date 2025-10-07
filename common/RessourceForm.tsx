'use client'

import { RessourceInf } from "@/constant"
import { useFormStore } from "@/store/formStore";
import { Form, Formik } from "formik"
import Image from "next/image";
import { useRouter } from "next/navigation"


export default function RessourceForm() {
    const { setValues } = useFormStore();
    const route = useRouter()

    return (
        <Formik
            initialValues={{
                ressourceRecrut: ""
            }}
            onSubmit={() => { }}
        >                   
            {({setFieldValue}) => (
            <Form className="flex justify-center w-full">
                <div className="flex flex-col gap-8 text-white p-10 w-full rounded-lg">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {RessourceInf.map((items, i) => (
                            <button
                                key={i}
                                type="button"
                                className="flex flex-col items-center text-xl font-semibold gap-2 border border-white/20 bg-white/10 backdrop-blur-2xl text-white cursor-pointer p-2 rounded-2xl transition-all 
                                            hover:scale-105 hover:border-white hover:bg-white/20"
                                onClick={() => {
                                        setFieldValue("ressourceRecrut", items.name);
                                        setValues({ ressourceRecrut: items.name });
                                        route.push(items.link);
                                }}
                                >   
                                    <Image src={items.image} alt={items.name} width={2000} height={2000} className="w-40" />
                                    {items.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}