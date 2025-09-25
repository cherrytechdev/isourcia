'use client'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
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


const schema = Yup.object().shape({
    resourceExt: Yup.array().min(1, "Vous devez en choisir un"),
    otherResExt: Yup.string().when("resourceExt",{
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Vous devez préciser l'autre ressource"),
        otherwise: (schema) => schema.notRequired()
    }),

    dateStartExt: Yup.string().required("La date est requise"),
    durationExt: Yup.array().min(1, "La durée est requise"),

    timeExt: Yup.array().min(1, "Vous devez en choisir un"),
    otherTimeExt: Yup.string().when("timeExt", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Vous devez préciser l'autre ressource"),
        otherwise: (schema) => schema.notRequired()
    }),

    competenciesExt: Yup.string().required("La compétence est requise"),
    experiencesExt: Yup.array().min(1, "Vous devez en choisir un"),

    languageExt: Yup.array().min(1, "Vous devez en choisir un"),
    otherLangExt: Yup.string().when("languageExt", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Vous devez préciser l'autre ressource"),
        otherwise: (schema) => schema.notRequired()
    }),

    yesInpExt: Yup.string().when("chooseDeg", {
        is: "YesExt",
        then: (schema) => schema.required("Veulliez préciser le diplôme requis"),
        otherwise: (schema) => schema.notRequired(),
    }),

    modalityExt: Yup.array().min(1, "Le suivi souhaité est requis"),
    facturationModExt: Yup.array().min(1, "Le mode de facturation est requis"),
    budgetExt: Yup.array().min(1, "Le budget approximatif est requis")

})

