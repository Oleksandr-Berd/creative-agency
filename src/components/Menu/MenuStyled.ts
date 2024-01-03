import styled from "@emotion/styled";

export const MenuStyled = styled.menu`
  position: absolute;
  top: 0;
  right: 0;

  z-index: 1;

transform: translateX(-26px) translateY(114px);


  display: inline-block;

  padding-top: 32px;
  padding-bottom: 28px;
  padding-left: 27px;
  padding-right: 26px;

  margin: 0;

  text-align: center;

  background-color: #191921;
`;

export const Items = styled.li`
margin-bottom: 24px;

& > *{
    font-family: "ComReg";
    font-size: 18px;
    line-height: 1.78;

    color: #fff;
}
`
