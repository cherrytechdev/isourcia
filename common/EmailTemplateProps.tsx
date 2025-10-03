
import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text } from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  firstname: string;
  nPhone: string;
  mail: string;
  company: string;
  physicalAddress: string;
  contact: string[];


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
  day: string
  night: string
  ressourceRecrut: string
  service: string

  marketMainObj: string[];
  otherMarketMainObj: string;
  marketExpSearch: string[];
  otherMarketExpSearch: string;
  marketContent: string;
  marketMissionDelay: string;
  marketDateWish: string;
  marketMailFreq: string;
  marketContactBase: string;
  marketBudget: string;
  marketTimeline: string;
  marketOptionComp: string[];
  otherMarketOptionComp: string;
  marketTechTools: string[];
  otherMarketTechTools: string;
  ressource: string

  objectiveMobile: string[]
  otherObjectiveMobile: string
  plateformMobile: string[]
  otherPlateformMobile: string
  designMobile: string
  designStyleMobile: string[]
  inspirationAppMobile: string
  functionalityMobile: string[]
  otherFunctionalityMobile: string
  apkContentMobile: string
  dataManageMobile: string[]
  otherDataManageMobile: string
  maintainMobile: string
  budgetMobile: string
  delayMvpMobile: string[]
  techMobile: string[]
  otherTechMobile: string

  resourceExt: string[];
  otherResExt: string;
  dateStartExt: string;
  durationExt: string[];
  timeExt: string[];
  otherTimeExt: string;
  competenciesExt: string;
  experiencesExt: string[];
  languageExt: string[];
  otherLangExt: string;
  chooseDeg: string;
  yesInpExt: string;
  commentTxt: string;
  modalityExt: string[];
  facturationModExt: string[];
  maintenanceExt: string;
  budgetExt: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  firstname,
  nPhone,
  mail,
  company,
  physicalAddress,
  contact,

  date,
  contratDuration,
  travelDuration,
  yearExperiences,
  competencies,
  otherComp,
  language,
  otherLang,
  level,
  message,
  contractUnits,
  day,
  night,
  ressourceRecrut,
  service,

  ressource,
  marketMainObj,
  otherMarketMainObj,
  marketExpSearch,
  otherMarketExpSearch,
  marketContent,
  marketMissionDelay,
  marketDateWish,
  marketMailFreq,
  marketContactBase,
  marketBudget,
  marketTimeline,
  marketOptionComp,
  otherMarketOptionComp,
  marketTechTools,
  otherMarketTechTools,


  objectiveMobile,
  otherObjectiveMobile,
  plateformMobile,
  otherPlateformMobile,
  designMobile,
  designStyleMobile,
  inspirationAppMobile,
  functionalityMobile,
  otherFunctionalityMobile,
  apkContentMobile,
  dataManageMobile,
  otherDataManageMobile,
  maintainMobile,
  budgetMobile,
  delayMvpMobile,
  techMobile,
  otherTechMobile,

  resourceExt,
  otherResExt,
  dateStartExt,
  durationExt,
  timeExt,
  otherTimeExt,
  competenciesExt,
  experiencesExt,
  languageExt,
  otherLangExt,
  chooseDeg,
  yesInpExt,
  commentTxt,
  modalityExt,
  facturationModExt,
  maintenanceExt,
  budgetExt,
}) => {


  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de contact</Preview>
      <Body style={{ backgroundColor: '#ffffff', color: '#111827', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ backgroundColor: '#ffffff', padding: '20px' }}>
          <Heading style={{ fontSize: '20px', marginBottom: '10px' }}>
            Nouvelle demande de contact
          </Heading>

          <Text>Bonjour,</Text>
          <Text>Une personne a rempli le formulaire de contact avec les informations suivantes :</Text>

          <ul style={{ marginTop: '15px', marginBottom: '15px' }}>
            <li><strong>Nom :</strong> {name}</li>
            <li><strong>Prénom :</strong> {firstname}</li>
            <li><strong>Téléphone :</strong> {nPhone}</li>
            <li><strong>Email :</strong> {mail}</li>
            <li><strong>Société :</strong> {company}</li>
            <li><strong>Adresse :</strong> {physicalAddress}</li>
            <li><strong>Contact préféré :</strong> {contact && contact.length > 0 ? contact.join(", ") : "Non précisé"}</li>
          </ul>

          {ressource === "Ressource" &&
            <div>
              <h1 className="text-xl font-bold">{service}</h1>

              <p><strong>Ressource :</strong> {ressourceRecrut}</p>
              <p><strong>Date :</strong> {date}</p>
              <p><strong>Années d’expérience :</strong> {yearExperiences || "—"}</p>

              <div>
                <strong>Compétences :</strong>
                <ul className="list-disc ml-6">
                  {competencies}
                </ul>
              </div>

              <p><strong>Autre compétence :</strong> {otherComp || "—"}</p>

              <div>
                <strong>Langues :</strong>
                <ul className="list-disc ml-6">
                  {language}
                </ul>
              </div>

              <p><strong>Autre langue :</strong> {otherLang || "—"}</p>
              <p><strong>Niveau :</strong> {level || "—"}</p>
              <p><strong>Message :</strong> {message || "—"}</p>

              <div>
                <strong>Contrat (unités) :</strong>
                <ul className="bg-gray-100 p-2 rounded list-disc list-inside">
                  {Object.entries(contractUnits).map(([unit, value]) => (
                    value && (
                      <li key={unit}>
                        {unit} : {value}
                      </li>
                    )
                  ))}
                </ul>
              </div>


              <div>
                <strong>Travail de jour :</strong>
                <ul className="bg-gray-100 p-2 rounded list-disc list-inside">
                  {Object.entries(day).map(([key, value]) => (
                    value && (
                      <li key={key}>
                        {key.replace(/_/g, " ")} : {value}
                      </li>
                    )
                  ))}
                </ul>
              </div>

              <div>
                <strong>Travail de nuit :</strong>
                <ul className="bg-gray-100 p-2 rounded list-disc list-inside">
                  {Object.entries(night).map(([key, value]) => (
                    value && (
                      <li key={key}>
                        {key.replace(/_/g, " ")} : {value}
                      </li>
                    )
                  ))}
                </ul>
              </div>
            </div>
          }

          {ressource === "Marketing digital" &&
            <div>
              <div className="mb-4">
                <h1 className="text-xl font-bold">{service}</h1>
                <h2 className="text-xl font-semibold">1. Objectif principal</h2>
                <ul className="list-disc ml-6">
                  {marketMainObj.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {otherMarketMainObj && (
                  <p><strong>Autre :</strong> {otherMarketMainObj}</p>
                )}
              </div>


              <div className="mb-4">
                <h2 className="text-xl font-semibold">2. Canaux & Expertises</h2>
                <ul className="list-disc ml-6">
                  {marketExpSearch.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {otherMarketExpSearch && (
                  <p><strong>Autre :</strong> {otherMarketExpSearch}</p>
                )}
              </div>


              <p><strong>3. Contenu disponible :</strong> {marketContent}</p>


              <div className="mb-4">
                <h2 className="text-xl font-semibold">4. Détails de la campagne</h2>
                <p><strong>Date de lancement :</strong> {marketDateWish || "—"}</p>
                <p><strong>Durée de la mission :</strong> {marketMissionDelay}</p>
                <p><strong>Fréquence emailing :</strong> {marketMailFreq}</p>
                <p><strong>Taille base contacts :</strong> {marketContactBase}</p>
              </div>


              <div className="mb-4">
                <h2 className="text-xl font-semibold">5. Budget & délais</h2>
                <p><strong>Budget :</strong> {marketBudget}</p>
                <p><strong>Délais souhaités :</strong> {marketTimeline}</p>
              </div>


              <div className="mb-4">
                <h2 className="text-xl font-semibold">6. Options complémentaires</h2>
                <ul className="list-disc ml-6">
                  {marketOptionComp.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {otherMarketOptionComp && (
                  <p><strong>Autre :</strong> {otherMarketOptionComp}</p>
                )}
              </div>


              <div className="mb-4">
                <h2 className="text-xl font-semibold">7. Technologies & outils</h2>
                <ul className="list-disc ml-6">
                  {marketTechTools.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {otherMarketTechTools && (
                  <p><strong>Autre :</strong> {otherMarketTechTools}</p>
                )}
              </div>
            </div>
          }

          {ressource === "Création d'une application" &&
            <div className="p-4">

              <div className="mb-4">
                <h1 className="text-xl font-bold">{service}</h1>

                <h2 className="text-xl font-semibold">1. Objectifs de l’application mobile</h2>
                <ul className="list-disc ml-6">
                  {objectiveMobile?.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {otherObjectiveMobile && (
                  <p><strong>Autre :</strong> {otherObjectiveMobile}</p>
                )}
              </div>


              <div className="mb-4">
                <h2 className="text-xl font-semibold">2. Plateformes ciblées</h2>
                <ul className="list-disc ml-6">
                  {plateformMobile?.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {otherPlateformMobile && (
                  <p><strong>Autre :</strong> {otherPlateformMobile}</p>
                )}
              </div>

              <div className="mb-4">
                <h2 className="text-xl font-semibold">3. Design & Style</h2>
                <p><strong>Style :</strong> {designStyleMobile || "—"}</p>
                <p><strong>Design :</strong> {designMobile || "—"}</p>
                <p><strong>Applications d’inspiration :</strong> {inspirationAppMobile || "—"}</p>
              </div>


              <div className="mb-4">
                <h2 className="text-xl font-semibold">4. Fonctionnalités principales</h2>
                <ul className="list-disc ml-6">
                  {functionalityMobile?.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {otherFunctionalityMobile && (
                  <p><strong>Autre :</strong> {otherFunctionalityMobile}</p>
                )}
              </div>


              <div className="mb-4">
                <h2 className="text-xl font-semibold">5. Contenu de l’APK</h2>
                <p>{apkContentMobile || "—"}</p>
              </div>


              <div className="mb-4">
                <h2 className="text-xl font-semibold">6. Gestion des données</h2>
                {Array.isArray(dataManageMobile) ? (
                  <ul className="list-disc ml-6">
                    {dataManageMobile.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{dataManageMobile || "—"}</p>
                )}

                {otherDataManageMobile && (
                  <p><strong>Autre :</strong> {otherDataManageMobile}</p>
                )}
              </div>





              <div className="mb-4">
                <h2 className="text-xl font-semibold">7. Maintenance</h2>
                <p>{maintainMobile || "—"}</p>
              </div>


              <div className="mb-4">
                <h2 className="text-xl font-semibold">8. Budget & délais</h2>
                <p><strong>Budget :</strong> {budgetMobile || "—"}</p>
                <p><strong>Délai MVP :</strong> {delayMvpMobile || "—"}</p>
              </div>


              <div className="mb-4">
                <h2 className="text-xl font-semibold">9. Technologies</h2>
                <ul className="list-disc ml-6">
                  {techMobile?.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {otherTechMobile && (
                  <p><strong>Autre :</strong> {otherTechMobile}</p>
                )}
              </div>
            </div>
          }

          {ressource === "Externalisation" &&
            <div className="space-y-6 p-6 bg-white rounded-2xl shadow">
              <h1 className="text-xl font-bold">{service}</h1>
              <div>
                <h2 className="text-xl font-semibold">1. Ressources</h2>
                <ul className="list-disc ml-6">
                  {resourceExt?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                  {otherResExt && <li>Autre : {otherResExt}</li>}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">2. Date et durée</h2>
                <p>Date de début : {dateStartExt || "Non spécifiée"}</p>
                <ul className="list-disc ml-6">
                  {durationExt?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">3. Temps de travail</h2>
                <ul className="list-disc ml-6">
                  {timeExt?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                  {otherTimeExt && <li>Autre : {otherTimeExt}</li>}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">4. Compétences & Expériences</h2>
                <p>Compétences : {competenciesExt || "Non spécifiées"}</p>
                <ul className="list-disc ml-6">
                  {experiencesExt?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">5. Langues</h2>
                <ul className="list-disc ml-6">
                  {languageExt?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                  {otherLangExt && <li>Autre : {otherLangExt}</li>}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">6. Diplôme requis</h2>
                <p>
                  {chooseDeg === "YesExt"
                    ? `Oui : ${yesInpExt}`
                    : "Non"}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">7. Commentaire</h2>
                <p>{commentTxt || "Aucun commentaire"}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">8. Modalité de suivi</h2>
                <ul className="list-disc ml-6">
                  {modalityExt?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">9. Facturation</h2>
                <ul className="list-disc ml-6">
                  {facturationModExt?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">10. Maintenance</h2>
                <p>
                  {maintenanceExt === "YesExt"
                    ? "Oui, maintenance prévue"
                    : "Non"}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">11. Budget</h2>
                <p>{budgetExt || "Non spécifié"}</p>
              </div>
            </div>
          }

          <Text style={{ marginTop: '20px', color: '#6b7280' }}>
            Merci de votre confiance !
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;