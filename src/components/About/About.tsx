import * as SC from "./AboutStyle";

import bgHeroMob from "../../assets/images/mobile/image-hero.jpg";
import bgHeroTab from '../../assets/images/tablet/image-hero.jpg'
import bgHeroDesk from '../../assets/images/desktop/image-hero.jpg'

import LinkBtn from "../../ui/LinkBtn/LinkBtn";
import { complySize } from "../../services/helpers";
import { useMediaQuery } from "usehooks-ts";

const About: React.FC = () => {
  const windowWidth = window.innerWidth;
  const initialWindowWidth = 375;
  const initialSize = 200;

  const isTablet = useMediaQuery("(min-width:768px)")
  const isDesk = useMediaQuery("(min-width:1440px)")

  return (
    <SC.CommonCon
      bg={isDesk ? bgHeroDesk : isTablet ? bgHeroTab : bgHeroMob}
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
