import { useEffect, useState } from "react";
import api from "./api";
import moment from "moment";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  flex-direction: column;

  @media screen and (max-width: 850px) {
    overflow-x: hidden;
  }
`;

const Card = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  background: #ffffcc;
  padding: 30px;
  /* padding-bottom: 30px; */
  border: 1px solid black;
  border-radius: 10px;
  /* flex-direction: row; */

  @media screen and (max-width: 850px) {
    width: 75%;
  }
`;

const Links = styled(Link)`
  display: flex;
  /* width: 60%; */
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 70px; */
  background: #ffffcc;
  /* padding: 10px; */
  /* border: 1px solid black; */
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  color: black;

  @media screen and (max-width: 850px) {
    width: 90%;
  }
`;

const DecriptionContainer = styled.p`
  text-indent: 20px;
  text-align: justify;
  width: 80%;

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

const Data = styled.p`
  margin-left: -415px;

  @media screen and (max-width: 750px) {
    margin-left: -155px;
  }
`;

const TitleContainer = styled.h1`
  @media screen and (max-width: 850px) {
    font-size: 22px;
    text-align: center;
  }
`;

function App() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const { data } = await api.get("/get-posts");

      setPosts(data);

      return console.log(posts);
    } catch (error) {
      return alert(error);
    }
  }

  function getDateWithoutTime(date) {
    return moment(date).format("DD-MM-YYYY");
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <AppContainer>
      <Header />
      {/* <MenuContainer>
        <CgMenuGridR />
      </MenuContainer> */}
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "auto",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "green",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "auto",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "50px",
            Zindex: "1",
          }}
        >
          {/* <div> */}
          {posts.map((item) => (
            <>
              <Card key={item.id}>
                <TitleContainer>{item.title}</TitleContainer>
                <Links
                  to="/post"
                  onClick={() => localStorage.setItem("POST-ID", item.id)}
                  style={{ textDecoration: "none" }}
                >
                  <img src={item.image} width="300" alt={item.title} />
                  {/* <p>{item.description}</p> */}
                  <DecriptionContainer>{item.description}</DecriptionContainer>
                </Links>
                <Data>{getDateWithoutTime(item.createdAt)}</Data>
              </Card>
            </>
          ))}
        </div>

        <div className="ticks"></div>
        <section id="spacer"></section>
      </div>
    </AppContainer>
  );
}

export default App;
