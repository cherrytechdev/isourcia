'use client'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import { useRouter } from "next/navigation";
import {
    DurationExtInf,
    ExperiencesExt,
    LanguageExtInf,
    ResourceExtInf,
    TimeTravelExtInf,
    ModalityExtInf,
    FacturationModExtInf,
    BudgetExtInf
} from "@/constant";
import { useFormStore } from "@/store/formStore";
import Link from "next/link";


const schema = Yup.object().shape({
    resourceExt: Yup.array()
        .min(1, "Veuillez sélectionner au moins une ressource"),

    otherResExt: Yup.string().when("resourceExt", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Veuillez préciser l'autre ressource"),
    }),

    dateStartExt: Yup.string().required("Veuillez indiquer la date de début"),

    durationExt: Yup.array()
        .min(1, "Veuillez préciser la durée"),

    timeExt: Yup.array()
        .min(1, "Veuillez sélectionner au moins un créneau horaire"),

    otherTimeExt: Yup.string().when("timeExt", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Veuillez préciser l'autre créneau horaire"),
    }),

    competenciesExt: Yup.string().required("Veuillez indiquer la compétence"),

    experiencesExt: Yup.array()
        .min(1, "Veuillez sélectionner au moins une expérience"),

    languageExt: Yup.array()
        .min(1, "Veuillez sélectionner au moins une langue"),

    otherLangExt: Yup.string().when("languageExt", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Veuillez préciser l'autre langue"),
    }),

    yesInpExt: Yup.string().when("chooseDeg", {
        is: "YesExt",
        then: (schema) => schema.required("Veuillez préciser le diplôme requis"),
    }),

    modalityExt: Yup.array()
        .min(1, "Veuillez indiquer le suivi souhaité"),

    facturationModExt: Yup.array()
        .min(1, "Veuillez indiquer le mode de facturation"),

});

