import styled from "@emotion/styled";
import { ILink } from "../../utils/interfaces";

export const LinkBtnStyled = styled.a<Partial<ILink>>`
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 40px;
  padding-right: 41px;

  font-family: "ComExtraBold";
  font-size: 18px;

  background-color: #f94f4f;
  color: #fff;

  @media (min-width: 768px) {
    padding-top: ${(props) =>
      props.position === "header" ? "23px" : "footer" ? "23px" : "25px"};
    padding-bottom: ${(props) =>
      props.position === "header" ? "22px" : "footer" ? "21px" : "25px"};
    padding-left: ${(props) =>
      props.position === "header" ? "19px" : "footer" ? "45px" : "40px"};
    padding-right: ${(props) =>
      props.position === "header" ? "18px" : "footer" ? "44px" : "41px"};

    background-color: ${(props) =>
      props.position === "header" ? "#191921" : "#f94f4f"};

    font-size: ${(props) =>
      props.position === "header" || props.position === "footer"
        ? "16px"
        : "18px"};
  }

  @media (min-width: 1440px) {
    padding-left: ${(props) =>
      props.position === "header" || props.position === "footer"
        ? "45px"
        : "40px"};
    padding-right: ${(props) =>
      props.position === "header" || props.position === "footer"
        ? "44px"
        : "41px"};

    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover,
    &:focus {
      background-color: ${(props) =>
        props.position === "header" ? "#434356" : "#ff9393"};
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;
