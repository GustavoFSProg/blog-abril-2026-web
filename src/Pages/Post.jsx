import { useEffect, useState } from "react";
import api from "../api";
import moment from "moment";
import styled from "styled-components";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import Header from "../Components/Header/Header";
import { AiTwotoneLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

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
  const [likesOpen, setLikesOpen] = useState(false);
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  // const [clicked, setClicked] = useState(false);

  async function PostlIkes() {
    try {
      const { data } = await api.put(`/likes/${postId}`);

      if (!data) {
        return alert("Erro ao curtir o post");
      }

      setLikes(data.likes);

      setLikesOpen(true);

      // window.location.reload();

      getPost();

      return console.log(likes);
    } catch (error) {
      return alert(error);
    }
  }

  async function PostViews() {
    const { data } = await api.put(`/views/${postId}`);

    if (!data) {
      return alert("Erro ao registrar a view");
    }

    setViews(data.views);

    // window.location.reload();

    return console.log(views);
  }

  async function getPost() {
    try {
      const { data } = await api.get(`/get-one-post/${postId}`);

      setPost(data);

      setLikes(data.likes);

      PostViews();

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
            {likesOpen === true ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "8px",
                }}
                disabled
              >
                <button
                  style={{
                    background: "none",
                    // cursor: "pointer",
                    border: "none",
                  }}
                  disabled
                >
                  <AiFillLike
                    style={{
                      color: "lightgray",
                      fontSize: "26px",
                      // cursor: "pointer",

                      marginTop: "-10px",
                      marginLeft: "-2px",
                    }}
                    // disabled={true}
                  />
                </button>
                <p style={{ display: "flex", marginTop: "10px" }}>{likes}</p>
              </div>
            ) : (
              <div
                // style={{
                //   display: "flex",
                //   alignItems: "center",
                //   justifyContent: "center",
                //   flexDirection: "row",
                // }}

                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "8px",
                  cursor: "pointer",
                }}
              >
                <button
                  onClick={PostlIkes}
                  style={{ background: "none", border: "none" }}
                >
                  <AiTwotoneLike
                    style={{
                      color: "blue",
                      fontSize: "26px",
                      cursor: "pointer",
                      marginTop: "-10px",
                    }}
                    // disabled={true}
                  />
                </button>

                <p
                  style={{
                    display: "flex",
                    marginLeft: "-2px",
                    marginTop: "10px",
                  }}
                >
                  {likes}
                </p>
              </div>
            )}

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
                  {views}
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
