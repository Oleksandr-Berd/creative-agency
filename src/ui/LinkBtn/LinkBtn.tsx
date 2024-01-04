import { ILink } from '../../utils/interfaces';
import * as SC from './LintBtnStyle'

const LinkBtn:React.FC<Partial <ILink>> = ({path, content, position}) => {
    return ( <SC.LinkBtnStyled position={position} href={path}>{content}</SC.LinkBtnStyled> );
}
 
export default LinkBtn;