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
                                style={{backgroundImage: `url(${items.image})`}}
                                className="flex justify-center items-end bg-cover bg-center text-xl font-semibold rounded-b-lg text-white cursor-pointer h-[260px] transition-all 
                                            hover:scale-105 hover:border-white hover:bg-white/20"
                                onClick={() => {
                                        setFieldValue("ressourceRecrut", items.name);
                                        setValues({ ressourceRecrut: items.name });
                                        route.push(items.link);
                                }}
                                >   
                                    <span style={{background: `${items.background}`}} className={`w-full p-4 rounded-md border-t border-t-white`}>{items.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}