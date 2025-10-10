import * as React from "react";

interface EmailTemplateProps {
  name: string;
  firstname: string;
  nPhone: string;
  mail: string;
  company: string;
  physicalAddress: string;
  commentary8Sens: string;
  contact: string[];
  detailExt: string;
  date: string;
  contratDuration: string;
  travelDuration: string;
  yearExperiences: string;
  competencies: string[];
  otherComp: string;
  language: string[];
  otherLang: string;
  level: string;
  message: string;
  contractUnits: Record<string, string>;
  day: string;
  night: string;
  ressourceRecrut: string;
  service: string;

  marketMainObj: string[];
  otherMarketMainObj: string;
  marketExpSearch: string[];
  otherMarketExpSearch: string;
  marketContent: string;
  marketMissionDelay: string;
  marketDateWish: string;
  marketMailFreq: string;
  marketContactBase: string;
  marketTimeline: string;
  marketOptionComp: string[];
  otherMarketOptionComp: string;
  marketTechTools: string[];
  otherMarketTechTools: string;
  ressource: string;

  objectiveMobile: string[];
  otherObjectiveMobile: string;
  plateformMobile: string[];
  otherPlateformMobile: string;
  designMobile: string;
  designStyleMobile: string[];
  inspirationAppMobile: string;
  functionalityMobile: string[];
  otherFunctionalityMobile: string;
  apkContentMobile: string;
  dataManageMobile: string[];
  otherDataManageMobile: string;
  maintainMobile: string;
  techMobile: string[];
  otherTechMobile: string;
  promotionCode: string;
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
  webObj: string[];
  otherWebObj: string;
  chooseChart: string;
  webDesign: string[];
  inspirationWeb: string;
  webContent: string[];
  webContentReady: string;
  webFunctionality: string[];
  webMaintenance: string;
  webOptions: string[];
  webTechnology: string[];
  otherWebTechnology: string;
  tagResource: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  firstname,
  nPhone,
  mail,
  company,
  physicalAddress,
  commentary8Sens,
  contact,
  date,
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

