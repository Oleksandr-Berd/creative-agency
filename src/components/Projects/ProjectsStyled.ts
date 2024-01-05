import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const CommonCon = styled.section`
  @media (min-width: 768px) {
    position: relative;

    background-color: #f2f2f2;

    text-align: right;
  }
`;

export const ImageCon = styled.div`
  position: relative;

  background-color: #191921;

  @media (min-width: 768px) {
    display: inline-block;

    width: 57%;

    & > img {
      width: 100%;
    }

    &::before {
      content: " ";
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    }
  }

  @media (min-width: 1440px) {
    width: 62%;
  }
`;

export const TitleCon = styled.div`
  position: absolute;

  right: 0;
  bottom: 0;

  transform: translateX(-32px) translateY(-35px);

  text-align: right;

  @media (min-width: 1440px){
  transform: translateX(-154px) translateY(-68px);

  }
`;

export const Title = styled.h3`
  font-family: "ComExtraBold";
  font-size: 15px;
  line-height: 1.33;

  color: #fff;

  @media (min-width: 1440px){
    font-size: 20px;
    line-height: 1.6;
  }
`;

export const Date = styled.p`
  font-family: "ComReg";
  font-size: 15px;
  line-height: 1.33;

  color: #fff;

  @media (min-width: 1440px){
    font-size: 18px;
    line-height: 1.78;
  }
`;

export const BottomCon = styled.div<Partial<IStyles>>`
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #191921;

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    width: 51%;

    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 39px;

    text-align: left;

    &::after {
      content: url(${(props) => props.bg});
      position: absolute;
      top: 0;
      right: 0;

      transform: translateY(128px) translateX(31px);
    }
  }

  @media (min-width: 1440px) {
    padding-top: 152px;
    padding-bottom: 152px;
    padding-left: 165px;

    &::after {
      content: url(${(props) => props.bg});
      position: absolute;
      top: 0;
      right: 0;

      transform: translateY(186px) translateX(67px);
    }
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 24px;

  font-family: "ComExtraBold";
  font-size: 32px;
  line-height: 1.25;

  color: #fff;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 51px;

    font-size: 56px;
    line-height: 1.14;
  }
`;

export const ButtonCon = styled.div`
  & > * {
    background-color: transparent;
    border: none;
  }

  & > button:first-of-type {
    margin-right: 16px;
  }
`;
