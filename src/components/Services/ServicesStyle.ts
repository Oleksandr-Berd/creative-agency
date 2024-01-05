import styled from "@emotion/styled";
import { IStyles } from "../../utils/interfaces";

export const CommonCon = styled.section<IStyles>`
  padding-top: ${(props) => props.size};

  background: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
    position: relative;

    padding: 0;

    background-size: 50% auto;
  }
`;

export const IntroCon = styled.div<Partial<IStyles>>`
  padding-top: 72px;
  padding-bottom: 72px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #191921;

  @media (min-width: 768px) {
    position: relative;

    width: 51%;

    margin-left: auto;

    padding-top: 120px;
    padding-bottom: 240px;
    padding-left: 69px;
    padding-right: 40px;

    text-align: left;

    &:before {
      content: url(${(props) => props.bg});
      position: absolute;
      z-index: 1;

      transform: translateX(-100px) translateY(25px);
    }
  }

  @media (min-width: 1440px) {
    padding-top: 200px;
    padding-bottom: 400px;
    padding-left: 154px;
    padding-right: 106px;

    &:before {
      content: url(${(props) => props.bg});
      position: absolute;
      z-index: 1;

      transform: translateX(-220px) translateY(25px);
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  font-family: "ComExtraBold";
  font-size: 32px;
  line-height: 1.25;

  color: #fff;

  & > span {
    color: #f94f4f;
  }

  @media (min-width: 768px) {
    width: 50%;

    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 43px;

    font-size: 56px;
    line-height: 1.14;
  }
`;

export const Body = styled.p`
  margin-bottom: 40px;

  font-family: "ComReg";
  font-size: 15px;
  line-height: 1.67;

  color: #fff;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 48px;

    font-size: 18px;
    line-height: 1.78;
  }
`;

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

  @media (min-width: 1440px) {
    font-size: 18px;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover,
    &:focus {
      color: #ff9393;
      border-bottom: solid 2px #ff9393;

      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;

export const ServiceListCon = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #f94f4f;
  color: #fff;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    padding-top: 0;
    padding-bottom: 431px;
    padding-left: 39px;
    padding-right: 0;

    background-color: #f2f2f2;
    color: #000;
  }

  @media (min-width: 1440px) {
    padding-bottom: 368px;  
    padding-left: 165px;
  }
`;

export const ServicesList = styled.ul`
  background-color: #f94f4f;
  color: #fff;

  @media (min-width: 768px) {
    position: absolute;

    bottom: 0;
    right: 0;

    /* transform: translateY(-40px); */

    width: 62%;

    padding-top: 164px;
    padding-bottom: 120px;
    padding-left: 43px;
    padding-right: 40px;
  }

  @media (min-width: 1440px) {
    padding-top: 200px;
    padding-bottom: 200px;
    padding-left: 285px;
    padding-right: 106px;
  }
`;

export const ListTitle = styled.h3`
  margin-bottom: 93px;

  font-family: "ComExtraBold";
  font-size: 32px;
  line-height: 1.25;

  @media (min-width: 768px) {
    width: 43%;

    padding-top: 126px;

    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
position: relative;
z-index: 2;

    padding-top: 200px;

    font-size: 56px;
    line-height: 1.14;
  }
`;

export const Item = styled.li`
  position: relative;

  padding-left: calc(40px - 24px);

  &:not(:last-child) {
    margin-bottom: 84px;
  }

  @media (min-width: 1440px) {
    padding-left: 0;

    &:not(:last-child) {
      margin-bottom: 100px;
    }
  }
`;

export const Count = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  transform: translateY(-50%);

  font-family: "ComExtraBold";
  font-size: 80px;
  line-height: 1.1;

  color: rgba(255, 255, 255, 0.3);

  @media (min-width: 1440px){
  transform: translateX(-65%) translateY(-50%);

  }
`;

export const ItemTitle = styled.h4`
  margin-bottom: 15px;

  font-family: "ComExtraBold";
  font-size: 15px;
  line-height: 1.67;

  @media (min-width: 1440px) {
    margin-bottom: 24px;

    font-size: 20px;
    line-height: 1.6;
  }
`;

export const ItemBody = styled.p`
  font-family: "ComReg";
  font-size: 15px;
  line-height: 1.67;

  @media (min-width: 1440px){
    font-size: 18px;
    line-height: 1.78;
  }
`;
