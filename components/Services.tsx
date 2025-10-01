'use client'

import Container from "@/common/Container"
import { ServicesInf } from "@/constant"
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"


export default function Services(){

    const route = useRouter()

    return(
        <section>
            <Container>
                <Formik
                    initialValues={{
                        service:""
                    }}
                    onSubmit={() => {}}
                >
                    {({setFieldValue}) => (
                    <Form className="flex justify-center w-full">
                        <div className="grid grid-cols-3 gap-4">
                            {ServicesInf.map((items, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    className="flex flex-col items-center text-center p-2 font-bold text-2xl text-[#040A18] rounded-md bg-[#E1EEFF]"
                                    onClick={() => {
                                            setFieldValue("service",items.value)
                                            route.push(items.link)
                                        }}
                                    >
                                    {items.title}
                                </button>                            
                            ))}
                        </div>
                    </Form>
                    )}
                </Formik>
            </Container>
        </section>
    )
}

