import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgMenuGridR } from "react-icons/cg";
import { useState } from "react";

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

const ContainerLinkMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  font-size: 14px;
  width: 50%;
  margin-left: -42px;
  text-align: left;
  cursor: pointer;

  /* 
  @media screen and (max-width: 800px) {
  } */
`;

const MenuContainer = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: flex;
  }
`;

const H3 = styled.h3`
  /* display: none; */
  margin-bottom: -2px;
  font-size: 18px;
  margin-left: 12px;
  @media screen and (max-width: 850px) {
    display: flex;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Container>
        <MenuContainer>
          <CgMenuGridR
            size="34"
            style={{ cursor: "pointer", marginLeft: "15px" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseLeave={() => setIsMenuOpen(false)}
          />
        </MenuContainer>

        <ContainerLink>
          <Link
            to="/"
            style={{
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <h3>Home</h3>
          </Link>
          <h3>Cadastro</h3>
          <h3>Cadastro</h3>
          <h3>Cadastro</h3>
          <h3>Login</h3>
        </ContainerLink>
      </Container>
      {isMenuOpen ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
            fontSize: "14px",
            background: "green",
            width: "37%",
            marginLeft: "18px",
            height: "auto",
            padding: "5px",
            paddingBottom: "30px",
            borderRadius: "8px",
          }}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <ContainerLinkMobile>
            <Link
              to="/"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
                marginLeft: "-25px",
              }}
            >
              <H3>Home</H3>
            </Link>
            <H3>Cadastro</H3>
            <H3>Cadastro</H3>
            <H3>Cadastro</H3>
            <H3
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
                marginLeft: "-15px",
              }}
            >
              Login
            </H3>
          </ContainerLinkMobile>
        </div>
      ) : null}
    </>
  );
}

export default Header;
