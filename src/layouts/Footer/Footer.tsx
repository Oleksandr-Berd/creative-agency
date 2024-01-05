import * as SC from './FooterStyled'

import LinkBtn from "../../ui/LinkBtn/LinkBtn";

const Footer:React.FC = () => {
    return ( <SC.FooterStyled>
        <SC.Content>Let's build something great together.</SC.Content>
        <LinkBtn path="#" content="Schedule a Call" position='footer'/>
    </SC.FooterStyled> );
}
 
export default Footer;