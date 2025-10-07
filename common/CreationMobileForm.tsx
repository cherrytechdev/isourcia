'use client'

import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"
import {
    ObjectiveMobileInf,
    PlateformMobileInf,
    DesignMobileInf,
    FunctionalityMobileInf,
    ApkContentMobileInf,
    DataManageMobileInf,
    MaintainMobileInf,
    BudgetMobileInf,
    DelayMVPMobileInf,
    TechMobileInf
} from "@/constant"
import { useRouter } from "next/navigation"
import { useFormStore } from "@/store/formStore"


const schema = Yup.object().shape({
    objectiveMobile: Yup.array().min(1, "Vous devez en choisir un"),
    otherObjectiveMobile: Yup.string().when("objectiveMobile", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Vous devez préciser l'autre objectif"),
        otherwise: (schema) => schema.notRequired()
    }),

    plateformMobile: Yup.array().min(1, "Vous devez en choisir un"),
    otherPlateformMobile: Yup.string().when("plateformMobile", {
        is: (val: string[]) => val?.includes("autres"),
        then: (schema) => schema.required("Vous devez préciser l'autre plateforme"),
        otherwise: (schema) => schema.notRequired()
    }),

    designStyleMobile: Yup.array().when("designMobile", {
        is: "noMob",
        then: (schema) => schema.min(1, "Vous devez en choisir un"),
        otherwise: (schema) => schema.notRequired()
    }),

    inspirationAppMobile: Yup.string().when("designMobile", {
        is: "noMob",
        then: (schema) => schema.required("Vous devez remplir le champs"),
        otherwise: (schema) => schema.notRequired()
    }),

    functionalityMobile: Yup.array().min(1, "Vous devez en choisir un"),
    otherFunctionalityMobile: Yup.string().when("functionalityMobile", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Vous devez présiser l'autre fonctionnalité"),
        otherwise: (schema) => schema.notRequired()
    }),

    otherDataManageMobile: Yup.string().when("dataManageMobile", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Vous devez préciser l'autre gestion de donnée"),
        otherwise: (schema) => schema.notRequired()
    }),

    delayMvpMobile: Yup.array().min(1, "Vous devez en choisir un"),
})

