"use client";

import Container from "@/common/Container";
import { ServicesInf } from "@/constant";
import { useFormStore } from "@/store/formStore";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Infinite from "./icons/Infinite";

export default function Services() {
  const { setValues } = useFormStore();
  const route = useRouter();
  // const reset = useFormStore((state) => state.reset);
  return (
    <section id="service">
      <Container>
        <Formik
          initialValues={{
            service: "",
            ressource: "",
          }}
          onSubmit={() => {}}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="min-h-screen flex flex-col items-center justify-center gap-10 pt-[100px] pb-10 ">
                <div className="flex flex-col gap-3 ">
                  <h2 className="uppercase font-light text-4xl md:text-5xl lg:text-6xl ">
                    <span className="text-red-500">nos </span> service
                  </h2>
                  <div className="flex items-center gap-3 justify-center ">
                    {" "}
                    <div className="h-0.5 bg-white/60 w-2/5"></div> <Infinite />
                    <div className="h-0.5 bg-white/60 w-2/5"></div>{" "}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                  {ServicesInf.map((items, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setFieldValue("service", items.value);
                        setValues({
                          service: items.title,
                          ressource: items.value,
                        });
                        route.push(items.link);
                      }}
                      className="cursor-pointer"
                    >
                      <div className="group w-[320px] md:w-[400px] h-80  ">
                        {/* Ajouter la perspective sur le conteneur 3D */}
                        <div className="relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] [perspective:1000px] group-hover:[transform:rotateY(180deg)]">
                          {/* Face avant */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700  p-4 [backface-visibility:hidden] [transform-style:preserve-3d]">
                            <div className="[transform:translateZ(100px)] px-2 ">
                              <Image
                                src={items.image}
                                alt={items.value}
                                width={800}
                                height={800}
                                className="w-[100px] md:w-[138px] mx-auto"
                              />
                              <h3 className="font-light text-xl text-white mt-4 px-5  ">
                                {items.title}
                              </h3>
                            </div>
                          </div>

                          {/* Face arrière */}
                          <div className="absolute inset-0 flex items-center justify-center bg-red-900 text-white p-4  [backface-visibility:hidden] [transform:rotateY(180deg)] [transform-style:preserve-3d] ">
                            <div className="[transform:translateZ(100px)] text-center  overflow-y-scroll w-full h-full hide-scrollbar flex items-center justify-center pt-2 ">
                              <p className="text-balance !font-light text-base md:text-lg ">
                                {items.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
}
