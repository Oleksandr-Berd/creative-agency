import * as SC from "./BurgerMenuStyle";

import { ReactComponent as BurgerSVG } from "../../assets/images/mobile/icon-hamburger.svg";
import {ReactComponent as ClosedIcon} from '../../assets/images/mobile/icon-cross.svg'
import { IMenu } from "../../utils/interfaces";



const BurgerMenu: React.FC<IMenu> = ({toggleMenu, isMenu}) => {
  return (
    <SC.BurgerBtn onClick={toggleMenu}>
      {isMenu ? <ClosedIcon/> : <BurgerSVG/>}
    </SC.BurgerBtn>
  );
};

export default BurgerMenu;
