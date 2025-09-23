'use client'

import { CompetenciesInf, LanguageInf } from "@/constant"
import { Formik, Form, Field, FieldArray } from "formik"
import * as Yup from "yup"


const schema = Yup.object().shape({
    date: Yup.string().required("La date de début est requise"),
    contratDuration: Yup.string().required("Le contrat est requis"),
    travelDuration: Yup.string().required("La durée du travail est requise")
})

export default function DetailForm() {
    return (
        <Formik
            initialValues={{ 
                date: "",
                contratDuration: "",
                travelDuration: "",
                yearExperiences: "",
                competencies: [] as string[], 
                language: [] as string [] }}
            onSubmit={(values) => { }}
        >
            {({values}) => (
                <Form>
                    <div>
                        <label>Date de début</label>
                        <Field type="date" name="date" />
                    </div>
                    <div>
                        <label>Durée du contrat</label>
                        <Field type="text" name="contratDuration" placeholder="Cliquer pour configurer" readOnly />
                    </div>
                    <div>
                        <label>Temps de travail</label>
                        <Field type="text" name="travelDuration" placeholder="Cliquer pour configurer" readOnly />
                    </div>
                    <div>
                        <label>Année d'expérience</label>
                        <Field type="text" name="yearExperiences" />
                    </div>
                    <div>
                        <p>
                            Compétences requises
                        </p>
                        <div className="grid grid-cols-2">
                            <div>
                                <FieldArray
                                    name="competencies"
                                    render={(arrayHelpers) => (
                                        <div className="flex flex-wrap gap-2">
                                            {CompetenciesInf.map((item, i) => {
                                                const active = values.competencies.includes(item);
                                                return (
                                                    <div
                                                        key={i}
                                                        onClick={() =>
                                                            active
                                                                ? arrayHelpers.remove(values.competencies.indexOf(item))
                                                                : arrayHelpers.push(item)
                                                        }
                                                        className={`cursor-pointer rounded-xl px-4 py-2 ${active ? "border border-white bg-[#040A18]" : "bg-[#0A1027] text-white"
                                                            }`}
                                                    >
                                                        {item}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                />
                            </div>
                            <div>
                                <Field name="otherComp" placeholder="Autres" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Langues</p>
                        <FieldArray
                                    name="language"
                                    render={(arrayHelpers) => (
                                        <div className="flex flex-wrap gap-2">
                                            {LanguageInf.map((item, i) => {
                                                const active = values.language.includes(item);
                                                return (
                                                    <div
                                                        key={i}
                                                        onClick={() =>
                                                            active
                                                                ? arrayHelpers.remove(values.language.indexOf(item))
                                                                : arrayHelpers.push(item)
                                                        }
                                                        className={`cursor-pointer rounded-xl px-4 py-2 ${active ? "border border-white bg-[#040A18]" : "bg-[#0A1027] text-white"
                                                            }`}
                                                    >
                                                        {item}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                />
                    </div>
                    <div>
                        <label>Niveau d'étude</label>
                        <Field type="text" name="level"></Field>
                    </div>
                    <button>Suivant</button>
                </Form>
            )}
        </Formik>
    )
}