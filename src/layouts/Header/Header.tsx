import * as SC from "./HeaderStyle";

import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Logo from "../../components/Logo/Logo";

const Header: React.FC = () => {
  return (
    <SC.HeaderStyled>
      <Logo />
      <BurgerMenu />
    </SC.HeaderStyled>
  );
};

export default Header;
