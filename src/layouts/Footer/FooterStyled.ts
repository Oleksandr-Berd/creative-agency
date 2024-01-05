import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const FooterStyled = styled.footer<Partial <IStyles>>`
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-top: 70px;
    padding-bottom: 101px;
    padding-left: 39px;
    padding-right: 40px;
  }

  @media (min-width: 1440px) {
position: relative;

    padding-top: 120px;
    padding-bottom: 115px;
    padding-left: 165px;
    padding-right: 165px;

    &::before{
        content: url(${props => props.bg});
        position: absolute;
        top: 0;
        left: 0;

        transform: translateX(-67px) translateY(154px);
    }
  }
`;

export const Content = styled.h3`
  margin-bottom: 47px;

  font-family: "ComExtraBold";
  font-size: 32px;
  line-height: 1.25;

  @media (min-width: 768px) {
    width: 320px;

    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    width: 635px;

    font-size: 56px;
    line-height: 1.14;
  }
`;
