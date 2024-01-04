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

  @media (min-width: 768px) {
    position: static;

    transform: translateX(0) translateY(0);

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0;

    background-color: transparent;
  }
`;

export const NavBar = styled.nav`
margin-bottom: 24px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 0;
    margin-right: 28px;
  }
`;

export const Items = styled.li`

&:not(:last-child){
    margin-bottom: 24px;

}

  & > * {
    font-family: "ComReg";
    font-size: 18px;
    line-height: 1.78;

    color: #fff;
  }

  @media (min-width: 768px){

    & > *{
        font-size: 15px;
        line-height: 2.13;
    }

&:not(:last-child){
    margin-bottom: 0;
    margin-right: 20px;
}
}
`;
