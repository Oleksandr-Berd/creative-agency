import * as SC from "./ProjectsStyled";
import { useState } from "react";
import { projects } from "../../db/projectsDb";
import { ReactComponent as Next } from "../../assets/images/desktop/icon-arrow-next.svg";
import { ReactComponent as Prev } from "../../assets/images/desktop/icon-arrow-previous.svg";

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

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
    <section>
      <SC.ImageCon>
        <img src={projects[currentProject].image} alt="project" />
        <SC.TitleCon>
          <SC.Title>{projects[currentProject].title}</SC.Title>
          <SC.Date>{projects[currentProject].date}</SC.Date>
        </SC.TitleCon>
      </SC.ImageCon>
      <SC.BottomCon>
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
    </section>
  );
};

export default Projects;
