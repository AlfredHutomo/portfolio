import React from 'react';
import Fade from 'react-reveal/Fade';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiRails } from 'react-icons/si';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <Fade cascade>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world
        from Back-end to Front-end Design. The world is evolving and I'm always
        learning more every day.
      </SectionText>
    </Fade>
    <List>
      <Fade>
        <ListItem>
          <DiReact size='4rem' />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experienced with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size='4rem' />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experienced with <br />
              Node.js and SQL Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <SiRails size='4rem' />
          <ListContainer>
            <ListTitle>Full-Stack</ListTitle>
            <ListParagraph>
              Experienced with <br />
              Ruby on Rails
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </Fade>
    </List>
  </Section>
);

export default Technologies;
