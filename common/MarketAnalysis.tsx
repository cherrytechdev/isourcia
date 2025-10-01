'use client'

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"
import { useRouter } from "next/navigation";
import { MarketMainObjInf,
        MarketExpSearchInf,
        MarketContentInf,
        MarketMissionDelayInf,
        MarketMailFreqInf,
        MarketContactBaseInf,
        MarketBudgetInf,
        MarketTimelineInf,
        MarketOptionCompInf,
        MarketTechToolsInf
 } from "@/constant";

const schema = Yup.object().shape({
    marketMainObj: Yup.array().min(1, "Veuillez en choisir un"),
    otherMarketMainObj: Yup.string().when("marketMainObj", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Précisez les autres objectifs"),
        otherwise: (schema) => schema.notRequired()
    }),

    marketExpSearch: Yup.array().min(1, "Veuillez en choisir un"),
    otherMarketExpSearch: Yup.string().when("marketExpSearch", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Précisez les autres objectifs"),
        otherwise: (schema) => schema.notRequired()
    }),

    marketOptionComp: Yup.array().min(1, "Veuillez en choisir un"),
    otherMarketOptionComp: Yup.string().when("marketOptionComp", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Précisez les autres objectifs"),
        otherwise: (schema) => schema.notRequired()
    }),

    marketTechTools: Yup.array().min(1, "Veuillez en choisir un"),
    otherMarketTechTools: Yup.string().when("marketTechTools", {
        is: (val: string[]) => val?.includes("autre"),
        then: (schema) => schema.required("Précisez les autres objectifs"),
        otherwise: (schema) => schema.notRequired()
    }),
})

