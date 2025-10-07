'use client'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import { useRouter } from "next/navigation";
import {
    WebContentInf,
    WebDelayInf,
    WebDesignInf,
    WebFunctionalityInf,
    WebMaintenanceInf,
    WebObjInf,
    WebOptionsInf,
    WebTechnologyInf
} from "@/constant";
import { useFormStore } from "@/store/formStore"


const schema = Yup.object().shape({
  webObj: Yup.array().min(1, "Vous devez en choisir un"),
  otherWebObj: Yup.string().when("webObj", {
    is: (val: string[]) => val?.includes("autre"),
    then: (schema) => schema.required("Vous devez préciser l'autre ressource"),
    otherwise: (schema) => schema.notRequired(),
  }),
  webDesign: Yup.array().min(1, "Vous devez en choisir un"),
  webContent: Yup.array().min(1, "La compétence est requise"),
  webBudget: Yup.string().required("Veulliez inserer le budget approximatif"),
});


export default function WebAppMaker() {

     const route = useRouter();
  const { values: initialValues, setValues } = useFormStore();


    return (
        <Formik
            initialValues={initialValues}
      enableReinitialize
      validationSchema={schema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          console.log("Valeurs soumises:", values);
          // sauvegarde dans le store si nécessaire
          setValues(values);
          resetForm();
        } catch (error) {
          console.error("Erreur d'envoi", error);
        } finally {
          setSubmitting(false);
          route.push("/Contact");
        }
      }}
        >
            {({ values, isSubmitting }) => (
                <Form className="flex justify-center w-full">
                    <div className="flex flex-col gap-8 bg-white text-gray-700 p-6 md:p-10 w-4xl rounded-lg shadow-2xl">
                        <div className="flex flex-col gap-4">
                            <h4>1. Objectif du site</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {WebObjInf.map((items, i) => {
                                    const isOtherChecked = values.webObj.includes("autre");
                                    return (
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="checkbox"
                                                    name="webObj"
                                                    value={i === 4 ? "autre" : items}
                                                />
                                                <label>{items}</label>
                                            </div>
                                            {i == 4 && (
                                                <Field
                                                    type="text"
                                                    name="otherWebObj"
                                                    placeholder="Précisez les autres ressources"
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                    disabled={!isOtherChecked}
                                                />)}
                                        </div>
                                    )
                                })}
                                <ErrorMessage
                                    name="webObj"
                                    component="div"
                                    className="error-message"
                                />
                                <ErrorMessage
                                    name="otherWebObj"
                                    component="div"
                                    className="error-message"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>2. Design et identité visuelle</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                <div className="flex flex-col gap-2">
                                    <p>Charte graphique existante</p>
                                    <div className="flex gap-6">
                                        <div className="flex gap-4">
                                            <Field
                                                type="radio"
                                                name="chooseChart"
                                                value="oui"
                                            />
                                            <label>Oui</label>
                                        </div>
                                        <div className="flex gap-4">
                                            <Field
                                                type="radio"
                                                name="chooseChart"
                                                value="non"
                                            />
                                            <label>Non</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>Style préféré</p>
                                    {WebDesignInf.map((items, i) => (
                                        <div key={i} className="flex gap-4">
                                            <Field
                                                type="checkbox"
                                                name="webDesign"
                                                value={items}
                                            />
                                            <label>{items}</label>
                                        </div>
                                    ))}
                                    <ErrorMessage
                                        name="webDesign"
                                        component="div"
                                        className="error-message" />
                                    <p>Sites d'inspiration (liens)</p>
                                        <Field
                                            as="textarea"
                                            name="inspirationWeb"
                                            rows={5}
                                            placeholder="Votre inspiration"
                                            />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>3. Contenu du site</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                <div className="flex flex-col gap-2">
                                    <p>Page à inclure</p>
                                    {WebContentInf.map((items, i) => (
                                        <div key={i} className="flex gap-4">
                                            <Field
                                                type="checkbox"
                                                name="webContent"
                                                value={items}
                                                />
                                            <label>{items}</label>
                                        </div> 
                                    ))}
                                    <ErrorMessage 
                                        name="webContent" 
                                        component="div" 
                                        className="error-message"/>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p>Contenu</p>
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            name="webContentReady"
                                            value="Déjà prêt (fourni par client)"
                                            />
                                        <label>Déjà prêt (fourni par client)</label>
                                    </div>
                                    <div className="flex gap-4">
                                        <Field
                                            type="radio"
                                            name="webContentReady"
                                            value="À créer (besoin rédaction/visuels)"
                                            />
                                        <label>À créer (besoin rédaction/visuels)</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>4. Fonctionnalités spécifiques</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {WebFunctionalityInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="checkbox"
                                            name="webFunctionality"
                                            value={items}
                                            />
                                        <label>{items}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <h4>5. Maintenance & évolution</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {WebMaintenanceInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="radio"
                                            name="webMaintenance"
                                            value={items}
                                            />
                                        <label>{items}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>6. Budget & délais</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                <p>Budget approximatif</p>
                                <Field
                                    type="text"
                                    name="webBudget"
                                    placeholder="en Dollar"
                                    />
                                <ErrorMessage 
                                    name="webBudget" 
                                    component="div" 
                                    className="error-message"/>
                                
                                <p>Délais souhaités</p>
                                {WebDelayInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="radio"
                                            name="webDelay"
                                            value={items}
                                            />
                                        <label>{items}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>7. Options complémentaires</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {WebOptionsInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="checkbox"
                                            name="webOptions"
                                            value={items}
                                            />
                                        <label>{items}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>8. Technologies préférées (facultatif) </h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {WebTechnologyInf.map((items, i) => {
                                    const isOtherChecked = values.webTechnology.includes("autre");
                                    return (
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="checkbox"
                                                    name="webTechnology"
                                                    value={i === 6 ? "autre" : items}
                                                />
                                                <label>{items}</label>
                                            </div>
                                            {i == 6 && (
                                                <Field
                                                    type="text"
                                                    name="otherWebTechnology"
                                                    placeholder="Précisez les autres ressources"
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                    disabled={!isOtherChecked}
                                                />)}
                                        </div>
                                    )
                                })}
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