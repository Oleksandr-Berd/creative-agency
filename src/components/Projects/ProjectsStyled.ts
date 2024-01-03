import styled from "@emotion/styled";

export const ImageCon = styled.div`
position: relative;

background-color: #191921;
`

export const TitleCon = styled.div`
position: absolute;

right: 0;
bottom: 0;

transform: translateX(-32px) translateY(-35px);

text-align: right;
`

export const Title = styled.h3`
font-family: "ComExtraBold";
font-size: 15px;
line-height: 1.33;

color: #fff;
`

export const Date = styled.p`
font-family: "ComReg";
font-size: 15px;
line-height: 1.33;

color: #fff;
`

export const BottomCon = styled.div`
padding-top: 64px;
padding-bottom: 64px;
padding-left: 24px;
padding-right: 24px;

background-color: #191921;
`

export const SectionTitle = styled.h2`
margin-bottom: 24px;

font-family: "ComExtraBold";
font-size: 32px;
line-height: 1.25;

color: #fff;
`

export const ButtonCon = styled.div`

& > *{
    background-color: transparent;
    border: none;
}

& > button:first-of-type{
    margin-right: 16px;
}
`