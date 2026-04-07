import { useEffect, useState } from "react";
import api from "../api";
import moment from "moment";
import styled from "styled-components";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import Header from "../Components/Header/Header";
import { AiTwotoneLike } from "react-icons/ai";

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
  padding-bottom: 50px;
  border: 1px solid black;
  border-radius: 10px;
  /* flex-direction: row; */
`;

function Post() {
  const postId = localStorage.getItem("POST-ID");
  const [post, setPost] = useState({});

  async function getPost() {
    try {
      const { data } = await api.get(`/get-one-post/${postId}`);

      setPost(data);

      return console.log(post);
    } catch (error) {
      return alert(error);
    }
  }

  function getDateWithoutTime(date) {
    return moment(date).format("DD-MM-YYYY");
  }

  useEffect(() => {
    getPost();
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
          marginBottom: "150px",
        }}
      >
        <h1>POST</h1>
        {/* {postId} */}
        <Card key={post.id}>
          <h1>{post.title}</h1>

          <img src={post.image} width="300" alt={post.title} />
          {/* <p>{post.description}</p> */}

          <p
            style={{
              textIndent: "20px",
              textAlign: "justify",
              width: "80%",
            }}
          >
            {post.text}
          </p>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <p style={{ marginLeft: "-5px" }}>Autor: {post.author}</p>
            {/* <p style={{ marginLeft: "320px" }}> */}
            <p style={{ marginLeft: "185px" }}>
              {getDateWithoutTime(post.createdAt)}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              marginLeft: "180px",
              // justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <AiTwotoneLike
                style={{
                  color: "blue",
                  fontSize: "23px",
                  marginLeft: "5px",
                  marginTop: "-10px",
                }}
              />

              <span
                style={{
                  marginBottom: "10px",
                  marginTop: "2px",
                  marginLeft: "2px",
                  fontSize: "22px",
                }}
              >
                {post.likes}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginLeft: "20px",
              }}
            >
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "18px",
                  marginTop: "-10px",
                }}
              >
                VIEWS:
                <span
                  style={{
                    fontSize: "22px",
                    marginLeft: "2px",
                    marginBottom: "2px",
                  }}
                >
                  {post.views}
                </span>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Post;
