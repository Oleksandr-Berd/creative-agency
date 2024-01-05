import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const CommonCon = styled.section<IStyles>`
  padding-top: ${(props) => props.size};

  background: url(${(props) => props.bg});
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    padding-top: 77px;
    padding-bottom: 150px;
    padding-left: 39px;
    padding-right: 331px;

    text-align: left;

    background-position: right;
    background-size: 60% 100%;
  }

  @media (min-width: 1440px) {
    padding-top: 112px;
    padding-bottom: 160px;
    padding-left: 165px;
    padding-right: 722px;

    background-size: auto;
  }
`;

export const ContentCon = styled.div`
  padding-top: 56px;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 15px;

  font-family: "ComExtraBold";
  font-size: 40px;

  color: #000;

  @media (min-width: 768px) {
    margin-bottom: 19px;

    font-size: 56px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 39px;

    font-size: 80px;
    line-height: 1.1;
  }
`;

export const Body = styled.p`
  margin-bottom: 40px;

  font-family: "ComReg";
  font-size: 15px;
  line-height: 1.67;

  color: #000;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media (min-width: 1440px){
margin-bottom: 48px;

    font-size: 18px;
    line-height: 1.78;
  }
`;