export default function MarketAnalysis() {

    const route = useRouter()

    return (
        <Formik
            initialValues={{
                marketMainObj: [] as string[],
                otherMarketMainObj: "",
                marketExpSearch: [] as string[],
                otherMarketExpSearch: "",
                marketContent: "Oui, j'ai déjà mes textes et visuels",
                marketMissionDelay: "Ponctuelle (1 campagne)",
                marketDateWish: "",
                marketMailFreq: "Ponctuelle",
                marketContactBase: "< 1000",
                marketBudget: "< 500 €",
                marketTimeline: "Urgent (moins de 2 semaines)",
                marketOptionComp: [] as string[],
                otherMarketOptionComp: "",
                marketTechTools: [] as string[],
                otherMarketTechTools: ""
            }}
            validationSchema={schema}
                onSubmit={async(values, {resetForm, setSubmitting}) => {
                    try{
                        console.log(values)
                        resetForm()
                    }catch(error){
                        console.log("Erreur d'envoie :", error)
                    }finally{
                        setSubmitting(false)
                        route.push("pages/Contact")
                    }
                }}
        >
            {({ values, isSubmitting }) =>
                <Form className="flex justify-center shadow-2xl w-full mt-8">
                    <div className="flex flex-col gap-8 bg-white text-gray-700 p-10 w-4xl rounded-lg">
                        <div className="flex flex-col gap-4">
                            <h4>1. Objectif principal</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {MarketMainObjInf.map((items, i) => {
                                    const isOtherChecked = values.marketMainObj.includes("autre")
                                    return(
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="checkbox"
                                                    name="marketMainObj"
                                                    value={ i === 4 ? "autre" : items}
                                                    />
                                                <label>{items}</label>
                                            </div>
                                            { i === 4 && (
                                                <Field
                                                    type="text"
                                                    name="otherMarketMainObj"
                                                    placeholder="Précisez les autres objectifs"
                                                    disabled={!isOtherChecked}
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                    />
                                            )}
                                        </div>
                                )})}
                                <ErrorMessage 
                                    name="marketMainObj" 
                                    component="div" 
                                    className="error-message"/>
                                <ErrorMessage 
                                    name="otherMarketMainObj" 
                                    component="div" 
                                    className="error-message"/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>2. Canaux & Expertises recherchées</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {MarketExpSearchInf.map((items, i) => {
                                    const isOtherChecked = values.marketExpSearch.includes("autre")
                                    return(
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="checkbox"
                                                    name="marketExpSearch"
                                                    value={ i === 6 ? "autre" : items}
                                                    />
                                                <label>{items}</label>
                                            </div>
                                            { i === 6 && (
                                                <Field
                                                    type="text"
                                                    name="otherMarketExpSearch"
                                                    placeholder="Précisez les autres expertises recherchées"
                                                    disabled={!isOtherChecked}
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                    />
                                            )}
                                        </div>
                                )})}
                                <ErrorMessage 
                                    name="marketExpSearch" 
                                    component="div" 
                                    className="error-message"/>
                                <ErrorMessage 
                                    name="otherMarketExpSearch" 
                                    component="div" 
                                    className="error-message"/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>3. Contenu disponible</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {MarketContentInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="radio"
                                            name="marketContent"
                                            value={items}
                                            />
                                        <label>{items}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>4. Détails de la campagne</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                <div className="flex flex-col gap-2">
                                    <p>Date de lancement souhaitée</p>
                                    <Field
                                        type="date"
                                        name="marketDateWish"
                                        />
                                    <ErrorMessage 
                                        name="marketDateWish" 
                                        component="div" 
                                        className="error-message"/>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p>Durée de la mission</p>
                                        {MarketMissionDelayInf.map((items, i) => (
                                            <div key={i} className="flex gap-4">
                                                <Field
                                                    type="radio"
                                                    name="marketMissionDelay"
                                                    value={items}
                                                    />
                                                <label>{items}</label>
                                            </div>
                                        ))}
                                </div>


                                <div className="flex flex-col gap-2">
                                    <p>Fréquence des envois emailing</p>
                                        {MarketMailFreqInf.map((items, i) => (
                                            <div key={i} className="flex gap-4">
                                                <Field
                                                    type="radio"
                                                    name="marketMailFreq"
                                                    value={items}
                                                    />
                                                <label>{items}</label>
                                            </div>
                                        ))}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p>Taille de votre base de contacts</p>
                                        {MarketContactBaseInf.map((items, i) => (
                                            <div key={i} className="flex gap-4">
                                                <Field
                                                    type="radio"
                                                    name="marketContactBase"
                                                    value={items}
                                                    />
                                                <label>{items}</label>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>5. Budget & délais</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                <p>Budget approximatif</p>
                                {MarketBudgetInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="radio"
                                            name="marketBudget"
                                            value={items}
                                            />
                                        <label>{items}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-2 pl-4">
                                <p>Délais souhaités pour mise en place</p>
                                {MarketTimelineInf.map((items, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Field
                                            type="radio"
                                            name="marketTimeline"
                                            value={items}
                                            />
                                        <label>{items}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>6. Options complémentaires</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {MarketOptionCompInf.map((items, i) => {
                                    const isOtherChecked = values.marketOptionComp.includes("autre")
                                    return(
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="checkbox"
                                                    name="marketOptionComp"
                                                    value={ i === 6 ? "autre" : items}
                                                    />
                                                <label>{items}</label>
                                            </div>
                                            { i === 6 && (
                                                <Field
                                                    type="text"
                                                    name="otherMarketOptionComp"
                                                    placeholder="Précisez les autres options complémentaires"
                                                    disabled={!isOtherChecked}
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                    />
                                            )}
                                        </div>
                                )})}
                                <ErrorMessage 
                                    name="marketOptionComp" 
                                    component="div" 
                                    className="error-message"/>
                                <ErrorMessage 
                                    name="otherMarketOptionComp" 
                                    component="div" 
                                    className="error-message"/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>7. Technologies & outils préférés (facultatif)</h4>
                            <div className="flex flex-col gap-2 pl-4">
                                {MarketTechToolsInf.map((items, i) => {
                                    const isOtherChecked = values.marketTechTools.includes("autre")
                                    return(
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex gap-4">
                                                <Field
                                                    type="checkbox"
                                                    name="marketTechTools"
                                                    value={ i === 7 ? "autre" : items}
                                                    />
                                                <label>{items}</label>
                                            </div>
                                            { i === 7 && (
                                                <Field
                                                    type="text"
                                                    name="otherMarketTechTools"
                                                    placeholder="Précisez les autres technologies"
                                                    disabled={!isOtherChecked}
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                    />
                                            )}
                                        </div>
                                )})}
                                <ErrorMessage 
                                    name="marketTechTools" 
                                    component="div" 
                                    className="error-message"/>
                                <ErrorMessage 
                                    name="otherMarketTechTools" 
                                    component="div" 
                                    className="error-message"/>
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
            }
        </Formik>
    )
}