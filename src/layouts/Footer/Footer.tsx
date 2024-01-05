import { useMediaQuery } from 'usehooks-ts';

import * as SC from './FooterStyled'

import redWave from '../../assets/images/desktop/bg-pattern-wave-red.svg'
import LinkBtn from "../../ui/LinkBtn/LinkBtn";

const Footer:React.FC = () => {

const isDesk = useMediaQuery("(min-width:1440px)")

    return ( <SC.FooterStyled bg={isDesk ? redWave : ""}>
        <SC.Content>Let's build something great together.</SC.Content>
        <LinkBtn path="#" content="Schedule a Call" position='footer'/>
    </SC.FooterStyled> );
}
 
export default Footer;