export default function ExternalisationForm() {

    const route = useRouter();
    const { values: storeValues, setValues } = useFormStore();

    return (
        <Formik
            initialValues={storeValues}
            enableReinitialize
            validationSchema={schema}
            onSubmit={async (values, { resetForm, setSubmitting }) => {
                try {
                    console.log("Envoi :", values);
                    setValues(values);
                    resetForm();
                } catch (error) {
                    console.log("Erreur d'envoi :", error);
                } finally {
                    setSubmitting(false);
                    route.push("/pages/Contact");
                }
            }}
        >
            {({ values, isSubmitting }) => (
                <Form className="flex justify-center w-full">
                    <div className="flex flex-col gap-8 bg-white text-gray-700 p-6 md:p-10 w-4xl rounded-lg shadow-2xl">
                        <div className="flex items-center justify-between">
                            <Link href="/">
                                <img src="/icon/isourcia_original.png" alt="Accounting img" className="w-[100px] md:w-[150px] lg:w-[200px]" />
                            </Link>
                            <p className="text-md md:text-2xl lg:text-4xl">Externalisation</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4>1.Ressources à externaliser</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {ResourceExtInf.map((items, i) => {
                                    const isOtherChecked = values.resourceExt.includes("autre");
                                    return (
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="checkbox"
                                                    name="resourceExt"
                                                    value={i === 5 ? "autre" : items}
                                                />
                                                <label>{items}</label>
                                            </div>
                                            {i == 5 && (
                                                <Field
                                                    type="text"
                                                    name="otherResExt"
                                                    placeholder="Précisez les autres ressources"
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                    disabled={!isOtherChecked}
                                                />)}
                                        </div>
                                    )
                                })}
                                <ErrorMessage
                                    name="resourceExt"
                                    component="div"
                                    className="error-message"
                                />
                                <ErrorMessage
                                    name="otherResExt"
                                    component="div"
                                    className="error-message"
                                />
                                <ErrorMessage
                                    name="competenciesExt"
                                    component="div"
                                    className="error-message" />
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4>2.Détails de la mission</h4>
                                <div className="flex flex-col gap-2 pl-4">
                                    <p>Date de début</p>
                                    <Field
                                        type="date"
                                        name="dateStartExt"
                                    />
                                    <ErrorMessage
                                        name="dateStartExt"
                                        component="div"
                                        className="error-message" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 pl-4">
                                <p>Durée de l'externalisation</p>
                                <div className="flex flex-col gap-2">
                                    {DurationExtInf.map((items, i) => (
                                        <div key={i} className="flex gap-2">
                                            <Field
                                                type="checkbox"
                                                name="durationExt"
                                                value={items} />
                                            <label>{items}</label>
                                        </div>
                                    ))}
                                    <ErrorMessage
                                        name="durationExt"
                                        component="div"
                                        className="error-message" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Temps de travail attendu</p>
                                    {TimeTravelExtInf.map((items, i) => {
                                        const isOtherChecked = values.timeExt?.includes("autre");
                                        return (
                                            <div key={i} className="flex flex-col gap-2">
                                                <div className="flex gap-4">
                                                    <Field
                                                        type="checkbox"
                                                        name="timeExt"
                                                        value={i === 2 ? "autre" : items} />
                                                    <label>{items}</label>
                                                </div>
                                                {i == 2 && (
                                                    <Field
                                                        type="text"
                                                        name="otherTimeExt"
                                                        placeholder="Précisez le nombre d'heure"
                                                        className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                        disabled={!isOtherChecked}
                                                    />)}
                                            </div>
                                        )
                                    })}
                                    <ErrorMessage
                                        name="timeExt"
                                        component="div"
                                        className="error-message" />
                                    <ErrorMessage
                                        name="otherTimeExt"
                                        component="div"
                                        className="error-message" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Compétences rechechées</p>
                                    <Field
                                        as="textarea"
                                        name="competenciesExt"
                                        rows={5}
                                        placeholder="Listes des compétences requises"
                                    />
                                    <ErrorMessage
                                        name="competenciesExt"
                                        component="div"
                                        className="error-message" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Expérience souhaitée</p>
                                    {ExperiencesExt.map((items, i) => (
                                        <div key={i} className="flex gap-4">
                                            <Field
                                                type="checkbox"
                                                name="experiencesExt"
                                                value={items} />
                                            <label>{items}</label>
                                        </div>
                                    ))}
                                    <ErrorMessage
                                        name="experiencesExt"
                                        component="div"
                                        className="text-red-500 text-sm" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Langues nécéssaires</p>
                                    {LanguageExtInf.map((items, i) => {
                                        const isOtherChecked = values.languageExt?.includes("autre");
                                        return (
                                            <div key={i} className="flex flex-col gap-2">
                                                <div className="flex gap-4">
                                                    <Field
                                                        type="checkbox"
                                                        name="languageExt"
                                                        value={i === 2 ? "autre" : items} />
                                                    <label>{items}</label>
                                                </div>
                                                {i == 2 && (
                                                    <Field
                                                        type="text"
                                                        name="otherLangExt"
                                                        placeholder="Précisez les autres langues"
                                                        className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                        disabled={!isOtherChecked}
                                                    />)}
                                            </div>
                                        )
                                    })}
                                    <ErrorMessage
                                        name="languageExt"
                                        component="div"
                                        className="text-red-500 text-sm" />
                                    <ErrorMessage
                                        name="otherLangExt"
                                        component="div"
                                        className="text-red-500 text-sm" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Diplômes ou certifications requis</p>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-6">
                                        <div className="flex gap-4">
                                            <Field
                                                type="radio"
                                                name="chooseDeg"
                                                value="Oui"
                                            />
                                            <label>Oui</label>
                                        </div>
                                        <div className="flex gap-4">
                                            <Field
                                                type="radio"
                                                name="chooseDeg"
                                                value="Non"
                                            />
                                            <label>Non</label>
                                        </div>
                                    </div>
                                    <Field
                                        type="text"
                                        name="yesInpExt"
                                        placeholder="Précisez les diplômes requis"
                                        disabled={values.chooseDeg == "Non"}
                                        className={`${values.chooseDeg == "Non" ? '!border !border-gray-400' : ''}`}
                                    />
                                    <ErrorMessage
                                        name="yesInpExt"
                                        component="div"
                                        className="text-red-500 text-sm" />
                                </div>
                                    <div>
                                        <Field
                                            rows={5}
                                            as="textarea"
                                            name="commentTxt"
                                            className="resize-none"
                                            placeholder="Ajoutez votre commentaire" />
                                    </div>
                                </div>
                            </div>                     
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>3.Modalités de suivi et de facturation</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                <p>Suivi souhaité</p>
                                {ModalityExtInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="checkbox"
                                            name="modalityExt"
                                            value={items} />
                                        <label>{items}</label>
                                    </div>
                                ))}
                                <ErrorMessage
                                    name="modalityExt"
                                    component="div"
                                    className="text-red-500 text-sm" />
                            </div>
                            <div className="flex flex-col gap-2 pl-4">
                                <p>Mode de facturation</p>
                                {FacturationModExtInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="checkbox"
                                            name="facturationModExt"
                                            value={items} />
                                        <label>{items}</label>
                                    </div>
                                ))}
                                <ErrorMessage
                                    name="facturationModExt"
                                    component="div"
                                    className="text-red-500 text-sm" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>4.Maintenance & évolution (si applicable)</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                <div className="flex gap-4">
                                    <Field
                                        type="radio"
                                        name="maintenanceExt"
                                        value="Oui, je souhaite un suivi continu"
                                    />
                                    <label>Oui, je souhaite un suivi continu</label>
                                </div>
                                <div className="flex gap-4">
                                    <Field
                                        type="radio"
                                        name="maintenanceExt"
                                        value="Non, uniquement la mission définie"
                                    />
                                    <label>Non, uniquement la mission définie</label>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>5.Budget & délais</h4>
                            
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}