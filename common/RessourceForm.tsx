'use client'

import { RessourceInf } from "@/constant"
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"


export default function RessourceForm(){

    const route = useRouter()

    return(
        <Formik
            initialValues={{
                ressourceRecrut:""
            }}
            onSubmit={() => {}}
        >
            {({setFieldValue}) => (
            <Form className="flex justify-center w-full">
                <div className="flex flex-col gap-8 text-white p-10 w-full rounded-lg">
                    <div className="grid grid-cols-3 gap-4">
                        {RessourceInf.map((items, i) => (
                            <button
                                key={i}
                                type="button"
                                className="border border-white/20 bg-white/10 backdrop-blur-2xl text-white cursor-pointer p-2 rounded-2xl transition-all 
                                            hover:scale-105 hover:border-white hover:bg-white/20"
                                onClick={() => {
                                        setFieldValue("ressourceRecrut",items.name)
                                        route.push(items.link)
                                    }}
                                >
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