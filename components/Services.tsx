'use client'

import Container from "@/common/Container"
import { ServicesInf } from "@/constant"
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"


export default function Services(){

    const route = useRouter()

    return(
        <section id="service" className="pt-60">
            <Container>
                <Formik
                    initialValues={{
                        service:""
                    }}
                    onSubmit={() => {}}
                >
                    {({setFieldValue}) => (
                    <Form>
                        <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4">
                            {ServicesInf.map((items, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => {
                                            setFieldValue("service",items.value)
                                            route.push(items.link)
                                        }}
                                    >
                                    <div className="flex flex-col gap-4 items-center text-center p-2 font-bold text-2xl text-[#040A18] rounded-md h-full bg-[#E1EEFF]">
                                        <img src={items.image} alt={items.value} className="w-[138px]"/>
                                        {items.title}                                        
                                    </div>
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

