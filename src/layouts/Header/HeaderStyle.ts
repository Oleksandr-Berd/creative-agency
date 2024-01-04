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
    padding-top: 57px;
    padding-bottom: 57px;
    padding-left: 39px;
    padding-right: 40px;

    background: linear-gradient(to right, rgb(242, 242, 242) 40%, rgb(249, 79, 79) 40%);

}
`

