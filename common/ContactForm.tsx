'use client'

import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup"
import { useFormStore } from "@/store/formStore";


const schema = Yup.object().shape({
    name: Yup.string().min(3, "Le nom doit contenir au moins 3 caractères").required("Le nom est requis"),
    firstname: Yup.string().min(3, "Le prénom doit contenir au moins 3 caractères").required("Le prénom est requis"),
    nPhone: Yup.string().min(5, "Le numéro doit contenir au moins 5 caractères").required("Le numéro est requis"),
    mail: Yup.string().email("Le mail est invalide").required("Le numéro est requis"),
    company: Yup.string().required("Le nom de la société est requis"),
    physicalAddress: Yup.string().required("L'addresse physique est requise"),
    contact: Yup.array().min(1, "Vous devez en choisir un")
})

export default function ContactForm() {
    const { values } = useFormStore()
    return (
        <Formik
            initialValues={{
                name: "",
                firstname: "",
                nPhone: "",
                mail: "",
                company: "",
                physicalAddress: "",
                contact: [],

                date: values.date,
                contratDuration: values.contratDuration,
                travelDuration: values.travelDuration,
                yearExperiences: values.yearExperiences,
                competencies: values.competencies,
                otherComp: values.otherComp,
                language: values.language,
                otherLang: values.otherLang,
                level: values.level,
                message: values.message,
                contractUnits: values.contractUnits,
                day: values.day,
                night: values.night,
                ressourceRecrut: values.ressourceRecrut,
                service: values.service,


            }}
            validationSchema={schema}
            onSubmit={async (values, { resetForm, setSubmitting }) => {
                try {
                    const response = await fetch("/api/sendForm", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(values),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        console.log("Réponse serveur:", data);
                        resetForm();
                        alert("Votre message a été envoyé !");
                    } else {
                        console.error("Erreur serveur:", response.statusText);
                        alert("Erreur lors de l'envoi du message.");
                    }
                } catch (error) {
                    console.error("Erreur d'envoi:", error);
                    alert("Erreur lors de l'envoi du message.");
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({ isSubmitting }) => (
                <Form className="flex justify-center shadow-2xl w-full mt-8">
                    <div className="flex flex-col gap-8 bg-white text-gray-700 p-10 w-2xl rounded-lg">
                        <div className="flex flex-col gap-2">
                            <label>Nom</label>
                            <Field
                                type="text"
                                name="name"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="error-message" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Prenom</label>
                            <Field
                                type="text"
                                name="firstname"
                            />
                            <ErrorMessage
                                name="firstname"
                                component="div"
                                className="error-message" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nPhone">Numero telephone</label>
                            <Field
                                type="number"
                                name="nPhone"
                            />
                            <ErrorMessage
                                name="nPhone"
                                component="div"
                                className="error-message" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Adresse mail</label>
                            <Field
                                type="mail"
                                name="mail"
                            />
                            <ErrorMessage
                                name="mail"
                                component="div"
                                className="error-message" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Société</label>
                            <Field
                                type="text"
                                name="company"
                            />
                            <ErrorMessage
                                name="company"
                                component="div"
                                className="error-message" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Adresse physique</label>
                            <Field
                                type="text"
                                name="physicalAddress"
                            />
                            <ErrorMessage
                                name="physicalAddress"
                                component="div"
                                className="error-message" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Je souhaite être contactez par</p>
                            <div className="flex flex-col gap-2 pl-4">
                                <div className="flex gap-4">
                                    <Field
                                        type="checkbox"
                                        name="contact"
                                        value="mailCheck"
                                    />
                                    <label>Mail</label>
                                </div>
                                <div className="flex gap-4">
                                    <Field
                                        type="checkbox"
                                        name="contact"
                                        value="watsappCheck"
                                    />
                                    <label>Whatsapp</label>
                                </div>
                                <div className="flex gap-4">
                                    <Field
                                        type="checkbox"
                                        name="contact"
                                        value="googleCheck"
                                    />
                                    <label>Google meet</label>
                                </div>
                                <ErrorMessage
                                    name="contact"
                                    component="div"
                                    className="error-message" />
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-gradient-to-r from-[#040A18] to-[#0A1027] transition-all duration-500 hover:bg-gradient-to-l hover:from-[#040A18] hover:to-[#0A1027] text-white p-2 rounded-md"
                        >
                            {isSubmitting ? "Envoie..." : "Envoyer"}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}