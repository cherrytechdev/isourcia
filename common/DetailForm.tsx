'use client'

import { CompetenciesInf, LanguageInf, DateContrat, TimeTravelInf } from "@/constant"
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik"
import { useState } from "react"
import * as Yup from "yup"

interface FormValues {
  date: string
  contratDuration: string
  travelDuration: string
  travelTime: string
  yearExperiences: string
  competencies: string[]
  otherComp: string
  language: string[]
  otherLang: string
  level: string
  message: string
  contractUnits: Record<string, string>
  day: Record<string, string>
  night: Record<string, string>
}

const schema = Yup.object().shape({
  date: Yup.string().required("La date de début est requise"),
  contratDuration: Yup.string().required("Le contrat est requis"),
  travelDuration: Yup.string().required("La durée du travail est requise"),
  level: Yup.string().required("Le niveau d'étude est requis"),

  competencies: Yup.array()
    .of(Yup.string())
    .test(
      "at-least-one-competence",
      "Veuillez choisir au moins une compétence ou remplir le champ 'Autres'",
      function (competencies) {
        const { otherComp } = this.parent;
        
        // Ne pas valider si le formulaire vient d'être initialisé
        if (this.parent.date === "" && this.parent.contratDuration === "") {
          return true;
        }
        
        // Validation : au moins une compétence OU autre compétence remplie
        const hasCompetencies = competencies && competencies.length > 0;
        const hasOtherComp = otherComp && otherComp.trim() !== "";
        
        return hasCompetencies || hasOtherComp;
      }
    ),
  otherComp: Yup.string().nullable(),

  language: Yup.array()
    .of(Yup.string())
    .test(
      "at-least-one-language",
      "Veuillez choisir au moins une langue ou remplir le champ 'Autres'",
      function (language) {
        const { otherLang } = this.parent;
        
        // Ne pas valider si le formulaire vient d'être initialisé
        if (this.parent.date === "" && this.parent.contratDuration === "") {
          return true;
        }
        
        // Validation : au moins une langue OU autre langue remplie
        const hasLanguage = language && language.length > 0;
        const hasOtherLang = otherLang && otherLang.trim() !== "";
        
        return hasLanguage || hasOtherLang;
      }
    ),
  otherLang: Yup.string().nullable(),
});

