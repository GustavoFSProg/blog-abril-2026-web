import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgMenuGridR } from "react-icons/cg";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 64px;
  align-items: center;
  justify-content: center;
  background: #3d7bcc;
  color: yellow;

  @media screen and (max-width: 800px) {
    width: 100%;
    /* height: auto; */
    align-items: center;
    justify-content: flex-start;
  }
`;

const ContainerLink = styled.div`
  display: flex;
  width: 70%;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: yellow;

  @media screen and (max-width: 800px) {
    /* width: 100%;
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center; */
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: flex;
  }
`;

function Header() {
  return (
    <Container>
      <MenuContainer>
        <CgMenuGridR
          size="34"
          style={{ cursor: "pointer", marginLeft: "15px" }}
        />
      </MenuContainer>
      <ContainerLink>
        <Link
          to="/"
          style={{ cursor: "pointer", textDecoration: "none", color: "yellow" }}
        >
          <h3>Home</h3>
        </Link>
        <h3>Cadastro</h3>
        <h3>Cadastro</h3>
        <h3>Cadastro</h3>
        <h3>Login</h3>
      </ContainerLink>
    </Container>
  );
}

export default Header;
