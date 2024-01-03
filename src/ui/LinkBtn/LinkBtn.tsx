import { ILink } from '../../utils/interfaces';
import * as SC from './LintBtnStyle'

const LinkBtn:React.FC<ILink> = ({path, content}) => {
    return ( <SC.LinkBtnStyled href={path}>{content}</SC.LinkBtnStyled> );
}
 
export default LinkBtn;