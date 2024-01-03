import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const CommonCon = styled.section<IStyles>`
padding-top: ${props => props.size};


background: url(${props => props.bg});
background-size: contain;
background-repeat: no-repeat;
`

export const ContentCon = styled.div`
padding-top: 56px;
padding-bottom: 96px;
padding-left: 24px;
padding-right: 24px;
`

export const Title = styled.h1`
margin-bottom: 15px;

font-family: "ComExtraBold";
font-size: 40px;

color: #000;
`

export const Body = styled.p`
margin-bottom: 40px;

font-family: "ComReg";
font-size: 15px;
line-height: 1.67;

color: #000;
`

