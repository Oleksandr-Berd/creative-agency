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

export const IntroCon = styled.div<Partial <IStyles>>`
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

    &:before{
        content: url(${props => props.bg});
        position: absolute;
        z-index: 1;
       
        transform: translateX(-100px) translateY(25px);
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
`;

export const ServicesList = styled.ul`
  background-color: #f94f4f;
  color: #fff;

  @media (min-width: 768px) {
    position: absolute;

    bottom: 0;
    right: 0;

    /* transform: translateY(-120px); */

    width: 57%;

    padding-top: 164px;
    padding-bottom: 120px;
    padding-left: 43px;
    padding-right: 40px;
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
`;

export const Item = styled.li`
  position: relative;

  padding-left: calc(40px - 24px);

  &:not(:last-child) {
    margin-bottom: 84px;
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
`;

export const ItemTitle = styled.h4`
  margin-bottom: 15px;

  font-family: "ComExtraBold";
  font-size: 15px;
  line-height: 1.67;
`;

export const ItemBody = styled.p`
  font-family: "ComReg";
  font-size: 15px;
  line-height: 1.67;
`;
