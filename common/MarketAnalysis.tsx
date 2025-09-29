'use client'

import { Field, Form, Formik } from "formik";
import { MarketMainObjInf,
        MarketExpSearchInf,
        MarketContentInf,
        MarketMissionDelayInf,
        MarketMailFreqInf,
        MarketContactBaseInf,
        MarketTimelineInf,
        MarketOptionCompInf
 } from "@/constant";


export default function MarketAnalysis() {
    return (
        <Formik
            initialValues={{
                marketMainObj: [] as string[],
                otherMarketMainObj: "",
                marketExpSearch: [] as string[],
                otherMarketExpSearch: "",
                marketContent: "yesContent",
                marketMissionDelay: "ponctual"
            }}
            validationSchema=""
            onSubmit={() => { }}
        >
            {({ values }) =>
                <Form className="flex justify-center shadow-2xl w-full mt-8">
                    <div className="flex flex-col gap-8 bg-white text-gray-700 p-10 w-4xl rounded-lg">
                        <div>
                            <h4>1. Objectif principal</h4>
                            <div>
                                {MarketMainObjInf.map((items, i) => {
                                    const isOtherChecked = values.marketMainObj.includes("autre")
                                    return(
                                        <div key={i}>
                                            <div>
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
                                                    disabled={!isOtherChecked}
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                    />
                                            )}
                                        </div>
                                )})}
                            </div>
                        </div>

                        <div>
                            <h4>2. Canaux & Expertises recherchées</h4>
                            <div>
                                {MarketExpSearchInf.map((items, i) => {
                                    const isOtherChecked = values.marketExpSearch.includes("autre")
                                    return(
                                        <div key={i}>
                                            <div>
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
                                                    disabled={!isOtherChecked}
                                                    className={`${!isOtherChecked ? '!border !border-gray-500' : ''}`}
                                                    />
                                            )}
                                        </div>
                                )})}
                            </div>
                        </div>

                        <div>
                            <h4>3. Contenu disponible</h4>
                            <div>
                                {MarketContentInf.map((items, i) => (
                                    <div key={i}>
                                        <Field
                                            type="radio"
                                            name="marketContent"
                                            value={items.name}
                                            />
                                        <label>{items.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4>4. Détails de la campagne</h4>
                            <div>
                                <div>
                                    <label>Date de lancement souhaitée</label>
                                    <Field
                                        type="date"
                                        name="marketDateWish"
                                        />
                                </div>

                                <div>
                                    <p>Durée de la mission</p>
                                    <div>
                                        {MarketMissionDelayInf.map((items, i) => (
                                            <div>
                                                <Field
                                                    type="radio"
                                                    name="marketMissionDelay"
                                                    value={items.name}
                                                    />
                                                <label>{items.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            }
        </Formik>
    )
}