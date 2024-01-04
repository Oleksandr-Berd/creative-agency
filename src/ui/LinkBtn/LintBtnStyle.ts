import styled from "@emotion/styled";
import { ILink } from "../../utils/interfaces";

export const LinkBtnStyled = styled.a<Partial <ILink>>`
padding-top: 25px;
padding-bottom: 25px;
padding-left: 40px;
padding-right: 41px;

font-family: 'ComExtraBold';
font-size: 18px;

background-color: #f94f4f;
color: #fff;

@media (min-width: 768px){
    padding-top: ${props => props.position === "header" ? "23px" : "25px"};
    padding-bottom: ${props => props.position === "header" ? "22px" : "25px"};
    padding-left: ${props => props.position === "header" ? "19px" : "40px"};
    padding-right: ${props => props.position === "header" ? "18px" : "41px"};

    background-color: ${props => props.position === "header" ? "#191921" : "#f94f4f"};

    font-size: ${props => props.position === "header" ? "16px" : "18px"};

}
`