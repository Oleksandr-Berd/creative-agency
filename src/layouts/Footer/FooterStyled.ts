import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
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
`;
