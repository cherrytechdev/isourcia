'use client'

import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup"


const schema = Yup.object().shape({
    name: Yup.string().min(3, "Le nom doit contenir au moins 3 caractères").required("Le nom est requis"),
    firstname: Yup.string().min(3, "Le prénom doit contenir au moins 3 caractères").required("Le prénom est requis"),
    nPhone: Yup.string().min(5, "Le numéro doit contenir au moins 5 caractères").required("Le numéro est requis"),
    mail: Yup.string().email("Le mail est invalide").required("Le numéro est requis"),
    company: Yup.string().required("Le nom de la société est requis"),
    physicalAddress: Yup.string().required("L'addresse physique est requise"),
    contact: Yup.array().min(1, "Vous devez en choisir un")
})

export default function ContactForm(){
    return(
        <Formik
            initialValues={{
                name:"", 
                firstname:"", 
                nPhone:"", 
                mail:"", 
                company: "", 
                physicalAddress:"", 
                contact: []    
            }}
            validationSchema={schema}
            onSubmit={async (values, {resetForm, setSubmitting}) => {
                try {
                    const responseAPI = await axios.post("")
                    console.log("Reponse du serveur", responseAPI.data)
                    resetForm()
                }catch(error){
                    console.error("Erreur d'envoie", error)
                }finally{
                    setSubmitting(false)
                }
            }}
        >
            {({isSubmitting}) => (
            <Form>
                <div className="flex flex-col">
                    <label>Nom</label>
                    <Field type="text" name="name"/>
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm"/>
                </div>
                <div className="flex flex-col">
                    <label>Prenom</label>
                    <Field type="text" name="firstname"/>
                    <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="nPhone">Numero telephone</label>
                    <Field type="number" name="nPhone"/>
                    <ErrorMessage name="nPhone" component="div" className="text-red-500 text-sm"/>
                </div>
                <div className="flex flex-col">
                    <label>Adresse mail</label>
                    <Field type="mail" name="mail"/>
                    <ErrorMessage name="mail" component="div" className="text-red-500 text-sm"/>
                </div>
                <div className="flex flex-col">
                    <label>Société</label>
                    <Field type="text" name="company"/>
                    <ErrorMessage name="company" component="div" className="text-red-500 text-sm"/>
                </div>
                <div className="flex flex-col">
                    <label>Adresse physique</label>
                    <Field type="text" name="physicalAddress"/>
                    <ErrorMessage name="physicalAddress" component="div" className="text-red-500 text-sm"/>
                </div>
                <div>
                    <p>Je souhaite être contactez par</p>
                    <div>
                        <label>Mail</label>
                        <Field type="checkbox" name="contact" value="mailCheck"/>
                    </div>
                    <div>
                        <label>Whatsapp</label>
                        <Field type="checkbox" name="contact" value="watsappCheck"/>
                    </div>
                    <div>
                        <label>Google meet</label>
                        <Field type="checkbox" name="contact" value="googleCheck"/>
                    </div>
                    <ErrorMessage name="contact" component="div" className="text-red-500 text-sm"/>
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting? "Envoie..." : "Envoyer"}
                </button>
            </Form>
            )}
        </Formik>
    )
}