  webObj,
  otherWebObj,
  chooseChart,
  webDesign,
  inspirationWeb,
  webContent,
  webContentReady,
  webFunctionality,
  webMaintenance,
  webOptions,
  webTechnology,
  otherWebTechnology,
}) => {
  // Styles avec responsive design
  const containerStyle: React.CSSProperties = {
    backgroundColor: "#f8fafc",
    padding: "20px 10px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    minHeight: "100vh",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: "100%",
    width: "100%",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
    boxSizing: "border-box",
  };

  const headerStyle: React.CSSProperties = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "32px 20px",
    position: "relative",
    textAlign: "center",
  };

  const titleStyle: React.CSSProperties = {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "700",
    margin: "0 0 8px 0",
    letterSpacing: "-0.3px",
    lineHeight: "1.3",
  };

  const subtitleStyle: React.CSSProperties = {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "14px",
    margin: "8px 0 0 0",
    lineHeight: "1.4",
  };

  const contentStyle: React.CSSProperties = {
    padding: "24px 16px",
    boxSizing: "border-box",
  };

  const sectionStyle: React.CSSProperties = {
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    padding: "20px 16px",
    marginBottom: "20px",
    border: "1px solid #e2e8f0",
    boxSizing: "border-box",
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0 0 16px 0",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    lineHeight: "1.4",
  };

  const barAccentStyle: React.CSSProperties = {
    width: "4px",
    height: "20px",
    backgroundColor: "#667eea",
    borderRadius: "2px",
    display: "inline-block",
    flexShrink: 0,
  };

  const infoRowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    padding: "12px 0",
    borderBottom: "1px solid #e2e8f0",
    gap: "4px",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    lineHeight: "1.3",
  };

  const valueStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#1e293b",
    fontWeight: "500",
    lineHeight: "1.5",
    wordBreak: "break-word",
  };

  const detailCardStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    padding: "20px 16px",
    marginBottom: "20px",
    boxSizing: "border-box",
  };

  const mainTitleStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0 0 20px 0",
    paddingBottom: "12px",
    borderBottom: "2px solid #667eea",
    lineHeight: "1.3",
  };

  const subSectionTitleStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#334155",
    marginBottom: "12px",
    marginTop: "20px",
    lineHeight: "1.4",
  };

  const tagStyle: React.CSSProperties = {
    display: "inline-block",
    backgroundColor: "#ede9fe",
    color: "#6d28d9",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "500",
    border: "1px solid #ddd6fe",
    margin: "2px",
    lineHeight: "1.3",
    wordBreak: "break-word",
  };

  const listStyle: React.CSSProperties = {
    margin: "8px 0",
    padding: "0 0 0 16px",
    color: "#475569",
    lineHeight: "1.5",
  };

  const footerStyle: React.CSSProperties = {
    backgroundColor: "#f8fafc",
    padding: "24px 20px",
    textAlign: "center",
    borderTop: "1px solid #e2e8f0",
  };

  const textStyle: React.CSSProperties = {
    margin: "6px 0",
    color: "#475569",
    lineHeight: "1.5",
    fontSize: "14px",
  };

  // Media query styles pour desktop
  const desktopStyles = `
    @media (min-width: 768px) {
      .container {
        padding: 40px 20px !important;
      }
      .card {
        max-width: 720px !important;
        border-radius: 24px !important;
      }
      .header {
        padding: 48px 40px !important;
        text-align: left !important;
      }
      .title {
        font-size: 32px !important;
      }
      .subtitle {
        font-size: 16px !important;
      }
      .content {
        padding: 40px !important;
      }
      .section {
        padding: 32px !important;
        border-radius: 16px !important;
        margin-bottom: 32px !important;
      }
      .section-title {
        font-size: 20px !important;
        gap: 12px !important;
      }
      .bar-accent {
        width: 6px !important;
        height: 24px !important;
        border-radius: 3px !important;
      }
      .info-row {
        flex-direction: row !important;
        align-items: center !important;
        gap: 0 !important;
      }
      .label {
        min-width: 140px !important;
        font-size: 12px !important;
      }
      .value {
        font-size: 15px !important;
      }
      .detail-card {
        padding: 32px !important;
        border-radius: 16px !important;
        margin-bottom: 32px !important;
      }
      .main-title {
        font-size: 24px !important;
        margin-bottom: 32px !important;
        padding-bottom: 16px !important;
      }
      .sub-section-title {
        font-size: 18px !important;
        margin-bottom: 16px !important;
        margin-top: 24px !important;
      }
      .tag {
        padding: 8px 16px !important;
        font-size: 14px !important;
        margin: 4px !important;
      }
      .list {
        margin: 12px 0 !important;
        padding-left: 20px !important;
      }
      .footer {
        padding: 32px 40px !important;
      }
      .text {
        font-size: 15px !important;
        margin: 8px 0 !important;
      }
    }
  `;

  return (
    <div style={containerStyle} className="container">
      <style>{desktopStyles}</style>
      <div style={cardStyle} className="card">
        {/* Header */}
        <div style={headerStyle} className="header">
          <h1 style={titleStyle} className="title">
            Nouvelle demande de contact
          </h1>
          <p style={subtitleStyle} className="subtitle">
            Formulaire reçu le {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>

        {/* Content */}
        <div style={contentStyle} className="content">
          {/* Section Informations Contact */}
          <div style={sectionStyle} className="section">
            <h2 style={sectionTitleStyle} className="section-title">
              <span style={barAccentStyle} className="bar-accent"></span>
              Informations de contact pour 8sens
            </h2>

            <div style={infoRowStyle} className="info-row">
              <span style={labelStyle} className="label">
                Nom
              </span>
              <span style={valueStyle} className="value">
                {name}
              </span>
            </div>
            <div style={infoRowStyle} className="info-row">
              <span style={labelStyle} className="label">
                Prénom
              </span>
              <span style={valueStyle} className="value">
                {firstname}
              </span>
            </div>
            <div style={infoRowStyle} className="info-row">
              <span style={labelStyle} className="label">
                Téléphone
              </span>
              <span style={valueStyle} className="value">
                {nPhone}
              </span>
            </div>
            <div style={infoRowStyle} className="info-row">
              <span style={labelStyle} className="label">
                Email
              </span>
              <span style={valueStyle} className="value">
                {mail}
              </span>
            </div>
            <div style={infoRowStyle} className="info-row">
              <span style={labelStyle} className="label">
                Société
              </span>
              <span style={valueStyle} className="value">
                {company}
              </span>
            </div>
            <div style={infoRowStyle} className="info-row">
              <span style={labelStyle} className="label">
                Adresse
              </span>
              <span style={valueStyle} className="value">
                {physicalAddress}
              </span>
            </div>
            <div style={infoRowStyle} className="info-row">
              <span style={labelStyle} className="label">
                Commentaire
              </span>
              <span style={valueStyle} className="value">
                {commentary8Sens}
              </span>
            </div>
            <div
              style={{ ...infoRowStyle, borderBottom: "none" }}
              className="info-row"
            >
              <span style={labelStyle} className="label">
                Contact préféré
              </span>
              <span style={valueStyle} className="value">
                {contact && contact.length > 0
                  ? contact.join(", ")
                  : "Non précisé"}
              </span>
            </div>
            <div style={infoRowStyle} className="info-row">
              <span style={labelStyle} className="label">
                Code Promo
              </span>
              <span style={valueStyle} className="value">
                {promotionCode || "—"}
              </span>
            </div>
          </div>

          {/* Section Ressource */}
          {ressource === "Ressource" && (
            <div style={detailCardStyle} className="detail-card">
              <h1 style={mainTitleStyle} className="main-title">
                {service}
              </h1>

              <p style={textStyle} className="text">
                <strong>Ressource :</strong> {ressourceRecrut}
              </p>
              <p style={textStyle} className="text">
                <strong>Date :</strong> {date}
              </p>
              <p style={textStyle} className="text">
                <strong>Années d&apos;expérience :</strong>{" "}
                {yearExperiences || "—"}
              </p>

              <div style={{ marginTop: "16px" }}>
                <strong>Compétences :</strong>
                <ul style={listStyle} className="list">
                  {competencies.join(", ")}
                </ul>
              </div>

              <p style={textStyle} className="text">
                <strong>Autre compétence :</strong> {otherComp || "—"}
              </p>

              <div style={{ marginTop: "16px" }}>
                <strong>Langues :</strong>
                <ul style={listStyle} className="list">
                  {language.join(", ")}
                </ul>
              </div>

              <p style={textStyle} className="text">
                <strong>Autre langue :</strong> {otherLang || "—"}
              </p>
              <p style={textStyle} className="text">
                <strong>Niveau :</strong> {level || "—"}
              </p>
              <p style={textStyle} className="text">
                <strong>Message :</strong> {message || "—"}
              </p>

              <div style={{ marginTop: "16px" }}>
                <strong>Contrat (unités) :</strong>
                <ul style={listStyle} className="list">
                  {Object.entries(contractUnits).map(
                    ([unit, value]) =>
                      value && (
                        <li key={unit}>
                          {unit} : {value}
                        </li>
                      )
                  )}
                </ul>
              </div>

              <div style={{ marginTop: "16px" }}>
                <strong>Temps de travail le jour :</strong>
                <ul style={listStyle} className="list">
                  {Object.entries(day).map(
                    ([key, value]) =>
                      value && (
                        <li key={key}>
                          {key.replace(/_/g, " ")} : {value}
                        </li>
                      )
                  )}
                </ul>
              </div>

              <div style={{ marginTop: "16px" }}>
                <strong>Temps de travail la nuit :</strong>
                <ul style={listStyle} className="list">
                  {Object.entries(night).map(
                    ([key, value]) =>
                      value && (
                        <li key={key}>
                          {key.replace(/_/g, " ")} : {value}
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          )}

          {/* Section Marketing Digital */}
          {ressource === "Marketing digital" && (
            <div style={detailCardStyle} className="detail-card">
              <h1 style={mainTitleStyle} className="main-title">
                {service}
              </h1>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                1. Objectif principal
              </h2>
              <div>
                {marketMainObj.map((item, idx) => (
                  <span key={idx} style={tagStyle} className="tag">
                    {item}
                  </span>
                ))}
              </div>
              {otherMarketMainObj && (
                <p style={textStyle} className="text">
                  <strong>Autre :</strong> {otherMarketMainObj}
                </p>
              )}

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                2. Canaux & Expertises
              </h2>
              <div>
                {marketExpSearch.map((item, idx) => (
                  <span key={idx} style={tagStyle} className="tag">
                    {item}
                  </span>
                ))}
              </div>
              {otherMarketExpSearch && (
                <p style={textStyle} className="text">
                  <strong>Autre :</strong> {otherMarketExpSearch}
                </p>
              )}

              <p style={{ ...textStyle, marginTop: "16px" }} className="text">
                <strong>3. Contenu disponible :</strong> {marketContent}
              </p>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                4. Détails de la campagne
              </h2>
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  padding: "12px",
                }}
              >
                <p style={textStyle} className="text">
                  <strong>Date de lancement :</strong> {marketDateWish || "—"}
                </p>
                <p style={textStyle} className="text">
                  <strong>Durée de la mission :</strong> {marketMissionDelay}
                </p>
                <p style={textStyle} className="text">
                  <strong>Fréquence emailing :</strong> {marketMailFreq}
                </p>
                <p style={textStyle} className="text">
                  <strong>Taille base contacts :</strong> {marketContactBase}
                </p>
              </div>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                5. Options complémentaires
              </h2>
              <div>
                {marketOptionComp.map((item, idx) => (
                  <span key={idx} style={tagStyle} className="tag">
                    {item}
                  </span>
                ))}
              </div>
              {otherMarketOptionComp && (
                <p style={textStyle} className="text">
                  <strong>Autre :</strong> {otherMarketOptionComp}
                </p>
              )}

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                6. Technologies & outils
              </h2>
              <div>
                {marketTechTools.map((item, idx) => (
                  <span key={idx} style={tagStyle} className="tag">
                    {item}
                  </span>
                ))}
              </div>
              {otherMarketTechTools && (
                <p style={textStyle} className="text">
                  <strong>Autre :</strong> {otherMarketTechTools}
                </p>
              )}
            </div>
          )}

          {/* Section Création Application Mobile */}
          {ressource === "Création d'une application" && (
            <div style={detailCardStyle} className="detail-card">
              <h1 style={mainTitleStyle} className="main-title">
                {service}
              </h1>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                1. Objectifs de l&apos;application mobile
              </h2>
              <ul style={listStyle} className="list">
                {objectiveMobile?.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {otherObjectiveMobile && (
                <p style={textStyle} className="text">
                  <strong>Autre :</strong> {otherObjectiveMobile}
                </p>
              )}

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                2. Plateformes ciblées
              </h2>
              <ul style={listStyle} className="list">
                {plateformMobile?.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {otherPlateformMobile && (
                <p style={textStyle} className="text">
                  <strong>Autre :</strong> {otherPlateformMobile}
                </p>
              )}

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                3. Design & Style
              </h2>
              <p style={textStyle} className="text">
                <strong>Style :</strong> {designStyleMobile || "—"}
              </p>
              <p style={textStyle} className="text">
                <strong>Design :</strong> {designMobile || "—"}
              </p>
              <p style={textStyle} className="text">
                <strong>Applications d&apos;inspiration :</strong>{" "}
                {inspirationAppMobile || "—"}
              </p>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                4. Fonctionnalités principales
              </h2>
              <ul style={listStyle} className="list">
                {functionalityMobile?.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {otherFunctionalityMobile && (
                <p style={textStyle} className="text">
                  <strong>Autre :</strong> {otherFunctionalityMobile}
                </p>
              )}

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                5. Contenu de l&apos;APK
              </h2>
              <p style={textStyle} className="text">
                {apkContentMobile || "—"}
              </p>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                6. Gestion des données
              </h2>
              {Array.isArray(dataManageMobile) ? (
                <ul style={listStyle} className="list">
                  {dataManageMobile.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p style={textStyle} className="text">
                  {dataManageMobile || "—"}
                </p>
              )}
              {otherDataManageMobile && (
                <p style={textStyle} className="text">
                  <strong>Autre :</strong> {otherDataManageMobile}
                </p>
              )}

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                7. Maintenance
              </h2>
              <p style={textStyle} className="text">
                {maintainMobile || "—"}
              </p>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                8. Technologies
              </h2>
              <ul style={listStyle} className="list">
                {techMobile?.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {otherTechMobile && (
                <p style={textStyle} className="text">
                  <strong>Autre :</strong> {otherTechMobile}
                </p>
              )}
            </div>
          )}

          {/* Section Externalisation */}
          {ressource === "Externalisation" && (
            <div style={detailCardStyle} className="detail-card">
              <h1 style={mainTitleStyle} className="main-title">
                {service}
              </h1>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                1. Ressources
              </h2>
              <ul style={listStyle} className="list">
                {resourceExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
                {otherResExt && <li>Autre : {otherResExt}</li>}
              </ul>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                2. Date et durée
              </h2>
              <p style={textStyle} className="text">
                Date de début : {dateStartExt || "Non spécifiée"}
              </p>
              <ul style={listStyle} className="list">
                {durationExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                3. Temps de travail
              </h2>
              <ul style={listStyle} className="list">
                {timeExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
                {otherTimeExt && <li>Autre : {otherTimeExt}</li>}
              </ul>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                4. Compétences & Expériences
              </h2>
              <p style={textStyle} className="text">
                Compétences : {competenciesExt || "Non spécifiées"}
              </p>
              <ul style={listStyle} className="list">
                {experiencesExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                5. Langues
              </h2>
              <ul style={listStyle} className="list">
                {languageExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
                {otherLangExt && <li>Autre : {otherLangExt}</li>}
              </ul>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                6. Diplôme requis
              </h2>
              <p style={textStyle} className="text">
                {chooseDeg === "YesExt" ? `Oui : ${yesInpExt}` : "Non"}
              </p>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                7. Commentaire
              </h2>
              <p style={textStyle} className="text">
                {commentTxt || "Aucun commentaire"}
              </p>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                8. Modalité de suivi
              </h2>
              <ul style={listStyle} className="list">
                {modalityExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                9. Facturation
              </h2>
              <ul style={listStyle} className="list">
                {facturationModExt?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                10. Maintenance
              </h2>
              <p style={textStyle} className="text">
                {maintenanceExt === "YesExt"
                  ? "Oui, maintenance prévue"
                  : "Non"}
              </p>
            </div>
          )}

          {/* Section Site Web */}
          {ressource === "Site web" && (
            <div style={detailCardStyle} className="detail-card">
              <h1 style={mainTitleStyle} className="main-title">
                {service}
              </h1>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                Objectifs du site
              </h2>
              <ul style={listStyle} className="list">
                {webObj.length > 0 ? (
                  webObj.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                  <li>—</li>
                )}
              </ul>
              <p style={textStyle} className="text">
                <strong>Autre objectif :</strong> {otherWebObj || "—"}
              </p>

              <p style={{ ...textStyle, marginTop: "16px" }} className="text">
                <strong>Charte graphique :</strong> {chooseChart || "—"}
              </p>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                Design attendu
              </h2>
              <ul style={listStyle} className="list">
                {webDesign.length > 0 ? (
                  webDesign.map((design, index) => (
                    <li key={index}>{design}</li>
                  ))
                ) : (
                  <li>—</li>
                )}
              </ul>

              <p style={textStyle} className="text">
                <strong>Sources d&apos;inspiration :</strong>{" "}
                {inspirationWeb || "—"}
              </p>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                Contenus du site
              </h2>
              <ul style={listStyle} className="list">
                {webContent.length > 0 ? (
                  webContent.map((content, index) => (
                    <li key={index}>{content}</li>
                  ))
                ) : (
                  <li>—</li>
                )}
              </ul>

              <p style={textStyle} className="text">
                <strong>Disponibilité du contenu :</strong>{" "}
                {webContentReady || "—"}
              </p>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                Fonctionnalités
              </h2>
              <ul style={listStyle} className="list">
                {webFunctionality.length > 0 ? (
                  webFunctionality.map((func, index) => (
                    <li key={index}>{func}</li>
                  ))
                ) : (
                  <li>—</li>
                )}
              </ul>

              <p style={textStyle} className="text">
                <strong>Maintenance :</strong> {webMaintenance || "—"}
              </p>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                Options supplémentaires
              </h2>
              <ul style={listStyle} className="list">
                {webOptions.length > 0 ? (
                  webOptions.map((opt, index) => <li key={index}>{opt}</li>)
                ) : (
                  <li>—</li>
                )}
              </ul>

              <h2 style={subSectionTitleStyle} className="sub-section-title">
                Technologies
              </h2>
              <ul style={listStyle} className="list">
                {webTechnology.length > 0 ? (
                  webTechnology.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))
                ) : (
                  <li>—</li>
                )}
              </ul>
              <p style={textStyle} className="text">
                <strong>Autre technologie :</strong> {otherWebTechnology || "—"}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={footerStyle} className="footer">
          <p
            style={{
              color: "#64748b",
              fontSize: "14px",
              margin: "0",
              lineHeight: "1.4",
            }}
          >
            Merci de votre confiance ! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
