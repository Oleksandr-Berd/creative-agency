import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import * as SC from "./ProjectsStyled";
import { projects } from "../../db/projectsDb";
import { ReactComponent as Next } from "../../assets/images/desktop/icon-arrow-next.svg";
import { ReactComponent as Prev } from "../../assets/images/desktop/icon-arrow-previous.svg";
import whiteWaveTab from '../../assets/images/tablet/white_wave.svg'

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

const isTablet = useMediaQuery("(min-width:768px)")

  const handleProject = {
    increment: () => {
      setCurrentProject((prevProject) =>
        prevProject === projects.length - 1 ? 0 : prevProject + 1
      );
    },
    decrement: () => {
      setCurrentProject((prevProject) =>
        prevProject === 0 ? projects.length - 1 : prevProject - 1
      );
    },
  };

  return (
    <SC.CommonCon id="projects">
      <SC.ImageCon>
        <img src={isTablet ? projects[currentProject].image.tab : projects[currentProject].image.mob} alt="project" />
        <SC.TitleCon>
          <SC.Title>{projects[currentProject].title}</SC.Title>
          <SC.Date>{projects[currentProject].date}</SC.Date>
        </SC.TitleCon>
      </SC.ImageCon>
      <SC.BottomCon bg={isTablet ? whiteWaveTab : ""}>
        <SC.SectionTitle>Brand naming & guidelines</SC.SectionTitle>
        <SC.ButtonCon>
          <button onClick={handleProject.decrement}>
            <Prev />
          </button>
          <button onClick={handleProject.increment}>
            <Next />
          </button>
        </SC.ButtonCon>
      </SC.BottomCon>
    </SC.CommonCon>
  );
};

export default Projects;
