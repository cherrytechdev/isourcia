'use client'

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"
import { useFormStore } from "@/store/formStore";
import Link from "next/link";
import toast from "react-hot-toast"

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Le nom doit contenir au moins 3 caractères")
    .required("Le nom est requis"),
    
  firstname: Yup.string()
    .min(3, "Le prénom doit contenir au moins 3 caractères")
    .required("Le prénom est requis"),
    
  nPhone: Yup.string()
    .min(5, "Le numéro de téléphone doit contenir au moins 5 chiffres")
    .required("Le numéro de téléphone est requis")
    .matches(/^[0-9]+$/, "Le numéro ne doit contenir que des chiffres")
    .max(15, "Le numéro ne doit pas dépasser 15 chiffres"),
    
  mail: Yup.string()
    .email("L'adresse e-mail n'est pas valide")
    .required("L'adresse e-mail est requise"),
    
  company: Yup.string()
    .required("Le nom de l’entreprise est requis"),
    
  physicalAddress: Yup.string()
    .required("L’adresse physique est requise"),
    
  contact: Yup.array()
    .min(1, "Vous devez sélectionner au moins un contact"),
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

                ressource: values.ressource,
                marketMainObj: values.marketMainObj,
                otherMarketMainObj: values.otherMarketMainObj,
                marketExpSearch: values.marketExpSearch,
                otherMarketExpSearch: values.otherMarketExpSearch,
                marketContent: values.marketContent,
                marketMissionDelay: values.marketMissionDelay,
                marketDateWish: values.marketDateWish,
                marketMailFreq: values.marketMailFreq,
                marketContactBase: values.marketContactBase,
                marketBudget: values.marketBudget,
                marketTimeline: values.marketTimeline,
                marketOptionComp: values.marketOptionComp,
                otherMarketOptionComp: values.otherMarketOptionComp,
                marketTechTools: values.marketTechTools,
                otherMarketTechTools: values.otherMarketTechTools,

                objectiveMobile: values.objectiveMobile,
                otherObjectiveMobile: values.otherObjectiveMobile,
                plateformMobile: values.plateformMobile,
                otherPlateformMobile: values.otherPlateformMobile,
                designMobile: values.designMobile,
                designStyleMobile: values.designStyleMobile,
                inspirationAppMobile: values.inspirationAppMobile,
                functionalityMobile: values.functionalityMobile,
                otherFunctionalityMobile: values.otherFunctionalityMobile,
                apkContentMobile: values.apkContentMobile,
                dataManageMobile: values.dataManageMobile,
                otherDataManageMobile: values.otherDataManageMobile,
                maintainMobile: values.maintainMobile,
                budgetMobile: values.budgetMobile,
                delayMvpMobile: values.delayMvpMobile,
                techMobile: values.techMobile,
                otherTechMobile: values.otherTechMobile,


                resourceExt: values.resourceExt,
                otherResExt: values.otherResExt,
                dateStartExt: values.dateStartExt,
                durationExt: values.durationExt,
                timeExt: values.timeExt,
                otherTimeExt: values.otherTimeExt,
                competenciesExt: values.competenciesExt,
                experiencesExt: values.experiencesExt,
                languageExt: values.languageExt,
                otherLangExt: values.otherLangExt,
                chooseDeg: values.chooseDeg,
                yesInpExt: values.yesInpExt,
                commentTxt: values.commentTxt,
                modalityExt: values.modalityExt,
                facturationModExt: values.facturationModExt,
                maintenanceExt: values.maintenanceExt,
                budgetExt: values.budgetExt,


    webObj: values.webObj,
  otherWebObj: values.otherWebObj,
  chooseChart: values.chooseChart,
  webDesign: values.webDesign,
  inspirationWeb: values.inspirationWeb,
  webContent: values.webContent,
  webContentReady: values.webContentReady,
  webFunctionality: values.webFunctionality,
  webMaintenance: values.webMaintenance,
  webBudget: values.webBudget,
  webDelay: values.webDelay,
  webOptions: values.webOptions,
  webTechnology: values.webTechnology,
  otherWebTechnology: values.otherWebTechnology,

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
                        // resetForm();
                        toast.success("Votre message a été envoyé !")
                    } else {
                        console.error("Erreur serveur:", response.statusText);
                        alert("Erreur lors de l'envoi du message.");
                    }
                } catch (error) {
                    console.error("Erreur d'envoi:", error);
                    toast.error("Erreur lors de l'envoi du message.");
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({ isSubmitting }) => (
                <Form className="flex justify-center shadow-2xl w-full pt-8">
                    <div className="flex flex-col gap-8 bg-white text-gray-700 p-10 w-2xl rounded-lg">
                        <div className="flex items-center justify-between">
                            <Link href="/">
                                <img src="/icon/isourcia_original.png" alt="Accounting img" className="w-[100px] md:w-[150px] lg:w-[200px]"/>
                            </Link>
                            <p className="text-md md:text-2xl lg:text-4xl">Contact</p>
                        </div>
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
                                type="email"
                                name="mail"
                            />
                            <ErrorMessage
                                name="email"
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
                                        value="Mail"
                                    />
                                    <label>Mail</label>
                                </div>
                                <div className="flex gap-4">
                                    <Field
                                        type="checkbox"
                                        name="contact"
                                        value="Whatsapp"
                                    />
                                    <label>Whatsapp</label>
                                </div>
                                <div className="flex gap-4">
                                    <Field
                                        type="checkbox"
                                        name="contact"
                                        value="Google Meet"
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
                            className={`bg-gradient-to-r from-[#040A18] to-[#0A1027] transition-all duration-500 hover:bg-gradient-to-l hover:from-[#040A18] hover:to-[#0A1027] text-white p-2 rounded-md ${
                                isSubmitting ? "opacity-50" : ""}`}
                        >
                            {isSubmitting ? "Envoie..." : "Envoyer"}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}