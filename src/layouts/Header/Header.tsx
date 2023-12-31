import { useMediaQuery } from "usehooks-ts";

import * as SC from "./HeaderStyle";

import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Logo from "../../components/Logo/Logo";
import { IMenu } from "../../utils/interfaces";
import Menu from "../../components/Menu/Menu";

const Header: React.FC<IMenu> = ({ toggleMenu, isMenu }) => {
  const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <SC.HeaderStyled>
     
          <Logo />
          {isTablet ? <Menu position="header"/> : <BurgerMenu toggleMenu={toggleMenu} isMenu={isMenu} />}
        
    </SC.HeaderStyled>
  );
};

export default Header;
