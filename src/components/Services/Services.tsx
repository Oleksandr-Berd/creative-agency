import { useMediaQuery } from "usehooks-ts";

import * as SC from "./ServicesStyle";

import imgServiceMob from "../../assets/images/mobile/image-strategic.jpg";
import imgServiceTab from "../../assets/images/tablet/image-strategic.jpg";
import imgServiceDesk from '../../assets/images/desktop/image-strategic.jpg'
import waveRed from "../../assets/images/tablet/red_wave.svg";
import waveRedDesk from '../../assets/images/desktop/bg-pattern-wave-red.svg'
import { complySize } from "../../services/helpers";
import ServicesList from "./ServicesList";

const Services: React.FC = () => {
  const windowWidth = window.innerWidth;
  const initialWindowWidth = 375;
  const initialSize = 200;

  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesk = useMediaQuery("(min-width:1440px)");

  return (
    <SC.CommonCon
      id="service"
      bg={isDesk ? imgServiceDesk : isTablet ? imgServiceTab : imgServiceMob}
      size={complySize(windowWidth, initialSize, initialWindowWidth)}
    >
      <SC.IntroCon bg={isDesk ? waveRedDesk : isTablet ? waveRed : ""}>
        <SC.Title>
          <span>Design</span> is strategic.
        </SC.Title>
        <SC.Body>
          “A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients.”
        </SC.Body>
        <SC.CallBtn>Schedule a Call</SC.CallBtn>
      </SC.IntroCon>
      <ServicesList />
    </SC.CommonCon>
  );
};

export default Services;