export default function DetailForm() {
  const [openCt, setOpenCt] = useState(false)
  const [openTm, setOpenTm] = useState(false)
  const [activeForm, setActiveForm] = useState<"day" | "night">("day")

  return (
    <Formik<FormValues>
      initialValues={{
        date: "",
        contratDuration: "",
        travelDuration: "",
        travelTime: "",
        yearExperiences: "",
        competencies: [],
        otherComp: "",
        language: [],
        otherLang: "",
        level: "",
        message: "",
        contractUnits: {},
        day: {},
        night: {},
      }}
      validationSchema={schema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          console.log("Valeurs soumises:", values)
          resetForm()
        } catch (error) {
          console.error("Erreur d'envoi", error)
        } finally {
          setSubmitting(false)
        }
      }}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className="space-y-4">

          {/* Date de début */}
          <div className="flex flex-col">
            <label htmlFor="date">Date de début</label>
            <Field 
              type="date" 
              name="date" 
              id="date"
              className="border p-2 rounded"
            />
            <ErrorMessage name="date" component="div" className="text-red-500 text-sm"/>
          </div>

          {/* Durée du contrat */}
          <div className="flex flex-col relative">
            <label htmlFor="contratDuration">Durée du contrat</label>
            <Field
              type="text"
              name="contratDuration"
              id="contratDuration"
              placeholder="Cliquer pour configurer"
              className="cursor-pointer border p-2 rounded"
              readOnly
              onClick={() => setOpenCt(true)}
            />
            <ErrorMessage name="contratDuration" component="div" className="text-red-500 text-sm"/>
            {openCt && (
              <div className="bg-white text-[#040A18] p-4 border rounded shadow-md absolute z-10 top-full mt-2 w-full max-w-md">
                <div className="flex justify-between mb-2">
                  <p className="font-semibold">Durée du contrat</p>
                  <button 
                    type="button"
                    className="cursor-pointer font-bold"
                    onClick={() => setOpenCt(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="flex gap-4 flex-wrap">
                  {DateContrat.map((unit, i) => (
                    <div key={i} className="flex flex-col">
                      <label htmlFor={`contractUnit-${unit}`} className="text-sm">{unit}</label>
                      <input
                        type="number"
                        id={`contractUnit-${unit}`}
                        min={1}
                        className="border p-1 rounded w-20"
                        value={values.contractUnits[unit] || ""}
                        onChange={(e) => setFieldValue(`contractUnits.${unit}`, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => {
                    const selected = DateContrat.map(unit => {
                      const val = values.contractUnits[unit]
                      return val ? `${val} ${unit}` : null
                    }).filter(Boolean)
                    setFieldValue("contratDuration", selected.join(" "))
                    setOpenCt(false)
                  }}
                >
                  Valider
                </button>
              </div>
            )}
          </div>

          {/* Temps de travail */}
          <div className="flex flex-col relative">
            <label htmlFor="travelDuration">Temps de travail</label>
            <Field
              type="text"
              name="travelDuration"
              id="travelDuration"
              placeholder="Cliquer pour configurer"
              className="cursor-pointer border p-2 rounded"
              readOnly
              onClick={() => setOpenTm(true)}
            />
            <ErrorMessage name="travelDuration" component="div" className="text-red-500 text-sm"/>
            {openTm && (
              <div className="bg-white text-[#040A18] p-4 border rounded shadow-md absolute z-10 top-full mt-2 w-full max-w-md">
                <div className="flex justify-between mb-2">
                  <p className="font-semibold">Temps de travail</p>
                  <button 
                    type="button"
                    className="cursor-pointer font-bold"
                    onClick={() => setOpenTm(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="flex gap-2 mb-2">
                  <button
                    type="button"
                    className={`cursor-pointer ${activeForm === "day" ? "font-bold underline" : ""}`}
                    onClick={() => setActiveForm("day")}
                  >
                    Jours
                  </button>
                  <button
                    type="button"
                    className={`cursor-pointer ${activeForm === "night" ? "font-bold underline" : ""}`}
                    onClick={() => setActiveForm("night")}
                  >
                    Nuits
                  </button>
                </div>
                <div className="flex gap-4 flex-wrap">
                  {TimeTravelInf.map((item, i) => {
                    const normalizedKey = item.toLowerCase().replace(/\s+/g, '_');
                    return (
                      <div key={i} className="flex flex-col">
                        <label htmlFor={`${activeForm}-${normalizedKey}`} className="text-sm">{item}</label>
                        <input
                          type="text"
                          id={`${activeForm}-${normalizedKey}`}
                          placeholder="ex: 1h 30"
                          className="border p-1 rounded w-24"
                          value={values[activeForm][normalizedKey] || ""}
                          onChange={(e) =>
                            setFieldValue(`${activeForm}.${normalizedKey}`, e.target.value)
                          }
                        />
                      </div>
                    )
                  })}
                </div>
                <button
                  type="button"
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => {
                    const dayTimes = TimeTravelInf.map(unit => {
                      const normalizedKey = unit.toLowerCase().replace(/\s+/g, '_');
                      const val = values.day[normalizedKey]
                      return val ? `${val} ${unit}` : null
                    }).filter(Boolean).join(", ")

                    const nightTimes = TimeTravelInf.map(unit => {
                      const normalizedKey = unit.toLowerCase().replace(/\s+/g, '_');
                      const val = values.night[normalizedKey]
                      return val ? `${val} ${unit}` : null
                    }).filter(Boolean).join(", ")

                    const result = [dayTimes, nightTimes].filter(Boolean).join(" | ")
                    setFieldValue("travelDuration", result)
                    setOpenTm(false)
                  }}
                >
                  Valider
                </button>
              </div>
            )}
          </div>

          {/* Année d'expérience */}
          <div className="flex flex-col">
            <label htmlFor="yearExperiences">Année d'expérience</label>
            <Field 
              type="text" 
              name="yearExperiences" 
              id="yearExperiences"
              className="border p-2 rounded"
            />
            <ErrorMessage name="yearExperiences" component="div" className="text-red-500 text-sm"/>
          </div>

          {/* Compétences */}
          <div>
            <p className="font-semibold mb-2">Compétences requises</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FieldArray name="competencies" render={arrayHelpers => (
                <div className="flex flex-wrap gap-2">
                  {CompetenciesInf.map((item, i) => {
                    const active = values.competencies.includes(item)
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() =>
                          active
                            ? arrayHelpers.remove(values.competencies.indexOf(item))
                            : arrayHelpers.push(item)
                        }
                        className={`cursor-pointer rounded-xl px-4 py-2 border ${
                          active 
                            ? "border-white bg-[#040A18] text-white" 
                            : "bg-[#0A1027] text-white border-gray-300"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  })}
                </div>
              )}/>
              <div className="flex flex-col">
                <label htmlFor="otherComp">Autres compétences</label>
                <Field 
                  as="textarea" 
                  name="otherComp" 
                  id="otherComp"
                  placeholder="Autres compétences non listées" 
                  className="border p-2 rounded resize-none"
                  rows={3}
                />
              </div>
            </div>
            <ErrorMessage name="competencies" component="div" className="text-red-500 text-sm"/>
          </div>

          {/* Langues */}
          <div>
            <p className="font-semibold mb-2">Langues</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FieldArray name="language" render={arrayHelpers => (
                <div className="flex flex-wrap gap-2">
                  {LanguageInf.map((item, i) => {
                    const active = values.language.includes(item)
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() =>
                          active
                            ? arrayHelpers.remove(values.language.indexOf(item))
                            : arrayHelpers.push(item)
                        }
                        className={`cursor-pointer rounded-xl px-4 py-2 border ${
                          active 
                            ? "border-white bg-[#040A18] text-white" 
                            : "bg-[#0A1027] text-white border-gray-300"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  })}
                </div>
              )}/>
              <div className="flex flex-col">
                <label htmlFor="otherLang">Autres langues</label>
                <Field 
                  as="textarea" 
                  name="otherLang" 
                  id="otherLang"
                  placeholder="Autres langues non listées" 
                  className="border p-2 rounded resize-none"
                  rows={3}
                />
              </div>
            </div>
            <ErrorMessage name="language" component="div" className="text-red-500 text-sm"/>
          </div>

          {/* Niveau d'étude */}
          <div className="flex flex-col">
            <label htmlFor="level">Niveau d'étude</label>
            <Field 
              type="text" 
              name="level" 
              id="level"
              className="border p-2 rounded"
            />
            <ErrorMessage name="level" component="div" className="text-red-500 text-sm"/>
          </div>

          {/* Commentaire */}
          <div className="flex flex-col">
            <label htmlFor="message">Commentaire supplémentaire</label>
            <Field 
              as="textarea" 
              name="message" 
              id="message"
              rows={5} 
              className="border p-2 rounded resize-none"
              placeholder="Ajoutez tout commentaire supplémentaire..."
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:bg-gray-400"
          >
            {isSubmitting ? "Envoi..." : "Suivant"}
          </button>
        </Form>
      )}
    </Formik>
  )
}