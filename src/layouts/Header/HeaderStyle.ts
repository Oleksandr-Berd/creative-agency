import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding-top: 40px;
padding-bottom: 40px;
padding-left: 24px;
padding-right: 24px;

@media (min-width: 768px){
    padding: 0;
}
`

export const TabCommonCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const LogoCon = styled.div`
padding-top: 74px;
padding-left: 39px;

margin-right: 130px;
`