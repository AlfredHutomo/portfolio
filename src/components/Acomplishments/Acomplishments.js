import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  Box,
  Boxes,
  BoxNum,
  BoxText,
  Join,
  JoinText,
} from './AcomplishmentsStyles';

const certificates = [
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    link: 'https://www.credly.com/badges/ea79ff2a-87fb-48a5-8eac-c7b0c8fbf138?source=linked_in_profile',
  },
  {
    title: 'Agile Ways of Working',
    issuer: 'RMIT University',
    link: 'https://www.youracclaim.com/badges/792bca0f-abb0-43d3-8846-522e6ff00aae?source=linked_in_profile',
  },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider divider />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <JoinText>Certificates</JoinText>
    <Boxes>
      {certificates.map((certificate, index) => (
        <Box key={index} onClick={() => (window.location = certificate.link)}>
          <JoinText>{certificate.title}</JoinText>
          <BoxText>{certificate.issuer}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
