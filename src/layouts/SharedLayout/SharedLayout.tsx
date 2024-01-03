import { useState } from "react";

import * as SC from './SharedLayoutStyled'

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../../components/Menu/Menu";

type Props = {
  children: React.ReactNode;
};

const SharedLayout: React.FC<Props> = ({ children }) => {
const [isMenu, setIsMenu] = useState(false)

const toggleMenu = () => {

    setIsMenu(!isMenu)
}

  return (
    <SC.LayoutStyled>
      <Header toggleMenu={toggleMenu} isMenu={isMenu}/>
      {isMenu ? <Menu toggleMenu={toggleMenu}/> : null}
      {children}
      <Footer/>
    </SC.LayoutStyled>
  );
};

export default SharedLayout;
