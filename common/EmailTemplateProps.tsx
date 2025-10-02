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
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  firstname,
  nPhone,
  mail,
  company,
  physicalAddress,
  contact,
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

          <Text style={{ marginTop: '20px', color: '#6b7280' }}>
            Merci de votre confiance !
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
