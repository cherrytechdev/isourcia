import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  firstname: string;
  nPhone: string;
  mail: string;
  company: string;
  physicalAddress: string;
  contact: string[];
  eightSens: string[];
  detailExt: string;
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
  promotionCode: string
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

  webObj: string[];
  otherWebObj: string;
  chooseChart: string;
  webDesign: string[];
  inspirationWeb: string;
  webContent: string[];
  webContentReady: string;
  webFunctionality: string[];
  webMaintenance: string;
  webBudget: string;
  webDelay: string;
  webOptions: string[];
  webTechnology: string[];
  otherWebTechnology: string;
  tagResource: string
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  firstname,
  nPhone,
  mail,
  company,
  physicalAddress,
  contact,
  eightSens,
detailExt,
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
promotionCode,
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

  webObj,
  otherWebObj,
  chooseChart,
  webDesign,
  inspirationWeb,
  webContent,
  webContentReady,
  webFunctionality,
  webMaintenance,
  webBudget,
  webDelay,
  webOptions,
  webTechnology,
  otherWebTechnology,
  tagResource
}) => {

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    minHeight: '100vh'
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: '720px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
  };

  const headerStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '48px 40px',
    position: 'relative'
  };

  const titleStyle: React.CSSProperties = {
    color: '#ffffff',
    fontSize: '32px',
    fontWeight: '700',
    margin: '0',
    letterSpacing: '-0.5px'
  };

  const subtitleStyle: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '16px',
    margin: '12px 0 0 0'
  };

  const contentStyle: React.CSSProperties = {
    padding: '40px'
  };

  const sectionStyle: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    padding: '32px',
    marginBottom: '32px',
    border: '1px solid #e2e8f0'
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0 0 24px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const barAccentStyle: React.CSSProperties = {
    width: '6px',
    height: '24px',
    backgroundColor: '#667eea',
    borderRadius: '3px',
    display: 'inline-block'
  };

  const infoRowStyle: React.CSSProperties = {
    display: 'flex',
    padding: '12px 0',
    borderBottom: '1px solid #e2e8f0'
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: '600',
    color: '#64748b',
    minWidth: '140px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const valueStyle: React.CSSProperties = {
    fontSize: '15px',
    color: '#1e293b',
    fontWeight: '500',
    flex: 1
  };

  const detailCardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    border: '2px solid #e2e8f0',
    borderRadius: '16px',
    padding: '32px',
    marginBottom: '32px'
  };

  const mainTitleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0 0 32px 0',
    paddingBottom: '16px',
    borderBottom: '3px solid #667eea'
  };

  const subSectionTitleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#334155',
    marginBottom: '16px',
    marginTop: '24px'
  };

  const tagStyle: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#ede9fe',
    color: '#6d28d9',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    border: '1px solid #ddd6fe',
    margin: '4px'
  };

  const listStyle: React.CSSProperties = {
    margin: '12px 0',
    padding: '0 0 0 20px',
    color: '#475569'
  };

  const highlightBoxStyle: React.CSSProperties = {
    backgroundColor: '#fef3c7',
    borderRadius: '12px',
    padding: '24px',
    border: '2px solid #fbbf24',
    marginTop: '16px'
  };

  const footerStyle: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    padding: '32px 40px',
    textAlign: 'center',
    borderTop: '1px solid #e2e8f0'
  };

  const textStyle: React.CSSProperties = {
    margin: '8px 0',
    color: '#475569',
    lineHeight: '1.6'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>
            Nouvelle demande de contact
          </h1>
          <p style={subtitleStyle}>
            Formulaire reçu le {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        {/* Content */}
        <div style={contentStyle}>

          {/* Section Informations Contact */}
          <div style={sectionStyle}>
            <h2 style={sectionTitleStyle}>
              <span style={barAccentStyle}></span>
              Informations de contact
            </h2>

            <div style={infoRowStyle}>
              <span style={labelStyle}>Nom</span>
              <span style={valueStyle}>{name}</span>
            </div>
            <div style={infoRowStyle}>
              <span style={labelStyle}>Prénom</span>
              <span style={valueStyle}>{firstname}</span>
            </div>
            <div style={infoRowStyle}>
              <span style={labelStyle}>Téléphone</span>
              <span style={valueStyle}>{nPhone}</span>
            </div>
            <div style={infoRowStyle}>
              <span style={labelStyle}>Email</span>
              <span style={valueStyle}>{mail}</span>
            </div>
            <div style={infoRowStyle}>
              <span style={labelStyle}>Société</span>
              <span style={valueStyle}>{company}</span>
            </div>
            <div style={infoRowStyle}>
              <span style={labelStyle}>Adresse</span>
              <span style={valueStyle}>{physicalAddress}</span>
            </div>
            {tagResource === "Solution ERP" && (
              <div style={infoRowStyle}>
                <span style={labelStyle}>Services</span>
                <ul style={valueStyle}>{eightSens.join(', ')}</ul>
              </div>
            )}
            <div style={{ ...infoRowStyle, borderBottom: 'none' }}>
              <span style={labelStyle}>Contact préféré</span>
              <span style={valueStyle}>{contact && contact.length > 0 ? contact.join(", ") : "Non précisé"}</span>
            </div>
            <div style={infoRowStyle}>
              <span style={labelStyle}>Code Promo</span>
              <span style={valueStyle}>{promotionCode || "—"}</span>
            </div>
            
          </div>

          {/* Section Ressource */}
          {ressource === "Ressource" && (
            <div style={detailCardStyle}>
              <h1 style={mainTitleStyle}>{service}</h1>

              <p style={textStyle}><strong>Ressource :</strong> {ressourceRecrut}</p>
              <p style={textStyle}><strong>Date :</strong> {date}</p>
              <p style={textStyle}><strong>Années d'expérience :</strong> {yearExperiences || "—"}</p>

              <div style={{ marginTop: '20px' }}>
                <strong>Compétences :</strong>
                <ul style={listStyle}>
                  {competencies.join(', ')}
                </ul>
              </div>

              <p style={textStyle}><strong>Autre compétence :</strong> {otherComp || "—"}</p>

              <div style={{ marginTop: '20px' }}>
                <strong>Langues :</strong>
                <ul style={listStyle}>
                  {language.join(', ')}
                </ul>
              </div>

              <p style={textStyle}><strong>Autre langue :</strong> {otherLang || "—"}</p>
              <p style={textStyle}><strong>Niveau :</strong> {level || "—"}</p>
              <p style={textStyle}><strong>Message :</strong> {message || "—"}</p>

              <div style={{ marginTop: '20px' }}>
                <strong>Contrat (unités) :</strong>
                <ul style={listStyle}>
                  {Object.entries(contractUnits).map(([unit, value]) => (
                    value && (
                      <li key={unit}>
                        {unit} : {value}
                      </li>
                    )
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '20px' }}>
                <strong>Temps de travail le jour  :</strong>
                <ul style={listStyle}>
                  {Object.entries(day).map(([key, value]) => (
                    value && (
                      <li key={key}>
                        {key.replace(/_/g, " ")} : {value}
                      </li>
                    )
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '20px' }}>
                <strong>Temps de travail la nuit :</strong>
                <ul style={listStyle}>
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
          )}

          {/* Section Marketing Digital */}
          {ressource === "Marketing digital" && (
            <div style={detailCardStyle}>
              <h1 style={mainTitleStyle}>{service}</h1>

              <h2 style={subSectionTitleStyle}>1. Objectif principal</h2>
              <div>
                {marketMainObj.map((item, idx) => (
                  <span key={idx} style={tagStyle}>{item}</span>
                ))}
              </div>
              {otherMarketMainObj && (
                <p style={textStyle}><strong>Autre :</strong> {otherMarketMainObj}</p>
              )}

              <h2 style={subSectionTitleStyle}>2. Canaux & Expertises</h2>
              <div>
                {marketExpSearch.map((item, idx) => (
                  <span key={idx} style={tagStyle}>{item}</span>
                ))}
              </div>
              {otherMarketExpSearch && (
                <p style={textStyle}><strong>Autre :</strong> {otherMarketExpSearch}</p>
              )}

              <p style={{ ...textStyle, marginTop: '20px' }}><strong>3. Contenu disponible :</strong> {marketContent}</p>

              <h2 style={subSectionTitleStyle}>4. Détails de la campagne</h2>
              <div style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '16px' }}>
                <p style={textStyle}><strong>Date de lancement :</strong> {marketDateWish || "—"}</p>
                <p style={textStyle}><strong>Durée de la mission :</strong> {marketMissionDelay}</p>
                <p style={textStyle}><strong>Fréquence emailing :</strong> {marketMailFreq}</p>
                <p style={textStyle}><strong>Taille base contacts :</strong> {marketContactBase}</p>
              </div>

              <h2 style={subSectionTitleStyle}>5. Budget & délais</h2>
              <div style={highlightBoxStyle}>
                <p style={{ margin: '8px 0', color: '#92400e' }}><strong>Budget :</strong> {marketBudget}</p>
                <p style={{ margin: '8px 0', color: '#92400e' }}><strong>Délais souhaités :</strong> {marketTimeline}</p>
              </div>

              <h2 style={subSectionTitleStyle}>6. Options complémentaires</h2>
              <div>
                {marketOptionComp.map((item, idx) => (
                  <span key={idx} style={tagStyle}>{item}</span>
                ))}
              </div>
              {otherMarketOptionComp && (
                <p style={textStyle}><strong>Autre :</strong> {otherMarketOptionComp}</p>
              )}

              <h2 style={subSectionTitleStyle}>7. Technologies & outils</h2>
              <div>
                {marketTechTools.map((item, idx) => (
                  <span key={idx} style={tagStyle}>{item}</span>
                ))}
              </div>
              {otherMarketTechTools && (
                <p style={textStyle}><strong>Autre :</strong> {otherMarketTechTools}</p>
              )}
            </div>
          )}

          {/* Section Création Application Mobile */}
          {ressource === "Création d'une application" && (
            <div style={detailCardStyle}>
              <h1 style={mainTitleStyle}>{service}</h1>

              <h2 style={subSectionTitleStyle}>1. Objectifs de l'application mobile</h2>
              <ul style={listStyle}>
                {objectiveMobile?.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {otherObjectiveMobile && (
                <p style={textStyle}><strong>Autre :</strong> {otherObjectiveMobile}</p>
              )}

              <h2 style={subSectionTitleStyle}>2. Plateformes ciblées</h2>
              <ul style={listStyle}>
                {plateformMobile?.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {otherPlateformMobile && (
                <p style={textStyle}><strong>Autre :</strong> {otherPlateformMobile}</p>
              )}

              <h2 style={subSectionTitleStyle}>3. Design & Style</h2>
              <p style={textStyle}><strong>Style :</strong> {designStyleMobile || "—"}</p>
              <p style={textStyle}><strong>Design :</strong> {designMobile || "—"}</p>
              <p style={textStyle}><strong>Applications d'inspiration :</strong> {inspirationAppMobile || "—"}</p>

              <h2 style={subSectionTitleStyle}>4. Fonctionnalités principales</h2>
              <ul style={listStyle}>
                {functionalityMobile?.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {otherFunctionalityMobile && (
                <p style={textStyle}><strong>Autre :</strong> {otherFunctionalityMobile}</p>
              )}

              <h2 style={subSectionTitleStyle}>5. Contenu de l'APK</h2>
              <p style={textStyle}>{apkContentMobile || "—"}</p>

              <h2 style={subSectionTitleStyle}>6. Gestion des données</h2>
              {Array.isArray(dataManageMobile) ? (
                <ul style={listStyle}>
                  {dataManageMobile.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p style={textStyle}>{dataManageMobile || "—"}</p>
              )}
              {otherDataManageMobile && (
                <p style={textStyle}><strong>Autre :</strong> {otherDataManageMobile}</p>
              )}

              <h2 style={subSectionTitleStyle}>7. Maintenance</h2>
              <p style={textStyle}>{maintainMobile || "—"}</p>

              <h2 style={subSectionTitleStyle}>8. Budget & délais</h2>
              <div style={highlightBoxStyle}>
                <p style={{ margin: '8px 0', color: '#92400e' }}><strong>Budget :</strong> {budgetMobile || "—"}</p>
                <p style={{ margin: '8px 0', color: '#92400e' }}><strong>Délai MVP :</strong> {delayMvpMobile || "—"}</p>
              </div>

              <h2 style={subSectionTitleStyle}>9. Technologies</h2>
              <ul style={listStyle}>
                {techMobile?.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {otherTechMobile && (
                <p style={textStyle}><strong>Autre :</strong> {otherTechMobile}</p>
              )}
            </div>
          )}

          {/* Section Externalisation */}
          {ressource === "Externalisation" && (
            <div style={detailCardStyle}>
              <h1 style={mainTitleStyle}>{service}</h1>

              <h2 style={subSectionTitleStyle}>1. Ressources</h2>
              <ul style={listStyle}>
                {resourceExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
                {otherResExt && <li>Autre : {otherResExt}</li>}
              </ul>

              <h2 style={subSectionTitleStyle}>2. Date et durée</h2>
              <p style={textStyle}>Date de début : {dateStartExt || "Non spécifiée"}</p>
              <ul style={listStyle}>
                {durationExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h2 style={subSectionTitleStyle}>3. Temps de travail</h2>
              <ul style={listStyle}>
                {timeExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
                {otherTimeExt && <li>Autre : {otherTimeExt}</li>}
              </ul>

              <h2 style={subSectionTitleStyle}>4. Compétences & Expériences</h2>
              <p style={textStyle}>Compétences : {competenciesExt || "Non spécifiées"}</p>
              <ul style={listStyle}>
                {experiencesExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h2 style={subSectionTitleStyle}>5. Langues</h2>
              <ul style={listStyle}>
                {languageExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
                {otherLangExt && <li>Autre : {otherLangExt}</li>}
              </ul>

              <h2 style={subSectionTitleStyle}>6. Diplôme requis</h2>
              <p style={textStyle}>
                {chooseDeg === "YesExt"
                  ? `Oui : ${yesInpExt}`
                  : "Non"}
              </p>

              <h2 style={subSectionTitleStyle}>7. Commentaire</h2>
              <p style={textStyle}>{commentTxt || "Aucun commentaire"}</p>

              <h2 style={subSectionTitleStyle}>8. Modalité de suivi</h2>
              <ul style={listStyle}>
                {modalityExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h2 style={subSectionTitleStyle}>9. Facturation</h2>
              <ul style={listStyle}>
                {facturationModExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h2 style={subSectionTitleStyle}>10. Maintenance</h2>
              <p style={textStyle}>
                {maintenanceExt === "YesExt"
                  ? "Oui, maintenance prévue"
                  : "Non"}
              </p>

              <h2 style={subSectionTitleStyle}>11. Budget</h2>
              <div style={highlightBoxStyle}>
                <p style={{ color: '#92400e', margin: '0' }}>{budgetExt || "Non spécifié"}</p>
              </div>
              <p>Détail souhaités pour la mise en place : {detailExt || "—"}</p>
            </div>
          )}

          {/* Section Site Web */}
          {ressource === "Site web" && (
            <div style={detailCardStyle}>
              <h1 style={mainTitleStyle}>{service}</h1>

              <h2 style={subSectionTitleStyle}>Objectifs du site</h2>
              <ul style={listStyle}>
                {webObj.length > 0 ? (
                  webObj.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                  <li>—</li>
                )}
              </ul>
              <p style={textStyle}><strong>Autre objectif :</strong> {otherWebObj || "—"}</p>

              <p style={{ ...textStyle, marginTop: '20px' }}><strong>Charte graphique :</strong> {chooseChart || "—"}</p>

              <h2 style={subSectionTitleStyle}>Design attendu</h2>
              <ul style={listStyle}>
                {webDesign.length > 0 ? (
                  webDesign.map((design, index) => <li key={index}>{design}</li>)
                ) : (
                  <li>—</li>
                )}
              </ul>

              <p style={textStyle}><strong>Sources d'inspiration :</strong> {inspirationWeb || "—"}</p>

              <h2 style={subSectionTitleStyle}>Contenus du site</h2>
              <ul style={listStyle}>
                {webContent.length > 0 ? (
                  webContent.map((content, index) => <li key={index}>{content}</li>)
                ) : (
                  <li>—</li>
                )}
              </ul>

              <p style={textStyle}><strong>Disponibilité du contenu :</strong> {webContentReady || "—"}</p>

              <h2 style={subSectionTitleStyle}>Fonctionnalités</h2>
              <ul style={listStyle}>
                {webFunctionality.length > 0 ? (
                  webFunctionality.map((func, index) => <li key={index}>{func}</li>)
                ) : (
                  <li>—</li>
                )}
              </ul>

              <p style={textStyle}><strong>Maintenance :</strong> {webMaintenance || "—"}</p>

              <div style={highlightBoxStyle}>
                <p style={{ margin: '8px 0', color: '#92400e' }}><strong>Budget :</strong> {webBudget || "—"}</p>
                <p style={{ margin: '8px 0', color: '#92400e' }}><strong>Délai :</strong> {webDelay || "—"}</p>
              </div>

              <h2 style={subSectionTitleStyle}>Options supplémentaires</h2>
              <ul style={listStyle}>
                {webOptions.length > 0 ? (
                  webOptions.map((opt, index) => <li key={index}>{opt}</li>)
                ) : (
                  <li>—</li>
                )}
              </ul>

              <h2 style={subSectionTitleStyle}>Technologies</h2>
              <ul style={listStyle}>
                {webTechnology.length > 0 ? (
                  webTechnology.map((tech, index) => <li key={index}>{tech}</li>)
                ) : (
                  <li>—</li>
                )}
              </ul>
              <p style={textStyle}><strong>Autre technologie :</strong> {otherWebTechnology || "—"}</p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div style={footerStyle}>
          <p style={{ color: '#64748b', fontSize: '14px', margin: '0' }}>
            Merci de votre confiance ! 🚀
          </p>
        </div>

      </div>
    </div>
  );
};

export default EmailTemplate;

// import * as React from 'react';
// import { Html, Head, Preview, Body, Container, Heading, Text } from '@react-email/components';

// interface EmailTemplateProps {
//   name: string;
//   firstname: string;
//   nPhone: string;
//   mail: string;
//   company: string;
//   physicalAddress: string;
//   contact: string[];
//   eightSens: string[];

//   date: string
//   contratDuration: string
//   travelDuration: string
//   yearExperiences: string
//   competencies: string[]
//   otherComp: string
//   language: string[]
//   otherLang: string
//   level: string
//   message: string
//   contractUnits: Record<string, string>
//   day: string
//   night: string
//   ressourceRecrut: string
//   service: string

//   marketMainObj: string[];
//   otherMarketMainObj: string;
//   marketExpSearch: string[];
//   otherMarketExpSearch: string;
//   marketContent: string;
//   marketMissionDelay: string;
//   marketDateWish: string;
//   marketMailFreq: string;
//   marketContactBase: string;
//   marketBudget: string;
//   marketTimeline: string;
//   marketOptionComp: string[];
//   otherMarketOptionComp: string;
//   marketTechTools: string[];
//   otherMarketTechTools: string;
//   ressource: string

//   objectiveMobile: string[]
//   otherObjectiveMobile: string
//   plateformMobile: string[]
//   otherPlateformMobile: string
//   designMobile: string
//   designStyleMobile: string[]
//   inspirationAppMobile: string
//   functionalityMobile: string[]
//   otherFunctionalityMobile: string
//   apkContentMobile: string
//   dataManageMobile: string[]
//   otherDataManageMobile: string
//   maintainMobile: string
//   budgetMobile: string
//   delayMvpMobile: string[]
//   techMobile: string[]
//   otherTechMobile: string

//   resourceExt: string[];
//   otherResExt: string;
//   dateStartExt: string;
//   durationExt: string[];
//   timeExt: string[];
//   otherTimeExt: string;
//   competenciesExt: string;
//   experiencesExt: string[];
//   languageExt: string[];
//   otherLangExt: string;
//   chooseDeg: string;
//   yesInpExt: string;
//   commentTxt: string;
//   modalityExt: string[];
//   facturationModExt: string[];
//   maintenanceExt: string;
//   budgetExt: string;

//   webObj: string[];
//   otherWebObj: string;
//   chooseChart: string;
//   webDesign: string[];
//   inspirationWeb: string;
//   webContent: string[];
//   webContentReady: string;
//   webFunctionality: string[];
//   webMaintenance: string;
//   webBudget: string;
//   webDelay: string;
//   webOptions: string[];
//   webTechnology: string[];
//   otherWebTechnology: string;
//   tagResource: string
// }

// const EmailTemplate: React.FC<EmailTemplateProps> = ({
//   name,
//   firstname,
//   nPhone,
//   mail,
//   company,
//   physicalAddress,
//   contact,
//   eightSens,

//   date,
//   contratDuration,
//   travelDuration,
//   yearExperiences,
//   competencies,
//   otherComp,
//   language,
//   otherLang,
//   level,
//   message,
//   contractUnits,
//   day,
//   night,
//   ressourceRecrut,
//   service,

//   ressource,
//   marketMainObj,
//   otherMarketMainObj,
//   marketExpSearch,
//   otherMarketExpSearch,
//   marketContent,
//   marketMissionDelay,
//   marketDateWish,
//   marketMailFreq,
//   marketContactBase,
//   marketBudget,
//   marketTimeline,
//   marketOptionComp,
//   otherMarketOptionComp,
//   marketTechTools,
//   otherMarketTechTools,


//   objectiveMobile,
//   otherObjectiveMobile,
//   plateformMobile,
//   otherPlateformMobile,
//   designMobile,
//   designStyleMobile,
//   inspirationAppMobile,
//   functionalityMobile,
//   otherFunctionalityMobile,
//   apkContentMobile,
//   dataManageMobile,
//   otherDataManageMobile,
//   maintainMobile,
//   budgetMobile,
//   delayMvpMobile,
//   techMobile,
//   otherTechMobile,

//   resourceExt,
//   otherResExt,
//   dateStartExt,
//   durationExt,
//   timeExt,
//   otherTimeExt,
//   competenciesExt,
//   experiencesExt,
//   languageExt,
//   otherLangExt,
//   chooseDeg,
//   yesInpExt,
//   commentTxt,
//   modalityExt,
//   facturationModExt,
//   maintenanceExt,
//   budgetExt,

//   webObj,
//   otherWebObj,
//   chooseChart,
//   webDesign,
//   inspirationWeb,
//   webContent,
//   webContentReady,
//   webFunctionality,
//   webMaintenance,
//   webBudget,
//   webDelay,
//   webOptions,
//   webTechnology,
//   otherWebTechnology,
//   tagResource
// }) => {


//   return (
//     <Html>
//       <Head />
//       <Preview>Nouvelle demande de contact</Preview>
//       <Body style={{ backgroundColor: '#ffffff', color: '#111827', fontFamily: 'Arial, sans-serif' }}>
//         <Container style={{ backgroundColor: '#ffffff', padding: '20px' }}>
//           <Heading style={{ fontSize: '20px', marginBottom: '10px' }}>
//             Nouvelle demande de contact
//           </Heading>

//           <Text>Bonjour,</Text>
//           <Text>Une personne a rempli le formulaire de contact avec les informations suivantes :</Text>

//           <ul style={{ marginTop: '15px', marginBottom: '15px' }}>
//             <li><strong>Nom :</strong> {name}</li>
//             <li><strong>Prénom :</strong> {firstname}</li>
//             <li><strong>Téléphone :</strong> {nPhone}</li>
//             <li><strong>Email :</strong> {mail}</li>
//             <li><strong>Société :</strong> {company}</li>
//             <li><strong>Adresse :</strong> {physicalAddress}</li>
//             {tagResource === "Solution ERP" &&
//               <li><strong>Services:</strong> {eightSens.join(', ')}</li>
//             }
//             <li><strong>Contact préféré :</strong> {contact && contact.length > 0 ? contact.join(", ") : "Non précisé"}</li>
//           </ul>

//           {ressource === "Ressource" &&
//             <div>
//               <h1 className="text-xl font-bold">{service}</h1>

//               <p><strong>Ressource :</strong> {ressourceRecrut}</p>
//               <p><strong>Date :</strong> {date}</p>
//               <p><strong>Années d’expérience :</strong> {yearExperiences || "—"}</p>

//               <div>
//                 <strong>Compétences :</strong>
//                 <ul className="list-disc ml-6">
//                   {competencies}
//                 </ul>
//               </div>

//               <p><strong>Autre compétence :</strong> {otherComp || "—"}</p>

//               <div>
//                 <strong>Langues :</strong>
//                 <ul className="list-disc ml-6">
//                   {language}
//                 </ul>
//               </div>

//               <p><strong>Autre langue :</strong> {otherLang || "—"}</p>
//               <p><strong>Niveau :</strong> {level || "—"}</p>
//               <p><strong>Message :</strong> {message || "—"}</p>

//               <div>
//                 <strong>Contrat (unités) :</strong>
//                 <ul className="bg-gray-100 p-2 rounded list-disc list-inside">
//                   {Object.entries(contractUnits).map(([unit, value]) => (
//                     value && (
//                       <li key={unit}>
//                         {unit} : {value}
//                       </li>
//                     )
//                   ))}
//                 </ul>
//               </div>


//               <div>
//                 <strong>Travail de jour :</strong>
//                 <ul className="bg-gray-100 p-2 rounded list-disc list-inside">
//                   {Object.entries(day).map(([key, value]) => (
//                     value && (
//                       <li key={key}>
//                         {key.replace(/_/g, " ")} : {value}
//                       </li>
//                     )
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <strong>Travail de nuit :</strong>
//                 <ul className="bg-gray-100 p-2 rounded list-disc list-inside">
//                   {Object.entries(night).map(([key, value]) => (
//                     value && (
//                       <li key={key}>
//                         {key.replace(/_/g, " ")} : {value}
//                       </li>
//                     )
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           }

//           {ressource === "Marketing digital" &&
//             <div>
//               <div className="mb-4">
//                 <h1 className="text-xl font-bold">{service}</h1>
//                 <h2 className="text-xl font-semibold">1. Objectif principal</h2>
//                 <ul className="list-disc ml-6">
//                   {marketMainObj.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//                 {otherMarketMainObj && (
//                   <p><strong>Autre :</strong> {otherMarketMainObj}</p>
//                 )}
//               </div>


//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">2. Canaux & Expertises</h2>
//                 <ul className="list-disc ml-6">
//                   {marketExpSearch.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//                 {otherMarketExpSearch && (
//                   <p><strong>Autre :</strong> {otherMarketExpSearch}</p>
//                 )}
//               </div>


//               <p><strong>3. Contenu disponible :</strong> {marketContent}</p>


//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">4. Détails de la campagne</h2>
//                 <p><strong>Date de lancement :</strong> {marketDateWish || "—"}</p>
//                 <p><strong>Durée de la mission :</strong> {marketMissionDelay}</p>
//                 <p><strong>Fréquence emailing :</strong> {marketMailFreq}</p>
//                 <p><strong>Taille base contacts :</strong> {marketContactBase}</p>
//               </div>


//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">5. Budget & délais</h2>
//                 <p><strong>Budget :</strong> {marketBudget}</p>
//                 <p><strong>Délais souhaités :</strong> {marketTimeline}</p>
//               </div>


//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">6. Options complémentaires</h2>
//                 <ul className="list-disc ml-6">
//                   {marketOptionComp.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//                 {otherMarketOptionComp && (
//                   <p><strong>Autre :</strong> {otherMarketOptionComp}</p>
//                 )}
//               </div>


//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">7. Technologies & outils</h2>
//                 <ul className="list-disc ml-6">
//                   {marketTechTools.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//                 {otherMarketTechTools && (
//                   <p><strong>Autre :</strong> {otherMarketTechTools}</p>
//                 )}
//               </div>
//             </div>
//           }


//           {ressource === "Création d'une application" &&
//             <div className="p-4">

//               <div className="mb-4">
//                 <h1 className="text-xl font-bold">{service}</h1>

//                 <h2 className="text-xl font-semibold">1. Objectifs de l’application mobile</h2>
//                 <ul className="list-disc ml-6">
//                   {objectiveMobile?.map((item: string, idx: number) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//                 {otherObjectiveMobile && (
//                   <p><strong>Autre :</strong> {otherObjectiveMobile}</p>
//                 )}
//               </div>


//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">2. Plateformes ciblées</h2>
//                 <ul className="list-disc ml-6">
//                   {plateformMobile?.map((item: string, idx: number) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//                 {otherPlateformMobile && (
//                   <p><strong>Autre :</strong> {otherPlateformMobile}</p>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">3. Design & Style</h2>
//                 <p><strong>Style :</strong> {designStyleMobile || "—"}</p>
//                 <p><strong>Design :</strong> {designMobile || "—"}</p>
//                 <p><strong>Applications d’inspiration :</strong> {inspirationAppMobile || "—"}</p>
//               </div>


//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">4. Fonctionnalités principales</h2>
//                 <ul className="list-disc ml-6">
//                   {functionalityMobile?.map((item: string, idx: number) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//                 {otherFunctionalityMobile && (
//                   <p><strong>Autre :</strong> {otherFunctionalityMobile}</p>
//                 )}
//               </div>


//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">5. Contenu de l’APK</h2>
//                 <p>{apkContentMobile || "—"}</p>
//               </div>


//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">6. Gestion des données</h2>
//                 {Array.isArray(dataManageMobile) ? (
//                   <ul className="list-disc ml-6">
//                     {dataManageMobile.map((item: string, idx: number) => (
//                       <li key={idx}>{item}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p>{dataManageMobile || "—"}</p>
//                 )}

//                 {otherDataManageMobile && (
//                   <p><strong>Autre :</strong> {otherDataManageMobile}</p>
//                 )}
//               </div>





//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">7. Maintenance</h2>
//                 <p>{maintainMobile || "—"}</p>
//               </div>


//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">8. Budget & délais</h2>
//                 <p><strong>Budget :</strong> {budgetMobile || "—"}</p>
//                 <p><strong>Délai MVP :</strong> {delayMvpMobile || "—"}</p>
//               </div>


//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">9. Technologies</h2>
//                 <ul className="list-disc ml-6">
//                   {techMobile?.map((item: string, idx: number) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//                 {otherTechMobile && (
//                   <p><strong>Autre :</strong> {otherTechMobile}</p>
//                 )}
//               </div>
//             </div>
//           }

//           {ressource === "Externalisation" &&
//             <div className="space-y-6 p-6 bg-white rounded-2xl shadow">
//               <h1 className="text-xl font-bold">{service}</h1>
//               <div>
//                 <h2 className="text-xl font-semibold">1. Ressources</h2>
//                 <ul className="list-disc ml-6">
//                   {resourceExt?.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                   {otherResExt && <li>Autre : {otherResExt}</li>}
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="text-xl font-semibold">2. Date et durée</h2>
//                 <p>Date de début : {dateStartExt || "Non spécifiée"}</p>
//                 <ul className="list-disc ml-6">
//                   {durationExt?.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="text-xl font-semibold">3. Temps de travail</h2>
//                 <ul className="list-disc ml-6">
//                   {timeExt?.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                   {otherTimeExt && <li>Autre : {otherTimeExt}</li>}
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="text-xl font-semibold">4. Compétences & Expériences</h2>
//                 <p>Compétences : {competenciesExt || "Non spécifiées"}</p>
//                 <ul className="list-disc ml-6">
//                   {experiencesExt?.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="text-xl font-semibold">5. Langues</h2>
//                 <ul className="list-disc ml-6">
//                   {languageExt?.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                   {otherLangExt && <li>Autre : {otherLangExt}</li>}
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="text-xl font-semibold">6. Diplôme requis</h2>
//                 <p>
//                   {chooseDeg === "YesExt"
//                     ? `Oui : ${yesInpExt}`
//                     : "Non"}
//                 </p>
//               </div>

//               <div>
//                 <h2 className="text-xl font-semibold">7. Commentaire</h2>
//                 <p>{commentTxt || "Aucun commentaire"}</p>
//               </div>

//               <div>
//                 <h2 className="text-xl font-semibold">8. Modalité de suivi</h2>
//                 <ul className="list-disc ml-6">
//                   {modalityExt?.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="text-xl font-semibold">9. Facturation</h2>
//                 <ul className="list-disc ml-6">
//                   {facturationModExt?.map((item, idx) => (
//                     <li key={idx}>{item}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="text-xl font-semibold">10. Maintenance</h2>
//                 <p>
//                   {maintenanceExt === "YesExt"
//                     ? "Oui, maintenance prévue"
//                     : "Non"}
//                 </p>
//               </div>

//               <div>
//                 <h2 className="text-xl font-semibold">11. Budget</h2>
//                 <p>{budgetExt || "Non spécifié"}</p>
//               </div>
//             </div>
//           }

//           {ressource === "Site web" &&
//             <div className="p-4 border rounded shadow">
//               <h1 className="text-xl font-bold">{service}</h1>

//               <div>
//                 <strong>Objectifs du site :</strong>
//                 <ul className="list-disc ml-6">
//                   {webObj.length > 0 ? (
//                     webObj.map((item, index) => <li key={index}>{item}</li>)
//                   ) : (
//                     <li>—</li>
//                   )}
//                 </ul>
//               </div>

//               <p><strong>Autre objectif :</strong> {otherWebObj || "—"}</p>

//               <p><strong>Charte graphique :</strong> {chooseChart || "—"}</p>

//               <div>
//                 <strong>Design attendu :</strong>
//                 <ul className="list-disc ml-6">
//                   {webDesign.length > 0 ? (
//                     webDesign.map((design, index) => <li key={index}>{design}</li>)
//                   ) : (
//                     <li>—</li>
//                   )}
//                 </ul>
//               </div>

//               <p><strong>Sources d’inspiration :</strong> {inspirationWeb || "—"}</p>

//               <div>
//                 <strong>Contenus du site :</strong>
//                 <ul className="list-disc ml-6">
//                   {webContent.length > 0 ? (
//                     webContent.map((content, index) => <li key={index}>{content}</li>)
//                   ) : (
//                     <li>—</li>
//                   )}
//                 </ul>
//               </div>

//               <p><strong>Disponibilité du contenu :</strong> {webContentReady || "—"}</p>

//               <div>
//                 <strong>Fonctionnalités :</strong>
//                 <ul className="list-disc ml-6">
//                   {webFunctionality.length > 0 ? (
//                     webFunctionality.map((func, index) => <li key={index}>{func}</li>)
//                   ) : (
//                     <li>—</li>
//                   )}
//                 </ul>
//               </div>

//               <p><strong>Maintenance :</strong> {webMaintenance || "—"}</p>
//               <p><strong>Budget :</strong> {webBudget || "—"}</p>
//               <p><strong>Délai :</strong> {webDelay || "—"}</p>

//               <div>
//                 <strong>Options supplémentaires :</strong>
//                 <ul className="list-disc ml-6">
//                   {webOptions.length > 0 ? (
//                     webOptions.map((opt, index) => <li key={index}>{opt}</li>)
//                   ) : (
//                     <li>—</li>
//                   )}
//                 </ul>
//               </div>

//               <div>
//                 <strong>Technologies :</strong>
//                 <ul className="list-disc ml-6">
//                   {webTechnology.length > 0 ? (
//                     webTechnology.map((tech, index) => <li key={index}>{tech}</li>)
//                   ) : (
//                     <li>—</li>
//                   )}
//                 </ul>
//               </div>

//               <p><strong>Autre technologie :</strong> {otherWebTechnology || "—"}</p>
//             </div>

//           }



//           <Text style={{ marginTop: '20px', color: '#6b7280' }}>
//             Merci de votre confiance !
//           </Text>
//         </Container>
//       </Body>
//     </Html>
//   );
// };

// export default EmailTemplate;