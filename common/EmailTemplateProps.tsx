
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
  // travelTime: string
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
  // travelTime,
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

          {service &&
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
          <Text style={{ marginTop: '20px', color: '#6b7280' }}>
            Merci de votre confiance !
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;