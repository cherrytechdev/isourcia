'use client'

import Container from "@/common/Container"
import { ServicesInf } from "@/constant"
import { useFormStore } from "@/store/formStore"
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"


export default function Services() {
    const { setValues } = useFormStore();
    const route = useRouter()
    const reset = useFormStore((state) => state.reset)
    return (
        <section>
            <Container>
                <Formik
                    initialValues={{
                        service: "",
                        ressource: "",
                    }}
                    onSubmit={() => { }}
                >
                    {({ setFieldValue }) => (
                        <Form>
                            <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-4">
                                {ServicesInf.map((items, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => {
                                            setFieldValue("service", items.value);
                                            setValues({ service: items.title , ressource: items.value });
                                            route.push(items.link);
                                            
                                        }}
                                        className="cursor-pointer"
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

