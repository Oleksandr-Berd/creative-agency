import * as SC from "./BurgerMenuStyle";

import { ReactComponent as BurgerSVG } from "../../assets/images/mobile/icon-hamburger.svg";

const BurgerMenu: React.FC = () => {
  return (
    <SC.BurgerBtn>
      <BurgerSVG />
    </SC.BurgerBtn>
  );
};

export default BurgerMenu;
