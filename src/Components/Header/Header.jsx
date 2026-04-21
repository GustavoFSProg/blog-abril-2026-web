import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 64px;
  align-items: center;
  justify-content: center;
  background: #3d7bcc;
  color: yellow;
`;

const ContainerLink = styled.div`
  display: flex;
  width: 70%;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  //   background: "green",
  color: yellow;
  font-size: 15px;
  color: yellow;
`;

function Header() {
  return (
    <Container>
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
