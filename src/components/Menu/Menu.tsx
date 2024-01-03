import * as SC from './MenuStyled'

import {navBar} from '../../db/navBar'
import LinkBtn from '../../ui/LinkBtn/LinkBtn';
import { IMenu } from '../../utils/interfaces';

const Menu:React.FC<Partial<IMenu>> = ({toggleMenu}) => {
  return (
    <SC.MenuStyled>
      <nav>
        {navBar.map(({id, path, name}) => <SC.Items key={id} onClick={toggleMenu}><a href={path}>{name}</a></SC.Items>)}
      </nav>
      <LinkBtn path='#' content='Schedule a Call'/>
    </SC.MenuStyled>
  );
};

export default Menu;
