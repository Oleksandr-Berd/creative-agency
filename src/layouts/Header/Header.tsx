import * as SC from "./HeaderStyle";

import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Logo from "../../components/Logo/Logo";
import { IMenu } from "../../utils/interfaces";


const Header: React.FC<IMenu> = ({toggleMenu, isMenu}) => {
  return (
    <SC.HeaderStyled>
      <Logo />
      <BurgerMenu toggleMenu={toggleMenu} isMenu={isMenu}/>
    </SC.HeaderStyled>
  );
};

export default Header;
