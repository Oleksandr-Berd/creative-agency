import * as SC from "./AboutStyle";

import bgHero from "../../assets/images/mobile/image-hero.jpg";
import LinkBtn from "../../ui/LinkBtn/LinkBtn";
import { complySize } from "../../services/helpers";

const About: React.FC = () => {
  const windowWidth = window.innerWidth;
  const initialWindowWidth = 375;
  const initialSize = 200;

  return (
    <SC.CommonCon
      bg={bgHero}
      id="about"
      size={complySize(windowWidth, initialSize, initialWindowWidth)}
    >
      <SC.ContentCon>
        <SC.Title>Branding & website design agency</SC.Title>
        <SC.Body>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small business, giving lasting
          impressions to audience in a digital world.
        </SC.Body>

        <LinkBtn path="#services" content="Learn More" />
      </SC.ContentCon>
    </SC.CommonCon>
  );
};

export default About;