export default function CreationMobileForm() {

    const route = useRouter()
    const { values, setValues } = useFormStore()

    return (
        <Formik
            enableReinitialize
            initialValues={values}
            validationSchema={schema}
            onSubmit={async (formValues, { resetForm, setSubmitting }) => {
                try {
                    console.log("Valeurs soumises:", formValues)
                    setValues(formValues)
                    resetForm()
                    route.push("/Contact")
                } catch (error) {
                    console.error("Erreur d'envoi", error)
                } finally {
                    setSubmitting(false)
                }
            }}
        >
            {({ values, isSubmitting }) => (
                <Form className="flex justify-center w-full ">
                    <div className="flex flex-col gap-8 bg-white text-gray-700 p-6 md:p-10 w-4xl rounded-lg shadow-2xl">
                        <div className="flex flex-col gap-4">
                            <h4>1. Objectif principal de l'application</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {ObjectiveMobileInf.map((items, i) => {
                                    const isOtherChecked = values.objectiveMobile.includes("autre");
                                    return (
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="checkbox"
                                                    name="objectiveMobile"
                                                    value={i === 5 ? "autre" : items}
                                                />
                                                <label>{items}</label>
                                            </div>
                                            {i === 5 && (
                                                <Field
                                                    type="text"
                                                    name="otherObjectiveMobile"
                                                    placeholder="Précisez les autres objectifs"
                                                    disabled={!isOtherChecked}
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                />
                                            )}
                                        </div>
                                    )
                                })}
                                <ErrorMessage
                                    name="objectiveMobile"
                                    component="div"
                                    className="error-message" />
                                <ErrorMessage
                                    name="otherObjectiveMobile"
                                    component="div"
                                    className="error-message" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>2. Plateformes cibles</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {PlateformMobileInf.map((items, i) => {
                                    const isOtherChecked = values.plateformMobile.includes("autre");
                                    return (
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="checkbox"
                                                    name="plateformMobile"
                                                    value={i === 2 ? "autre" : items}
                                                />
                                                <label>{items}</label>
                                            </div>
                                            {i === 2 && (
                                                <Field
                                                    type="text"
                                                    name="otherPlateformMobile"
                                                    placeholder="Précisez les autres plateformes"
                                                    disabled={!isOtherChecked}
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                />
                                            )}
                                        </div>
                                    )
                                })}
                                <ErrorMessage
                                    name="plateformMobile"
                                    component="div"
                                    className="error-message" />
                                <ErrorMessage
                                    name="otherPlateformMobile"
                                    component="div"
                                    className="error-message" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>3. Design & Identité visuelle</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                <p>Disposez-vous d'une charte graphique ?</p>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2">
                                        <Field
                                            type="radio"
                                            name="designMobile"
                                            value="Oui (je peux la fournir)"
                                        />
                                        <label>Oui (je peux la fournir)</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <Field
                                            type="radio"
                                            name="designMobile"
                                            value="Non (j'aimerais en créer une)"
                                        />
                                        <label>Non (j'aimerais en créer une)</label>
                                    </div>
                                </div>
                                <p>Style visuel préféré:</p>
                                <div className="flex flex-col gap-2">
                                    {DesignMobileInf.map((items, i) => (
                                        <div key={i} className="flex gap-4">
                                            <Field
                                                type="checkbox"
                                                name="designStyleMobile"
                                                disabled={values.designMobile !== "Non (j'aimerais en créer une)"}
                                                value={items}
                                            />
                                            <label>{items}</label>
                                        </div>
                                    ))}
                                    <ErrorMessage
                                        name="designStyleMobile"
                                        component="div"
                                        className="error-message" />

                                    <p>Application d'inspiration</p>
                                    <Field
                                        as="textarea"
                                        name="inspirationAppMobile"
                                        rows={5}
                                        placeholder="Votre inspiration"
                                        disabled={values.designMobile !== "Non (j'aimerais en créer une)"}
                                        className={`${values.designMobile !== "Non (j'aimerais en créer une)" ? '!border !border-gray-400' : ''}`}
                                    />
                                    <ErrorMessage
                                        name="inspirationAppMobile"
                                        component="div"
                                        className="error-message" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>4. Fonctionnalités clés</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {FunctionalityMobileInf.map((items, i) => {
                                    const isOtherChecked = values.functionalityMobile.includes("autre");
                                    return (
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="checkbox"
                                                    name="functionalityMobile"
                                                    value={i === 9 ? "autre" : items}
                                                />
                                                <label>{items}</label>
                                            </div>
                                            {i === 9 && (
                                                <Field
                                                    type="text"
                                                    name="otherFunctionalityMobile"
                                                    placeholder="Précisez les autres objectifs"
                                                    disabled={!isOtherChecked}
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                />
                                            )}
                                        </div>
                                    )
                                })}
                                <ErrorMessage
                                    name="functionalityMobile"
                                    component="div"
                                    className="error-message" />
                                <ErrorMessage
                                    name="otherFunctionalityMobile"
                                    component="div"
                                    className="error-message" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>5. Contenu & données</h4>
                            <div className="grid grid-cols-2">
                                <div className="flex flex-col gap-2 pl-4">
                                    <p>Contenu de l'application :</p>
                                    {ApkContentMobileInf.map((items, i) => (
                                        <div key={i} className="flex gap-4">
                                            <Field
                                                type="radio"
                                                name="apkContentMobile"
                                                value={items}
                                            />
                                            <label>{items}</label>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p>Gestion des données :</p>
                                    {DataManageMobileInf.map((items, i) => {
                                        const isOtherChecked = values.dataManageMobile.includes("autre");
                                        return (
                                            <div key={i} className="flex flex-col gap-2">
                                                <div className="flex gap-4">
                                                    <Field
                                                        type="radio"
                                                        name="dataManageMobile"
                                                        value={items}
                                                    />
                                                    <label>{items}</label>
                                                </div>
                                                {i === 2 && (
                                                    <Field
                                                        type="text"
                                                        name="otherDataManageMobile"
                                                        placeholder="Veulliez préciser les autres gestions de donnée"
                                                        disabled={!isOtherChecked}
                                                        className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                    />
                                                )}
                                            </div>
                                        )
                                    })}
                                    <ErrorMessage
                                        name="dataManageMobile"
                                        component="div"
                                        className="error-message" />
                                    <ErrorMessage
                                        name="otherDataManageMobile"
                                        component="div"
                                        className="error-message" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>6. Maintenance & évolution</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                <p>Souhaitez-vous un suivi après livraison ?</p>
                                {MaintainMobileInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="radio"
                                            name="maintainMobile"
                                            value={items}
                                        />
                                        <label>{items}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>7. Budget & délais</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                <p>Budget approximatif</p>
                                {BudgetMobileInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="radio"
                                            name="budgetMobile"
                                            value={items}
                                        />
                                        <label>{items}</label>
                                    </div>
                                ))}

                                <p>Délais souhaités pour la première version (MVP)</p>
                                {DelayMVPMobileInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="checkbox"
                                            name="delayMvpMobile"
                                            value={items}
                                        />
                                        <label>{items}</label>
                                    </div>
                                ))}
                                <ErrorMessage
                                    name="delayMvpMobile"
                                    component="div"
                                    className="error-message" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>8. Technologies préférées (facultatif)</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {TechMobileInf.map((items, i) => {
                                    const isOtherChecked = values.techMobile.includes("autre");
                                    return (
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="checkbox"
                                                    name="techMobile"
                                                    value={i === 2 ? "autre" : items}
                                                />
                                                <label>{items}</label>
                                            </div>
                                            {i === 4 && (
                                                <Field
                                                    type="text"
                                                    name="otherTechMobile"
                                                    placeholder="Veulliez préciser les autres technologies"
                                                    disabled={!isOtherChecked}
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                />
                                            )}
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