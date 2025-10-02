'use client'

import { LanguageInf, DateContrat, TimeTravelInf, CompetenciesWebInf } from "@/constant"
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik"
import { useState } from "react"
import { useRouter } from "next/navigation"
import * as Yup from "yup"

interface FormValues {
  date: string
  contratDuration: string
  travelDuration: string
  
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
  const route = useRouter()

  return (
    <Formik<FormValues>
      initialValues={{
        date: "",
        contratDuration: "",
        travelDuration: "",
        
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
          route.push("pages/Contact")
        }
      }}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className="flex justify-center w-full shadow-2xl mt-8">

          <div className="flex flex-col gap-8 bg-white text-gray-700 p-10 w-4xl rounded-lg">
            {/* Date de début */}
            <div className="flex flex-col gap-2">
              <label htmlFor="date">Date de début</label>
              <Field 
                type="date" 
                name="date" 
                id="date"
              />
              <ErrorMessage 
                name="date" 
                component="div" 
                className="error-message"/>
            </div>

            {/* Durée du contrat */}
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="contratDuration">Durée du contrat</label>
              <Field
                type="text"
                name="contratDuration"
                id="contratDuration"
                placeholder="Cliquer pour configurer"
                className="cursor-pointer"
                readOnly
                onClick={() => setOpenCt(true)}
              />
              <ErrorMessage 
                name="contratDuration" 
                component="div" 
                className="error-message"/>
              {openCt && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  {/* Backdrop */}
                  <div 
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm" 
                    onClick={() => setOpenCt(false)} // optionnel si tu veux fermer en cliquant dehors
                  ></div>

                  {/* Popup */}
                  <div className="relative z-10 flex flex-col gap-2 bg-white text-gray-700 p-4 rounded-md shadow-lg w-[40%] ">
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

                    <div className="xl:flex gap-4">
                      {DateContrat.map((unit, i) => (
                        <div key={i} className="flex flex-col">
                          <label htmlFor={`contractUnit-${unit}`} className="text-center text-sm">{unit}</label>
                          <input
                            type="number"
                            id={`contractUnit-${unit}`}
                            min={1}
                            className="border p-1 rounded-md w-full"
                            value={values.contractUnits[unit] || ""}
                            onChange={(e) => setFieldValue(`contractUnits.${unit}`, e.target.value)}
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="mt-2 bg-[#60A5FA] text-white px-3 py-1 w-fit rounded-md"
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
                </div>
              )}

            </div>

            {/* Temps de travail */}
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="travelDuration">Temps de travail</label>
              <Field
                type="text"
                name="travelDuration"
                id="travelDuration"
                placeholder="Cliquer pour configurer"
                className="cursor-pointer"
                readOnly
                onClick={() => setOpenTm(true)}
              />
              <ErrorMessage 
                name="travelDuration" 
                component="div" 
                className="error-message"/>
              {openTm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  {/* Backdrop */}
                  <div
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                    // ❌ si tu veux forcer uniquement la fermeture avec "×" ou "Valider"
                    // enlève le onClick ci-dessous
                    onClick={() => setOpenTm(false)}
                  ></div>

                  {/* Popup */}
                  <div className={`relative z-10 flex flex-col gap-2 text-gray-700 p-4 rounded-md shadow-lg w-[50%] transform transition-all
                    ${activeForm === "day" ? "bg-white text-[#040A18]" : "bg-[#090F25] text-white"}`}>

                    {/* Header */}
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

                    {/* Toggle jour/nuit */}
                    <div className={`rounded-md bg-blue-500 w-fit flex gap-2 mb-2 
                      ${activeForm === "night" ? 'border border-white' : ''}`}>
                      <button
                        type="button"
                        className={`cursor-pointer transition-all 
                      ${activeForm === "day" ? "shadow-lg rounded-l-md rounded-r-0 bg-[#040A18] p-2 font-bold text-white" : "text-white px-2"}`}
                        onClick={() => setActiveForm("day")}
                      >
                        ☀️ Jours
                      </button>
                      <button
                        type="button"
                        className={`cursor-pointer transition-all 
                      ${activeForm === "night" ? "shadow-lg rounded-r-md rounded-l-0 bg-[#040A18] p-2 font-bold text-white" : "text-white px-2"}`}
                        onClick={() => setActiveForm("night")}
                      >
                        🌒 Nuits
                      </button>
                    </div>

                    {/* Champs inputs */}
                    <div className="xl:flex gap-4">
                      {TimeTravelInf.map((item, i) => {
                        const normalizedKey = item.toLowerCase().replace(/\s+/g, '_');
                        return (
                          <div key={i} className="flex flex-col items-center gap-2">
                            <label htmlFor={`${activeForm}-${normalizedKey}`} className="text-sm">{item}</label>
                            <input
                              type="text"
                              id={`${activeForm}-${normalizedKey}`}
                              placeholder="ex: 1h 30"
                              className="border p-1 rounded-md w-full"
                              value={values[activeForm][normalizedKey] || ""}
                              onChange={(e) =>
                                setFieldValue(`${activeForm}.${normalizedKey}`, e.target.value)
                              }
                            />
                          </div>
                        )
                      })}
                    </div>

                    {/* Bouton valider */}
                    <button
                      type="button"
                      className="mt-2 w-fit bg-[#60A5FA] text-white px-3 py-1 rounded-md"
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
                </div>
              )}

            </div>

            {/* Année d'expérience */}
            <div className="flex flex-col gap-2">
              <label htmlFor="yearExperiences">Année d'expérience</label>
              <Field 
                type="text" 
                name="yearExperiences" 
                id="yearExperiences"
                placeholder="Veulliez préciser les années d'expériences"
              />
              <ErrorMessage 
                name="yearExperiences" 
                component="div" 
                className="error-message"/>
            </div>

            {/* Compétences */}
            <div>
              <p className="font-semibold mb-2">Compétences requises</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldArray name="competencies" render={arrayHelpers => (
                  <div className="flex flex-wrap gap-2">
                    {CompetenciesWebInf.map((item, i) => {
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
                              ? "bg-[#0A1027] text-white" 
                              : "bg-blue-500 text-white"
                          }`}
                        >
                          {item}
                        </button>
                      )
                    })}
                  </div>
                )}/>
                <div className="flex flex-col gap-2">
                  <label htmlFor="otherComp">Autres compétences</label>
                  <Field 
                    as="textarea" 
                    name="otherComp" 
                    id="otherComp"
                    placeholder="Autres compétences non listées" 
                    rows={3}
                  />
                </div>
              </div>
              <ErrorMessage 
                name="competencies" 
                component="div" 
                className="error-message"/>
            </div>

            {/* Langues */}
            <div>
              <p className="font-semibold mb-2">Langues</p>
              <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4">
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
                          className={`cursor-pointer rounded-xl h-fit px-4 py-2 border ${
                            active 
                              ? "bg-[#0A1027] text-white" 
                              : "bg-blue-500 text-white"
                          }`}
                        >
                          {item}
                        </button>
                      )
                    })}
                  </div>
                )}/>
                <div className="flex flex-col gap-2">
                  <label htmlFor="otherLang">Autres langues</label>
                  <Field 
                    as="textarea" 
                    name="otherLang" 
                    id="otherLang"
                    placeholder="Autres langues non listées" 
                    rows={3}
                  />
                </div>
              </div>
              <ErrorMessage 
                name="language" 
                component="div" 
                className="error-message"/>
            </div>

            {/* Niveau d'étude */}
            <div className="flex flex-col gap-2">
              <label htmlFor="level">Niveau d'étude</label>
              <Field 
                type="text" 
                name="level" 
                id="level"
                placeholder="Veulliez préciser le niveau d'étude"
                className="border p-2 rounded-md focus:outline-blue-500"
              />
              <ErrorMessage 
                name="level" 
                component="div" 
                className="error-message"/>
            </div>

            {/* Commentaire */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Commentaire supplémentaire</label>
              <Field 
                as="textarea" 
                name="message" 
                id="message"
                rows={5} 
                className="border p-2 rounded-md resize-none focus:outline-blue-500"
                placeholder="Ajoutez tout commentaire supplémentaire..."
              />
            </div>

            <button
              type="submit" 
              disabled={isSubmitting} 
              className="bg-gradient-to-r from-[#040A18] to-[#0A1027] transition-all duration-500 hover:bg-gradient-to-l hover:from-[#040A18] hover:to-[#0A1027] text-white p-2 rounded-md"
            >
              {isSubmitting ? "Envoi..." : "Suivant"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}