export default function ExternalisationForm(){
    return(
        <Formik
            initialValues={{
                resourceExt: [] as string[],
                otherResExt: "",
                dateStartExt: "",
                durationExt: "",
                timeExt: [] as string[],
                otherTimeExt: "",
                competenciesExt: "",
                experiencesExt: "",
                languageExt: [] as string[],
                otherLangExt: "",
                chooseDeg: "noExt",
                yesInpExt: "",
                modalityExt: "",
                facturationModExt: "",
                maintenanceExt: "noExt",
                budgetExt: ""
                }}
            validationSchema={schema}
            onSubmit={async(values, {resetForm, setSubmitting}) => {
                try{
                    console.log(values)
                    console.log(values.resourceExt)
                    resetForm()
                }catch(error){
                    console.log("Erreur d'envoie :", error)
                }finally{
                    setSubmitting(false)
                }
            }}
            >
            {({values, isSubmitting}) => ( 
            <Form className="w-lg">
                <div>
                    <h4>1.Ressources à externaliser</h4>
                    <div>
                        {ResourceExtInf.map((items, i) => {
                            const isOtherChecked = values.resourceExt.includes("autre");
                            return(
                                <div key={i} className="">
                                    <Field 
                                        type="checkbox" 
                                        name="resourceExt" 
                                        value={i === 5 ? "autre" : items}/>
                                    <label>{items}</label>
                                    {i == 5 && (
                                        <Field 
                                            type="text" 
                                            name="otherResExt" 
                                            className={`${!isOtherChecked ? 'border border-gray-500' : 'border border-white'}`} 
                                            disabled={!isOtherChecked}
                                            />)}
                                </div>
                            )
                        })}
                        <ErrorMessage 
                            name="resourceExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                        <ErrorMessage 
                            name="otherResExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                    </div>
                </div>
                
                <div>
                    <h4>2.Détails de la mission</h4>
                    <div className="flex flex-col">
                        <label>Date de début</label>
                        <Field 
                            type="date" 
                            name="dateStartExt" 
                            className="border border-white p-2"/>
                        <ErrorMessage 
                            name="dateStartExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                    </div>
                    <div>
                        <p>Durée de l'externalisation</p>
                        {DurationExtInf.map((items, i) => (
                            <div key={i}>
                                <Field 
                                    type="checkbox" 
                                    name="durationExt" 
                                    value={items}/>
                                <label>{items}</label>
                            </div>
                        ))}
                        <ErrorMessage 
                            name="durationExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                    </div>
                    <div>
                        <p>Temps de travail attendu</p>
                        {TimeTravelExtInf.map((items, i) => {
                            const isOtherChecked = values.timeExt?.includes("autre");
                            return(
                                <div key={i}>
                                    <Field 
                                        type="checkbox" 
                                        name="timeExt" 
                                        value={i === 2 ? "autre" : items}/>
                                    <label>{items}</label>
                                    {i == 2 && (
                                        <Field 
                                            type="text" 
                                            name="otherTimeExt" 
                                            placeholder="Precisez le nombre d'heure"
                                            className={`${!isOtherChecked ? 'border border-gray-500' : 'border border-white'}`} 
                                            disabled={!isOtherChecked}
                                            />)}
                                </div>
                        )})}
                        <ErrorMessage 
                            name="timeExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                        <ErrorMessage 
                            name="otherTimeExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                    </div>
                    <div>
                        <p>Compétences rechechées</p>
                        <Field 
                            as="textarea" 
                            name="competenciesExt" 
                            rows={5} 
                            placeholder="Listes des compétences requises" 
                            className="resize-none"/>
                        <ErrorMessage 
                            name="competenciesExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                    </div>
                    <div>
                        <p>Expérience souhaitée</p>
                        {ExperiencesExt.map((items, i) => (
                            <div key={i}>
                                <Field 
                                    type="checkbox" 
                                    name="experiencesExt" 
                                    value={items}/>
                                <label>{items}</label>
                            </div>
                        ))}
                        <ErrorMessage 
                            name="experiencesExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                    </div>
                    <div>
                        <p>Langues nécéssaires</p>
                        {LanguageExtInf.map((items, i) => {
                            const isOtherChecked = values.languageExt?.includes("autre");
                            return(
                            <div key={i}>
                                <Field 
                                    type="checkbox" 
                                    name="languageExt" 
                                    value={i === 2 ? "autre" : items}/>
                                <label>{items}</label>
                                {i == 2 && (
                                    <Field 
                                        type="text"
                                        name="otherLangExt" 
                                        className={`${!isOtherChecked ? 'border border-gray-500' : 'border border-white'}`} 
                                        disabled={!isOtherChecked}
                                        />)}
                            </div>
                        )})}
                        <ErrorMessage 
                            name="languageExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                        <ErrorMessage 
                            name="otherLangExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                    </div>
                    <div>
                        <p>Diplômes ou certifications requis</p>
                        <div>
                            <div className="flex">
                                <div>
                                    <label>Oui</label>
                                    <Field
                                        type="radio"
                                        name="chooseDeg"
                                        value="yesExt"
                                        />
                                </div>
                                <div>
                                    <label>Non</label>
                                    <Field
                                        type="radio"
                                        name="chooseDeg"
                                        value="noExt"
                                        />
                                </div>
                            </div>
                            <Field 
                                type="text"
                                name="yesInpExt"
                                placeholder="Précisez les diplômes requis"
                                disabled={values.chooseDeg !== "yesExt"}
                                className={`${values.chooseDeg !== "yesExt" ? 'border border-gray-500' : 'border border-white'}`}
                                />
                            <ErrorMessage 
                                    name="yesInpExt" 
                                    component="div" 
                                    className="text-red-500 text-sm"/>
                        </div>
                        <div>
                            <Field
                                rows={5} 
                                as="textarea" 
                                name="commentTxt" 
                                className="resize-none"
                                placeholder="Ajoutez votre commentaire"/>
                        </div>
                    </div>
                </div>

                <div>
                    <h4>3.Modalités de suivi et de facturation</h4>
                    <div>
                        <p>Suivi souhaité</p>
                        {ModalityExtInf.map((items, i) => (
                            <div key={i}>
                                <Field 
                                    type="checkbox" 
                                    name="modalityExt" 
                                    value={items}/>
                                <label>{items}</label>
                            </div>
                        ))}
                        <ErrorMessage 
                            name="modalityExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                    </div>
                    <div>
                        <p>Mode de facturation</p>
                        {FacturationModExtInf.map((items, i) => (
                            <div key={i}>
                                <Field 
                                    type="checkbox" 
                                    name="facturationModExt" 
                                    value={items}/>
                                <label>{items}</label>
                            </div>
                        ))}
                        <ErrorMessage 
                            name="facturationModExt" 
                            component="div" 
                            className="text-red-500 text-sm"/>
                    </div>
                </div>

                <div>
                    <div>
                        <h4>Maintenance & évolution (si applicable)</h4>
                        <div>
                            <label>Oui, je souhaite un suivi continu</label>
                            <Field 
                                type="radio" 
                                name="maintenanceExt"
                                value="yesExt"
                                />
                            <label>Non, uniquement la mission définie</label>
                            <Field 
                                type="radio" 
                                name="maintenanceExt"
                                value="noExt"
                                />
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <p>5.Budget & délais</p>
                        <div>
                            <p>Budget approximatif</p>
                            <div>
                                {BudgetExtInf.map((items, i) => (
                                    <div key={i}>
                                        <Field 
                                            type="checkbox" 
                                            name="budgetExt" 
                                            value={items}/>
                                        <label>{items}</label>
                                    </div>
                                ))}
                                <ErrorMessage 
                                    name="budgetExt" 
                                    component="div" 
                                    className="text-red-500 text-sm"/>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting? "Envoie..." : "Envoyer"}
                </button>
            </Form>
            )}
        </Formik>
    )
}