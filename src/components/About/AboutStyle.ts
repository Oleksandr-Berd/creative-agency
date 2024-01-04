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
`;

export const ContentCon = styled.div`
  padding-top: 56px;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px){
    padding: 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 15px;

  font-family: "ComExtraBold";
  font-size: 40px;

  color: #000;

  @media (min-width: 768px){
    margin-bottom: 19px;

    font-size: 56px;
  }
`;

export const Body = styled.p`
  margin-bottom: 40px;

  font-family: "ComReg";
  font-size: 15px;
  line-height: 1.67;

  color: #000;

  @media (min-width: 768px){
    margin-bottom: 32px;
  }
`;
