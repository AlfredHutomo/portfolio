import React from "react";
import Fade from "react-reveal/Fade";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding fullpage>
    <div style={{ marginTop: "auto", marginBottom: "auto" }}>
      <LeftSection>
        <Fade cascade>
          <SectionTitle main center>
            Welcome to <br />
            My Portfolio Website
          </SectionTitle>
          <SectionText>
            This is part of my story of learning and creating in the world of
            web development
          </SectionText>
          <Button onClick={() => (window.location = "#about")} alt>
            Learn More
          </Button>
        </Fade>
      </LeftSection>
    </div>
  </Section>
);

export default Hero;
