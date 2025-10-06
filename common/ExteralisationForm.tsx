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


const schema = Yup.object().shape({
  resourceExt: Yup.array().min(1, "Vous devez en choisir un"),
  otherResExt: Yup.string().when("resourceExt", {
    is: (val: string[]) => val?.includes("autre"),
    then: (schema) => schema.required("Vous devez préciser l'autre ressource"),
  }),
  dateStartExt: Yup.string().required("La date est requise"),
  durationExt: Yup.array().min(1, "La durée est requise"),
  timeExt: Yup.array().min(1, "Vous devez en choisir un"),
  otherTimeExt: Yup.string().when("timeExt", {
    is: (val: string[]) => val?.includes("autre"),
    then: (schema) => schema.required("Vous devez préciser l'autre ressource"),
  }),
  competenciesExt: Yup.string().required("La compétence est requise"),
  experiencesExt: Yup.array().min(1, "Vous devez en choisir un"),
  languageExt: Yup.array().min(1, "Vous devez en choisir un"),
  otherLangExt: Yup.string().when("languageExt", {
    is: (val: string[]) => val?.includes("autre"),
    then: (schema) => schema.required("Vous devez préciser l'autre ressource"),
  }),
  yesInpExt: Yup.string().when("chooseDeg", {
    is: "YesExt",
    then: (schema) => schema.required("Veulliez préciser le diplôme requis"),
  }),
  modalityExt: Yup.array().min(1, "Le suivi souhaité est requis"),
  facturationModExt: Yup.array().min(1, "Le mode de facturation est requis"),
});

export default function ExternalisationForm(){

    const route = useRouter();
  const { values: storeValues, setValues } = useFormStore();

    return(
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
          route.push("/Contact");
        }
      }}
            >
            {({values, isSubmitting}) => ( 
            <Form className="flex justify-center w-full">
                <div className="flex flex-col gap-8 bg-white text-gray-700 p-6 md:p-10 w-4xl rounded-lg shadow-2xl">
                    <div className="flex flex-col gap-4">
                        <h4>1.Ressources à externaliser</h4>
                        <div className="flex flex-col gap-2 pl-4">
                            {ResourceExtInf.map((items, i) => {
                                const isOtherChecked = values.resourceExt.includes("autre");
                                return(
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
                        </div>
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
                                className="error-message"/>
                        </div>
                        <div className="flex flex-col gap-2 pl-4">
                            <p>Durée de l'externalisation</p>
                            {DurationExtInf.map((items, i) => (
                                <div className="flex gap-4" key={i}>
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
                                className="error-message"/>
                        </div>
                        <div className="flex flex-col gap-2 pl-4">
                            <p>Temps de travail attendu</p>
                            {TimeTravelExtInf.map((items, i) => {
                                const isOtherChecked = values.timeExt?.includes("autre");
                                return(
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="flex gap-4">
                                            <Field 
                                                type="checkbox" 
                                                name="timeExt" 
                                                value={i === 2 ? "autre" : items}/>
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
                            )})}
                            <ErrorMessage 
                                name="timeExt" 
                                component="div" 
                                className="error-message"/>
                            <ErrorMessage 
                                name="otherTimeExt" 
                                component="div" 
                                className="error-message"/>
                        </div>
                        <div className="flex flex-col gap-2 pl-4">
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
                                className="error-message"/>
                        </div>
                        <div className="flex flex-col gap-2 pl-4">
                            <p>Expérience souhaitée</p>
                            {ExperiencesExt.map((items, i) => (
                                <div key={i} className="flex gap-4">
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
                        <div className="flex flex-col gap-2 pl-4">
                            <p>Langues nécéssaires</p>
                            {LanguageExtInf.map((items, i) => {
                                const isOtherChecked = values.languageExt?.includes("autre");
                                return(
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex gap-4">
                                        <Field 
                                            type="checkbox" 
                                            name="languageExt" 
                                            value={i === 2 ? "autre" : items}/>
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
                        <div className="flex flex-col gap-2 pl-4">
                            <p>Diplômes ou certifications requis</p>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-6">
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            name="chooseDeg"
                                            value="yesExt"
                                            />
                                        <label>Oui</label>
                                    </div>
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            name="chooseDeg"
                                            value="noExt"
                                            />
                                        <label>Non</label>
                                    </div>
                                </div>
                                <Field 
                                    type="text"
                                    name="yesInpExt"
                                    placeholder="Précisez les diplômes requis"
                                    disabled={values.chooseDeg == "noExt"}
                                    className={`${values.chooseDeg == "noExt" ? '!border !border-gray-400' : ''}`}
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

                    <div className="flex flex-col gap-4">
                        <h4>3.Modalités de suivi et de facturation</h4>
                        <div className="flex flex-col gap-2 pl-4">
                            <p>Suivi souhaité</p>
                            {ModalityExtInf.map((items, i) => (
                                <div key={i} className="flex gap-4">
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
                        <div className="flex flex-col gap-2 pl-4">
                            <p>Mode de facturation</p>
                            {FacturationModExtInf.map((items, i) => (
                                <div key={i} className="flex gap-4">
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

                    <div className="flex flex-col gap-4">
                        <h4>4.Maintenance & évolution (si applicable)</h4>
                        <div className="flex flex-col gap-2 pl-4">
                            <div className="flex gap-4">           
                                <Field 
                                    type="radio" 
                                    name="maintenanceExt"
                                    value="yesExt"
                                    />
                                <label>Oui, je souhaite un suivi continu</label>
                            </div>                       
                            <div className="flex gap-4">                
                                <Field 
                                    type="radio" 
                                    name="maintenanceExt"
                                    value="noExt"
                                    />
                                <label>Non, uniquement la mission définie</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4>5.Budget & délais</h4>
                        <div className="flex flex-col gap-2 pl-4">
                            <p>Budget approximatif</p>
                            <div className="flex flex-col gap-2">
                                {BudgetExtInf.map((items, i) => (
                                    <div key={i} className="flex gap-2">
                                        <Field
                                            type="radio"
                                            name="budgetExt"
                                            value={items} />
                                        <label>{items}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-[#040A18] to-[#0A1027] transition-all duration-500 hover:bg-gradient-to-l hover:from-[#040A18] hover:to-[#0A1027] text-white p-2 rounded-md"
                        >
                        Suivant
                    </button>
                </div>
            </Form>
            )}
        </Formik>
    )
}