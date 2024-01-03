import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const CommonCon = styled.section<IStyles>`
padding-top: ${props => props.size};

background: url(${props => props.bg});
background-repeat: no-repeat;
background-size: contain;
`

export const IntroCon = styled.div`
padding-top: 72px;
padding-bottom: 72px;
padding-left: 24px;
padding-right: 24px;

background-color: #191921;
`

export const Title = styled.h2`
margin-bottom: 24px;

font-family: "ComExtraBold";
font-size: 32px;
line-height: 1.25;

color: #fff;

& > span{
    color: #f94f4f
}
`

export const Body = styled.p`
margin-bottom: 40px;

font-family: "ComReg";
font-size: 15px;
line-height: 1.67;

color: #fff;
`

export const CallBtn = styled.button`
display: inline;

padding: 0;
padding-bottom: 9px;

font-family: "ComExtraBold";
font-size: 15px;

background-color: transparent;
color: #f94f4f;

border: none;

border-bottom: solid 2px #f94f4f;
`

export const ServicesList = styled.ul`
padding-top: 96px;
padding-bottom: 96px;
padding-left: 24px;
padding-right: 24px;

background-color: #f94f4f;
color: #fff;
`

export const ListTitle = styled.h3`
margin-bottom: 93px;

font-family: "ComExtraBold";
font-size: 32px;
line-height: 1.25;
`

export const Item = styled.li`
position: relative;

padding-left: calc(40px - 24px);

&:not(:last-child){
    margin-bottom: 84px;
}
`

export const Count = styled.span`
position: absolute;
top: 0;
left: 0;

transform: translateY(-50%);

font-family: "ComExtraBold";
font-size: 80px;
line-height: 1.1;

color: rgba(255, 255, 255, 0.3);
`

export const ItemTitle = styled.h4`
margin-bottom: 15px;

font-family: "ComExtraBold";
font-size: 15px;
line-height: 1.67;
`

export const ItemBody = styled.p`
font-family: "ComReg";
font-size: 15px;
line-height: 1.67;
`