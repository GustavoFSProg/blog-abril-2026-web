import { useEffect, useState } from "react";
import api from "./api";
import moment from "moment";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  display: flex;
  width: 60%;
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
    <>
      <Header />
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
            width: "100%",
            height: "auto",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "50px",
          }}
        >
          {/* <div> */}
          {posts.map((item) => (
            <>
              <Card key={item.id}>
                <h1>{item.title}</h1>
                <Links to="/post" style={{ textDecoration: "none" }}>
                  <img src={item.image} width="300" alt={item.title} />
                  {/* <p>{item.description}</p> */}
                  <p
                    style={{
                      textIndent: "20px",
                      textAlign: "justify",
                      width: "80%",
                    }}
                  >
                    {item.description}
                  </p>
                </Links>
                <p style={{ marginLeft: "510px" }}>
                  {getDateWithoutTime(item.createdAt)}
                </p>
              </Card>
            </>
          ))}
        </div>

        <div className="ticks"></div>
        <section id="spacer"></section>
      </div>
    </>
  );
}

export default App;
