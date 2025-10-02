'use client'

import { RessourceInf } from "@/constant"
import { useFormStore } from "@/store/formStore";
import { Form, Formik } from "formik"
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
            {({ setFieldValue }) => (
                <Form className="flex justify-center w-full">
            

                    <div className="flex flex-col gap-8 bg-white text-gray-700 p-10 w-full rounded-lg shadow-2xl">
                        <div className="grid grid-cols-4 gap-4">
                            {RessourceInf.map((items, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    className="bg-red-500 text-white transition hover:scale-105"
                                    // onClick={() => {
                                    //         setFieldValue("ressourceRecrut",items.name)
                                    //         route.push(items.link)
                                    //     }}
                                    onClick={() => {
                                        setFieldValue("ressourceRecrut", items.name);
                                        setValues({ ressourceRecrut: items.name });
                                        route.push(items.link);
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