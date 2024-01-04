import * as SC from './MenuStyled'

import {navBar} from '../../db/navBar'
import LinkBtn from '../../ui/LinkBtn/LinkBtn';
import { ILink, IMenu } from '../../utils/interfaces';

const Menu:React.FC<Partial<IMenu> & Partial <ILink>> = ({toggleMenu, position}) => {
  return (
    <SC.MenuStyled>
      <SC.NavBar>
        {navBar.map(({id, path, name}) => <SC.Items key={id} onClick={toggleMenu}><a href={path}>{name}</a></SC.Items>)}
      </SC.NavBar>
      <LinkBtn path='#' content='Schedule a Call' position={position}/>
    </SC.MenuStyled>
  );
};

export default Menu;
