import { useEffect, useState } from "react";
import api from "../api";
import moment from "moment";
import styled from "styled-components";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import Header from "../Components/Header/Header";
import { AiTwotoneLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

// const Card = styled.div`
//   display: flex;
//   width: 60%;
//   height: auto;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 70px;
//   background: #ffffcc;
//   padding: 30px;
//   padding-bottom: 50px;
//   border: 1px solid black;
//   border-radius: 10px;
// `;

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    overflow-x: hidden;
  }
`;

const CardApp = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  background: #ffffcc;
  padding: 30px;
  /* padding-bottom: 30px; */
  border: 1px solid black;
  border-radius: 10px;
  /* flex-direction: row; */

  @media screen and (max-width: 800px) {
    width: 75%;
    margin-top: -5px;
  }
`;

const TitleContainer = styled.h1`
  @media screen and (max-width: 800px) {
    font-size: 22px;
    text-align: center;
  }
`;

const TextContainer = styled.p`
  text-indent: 20px;
  text-align: justify;
  width: 80%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Data = styled.p`
  margin-left: -255px;

  @media screen and (max-width: 800px) {
    margin-left: 165px;
    margin-top: -2px;
  }
`;

const Author = styled.p`
  text-indent: 20px;
  text-align: justify;
  width: 80%;
  /* margin-left: 60px; */

  @media screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    margin-left: 0px;
    justify-content: center;

    /* width: 800px; */
    /* background: yellow; */
  }
`;

const ContainerAuthor = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  /* margin-left: 85px; */

  @media screen and (max-width: 800px) {
    width: 25rem;
    flex-direction: column;
    margin-left: -25px;
  }
`;

const ContainerLikes = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    margin-left: -5px;
  }
`;

const Likes = styled.p`
  display: flex;
  margin-top: 10px;
  margin-left: -5px;
`;

const ViewsContainer = styled.div`
  display: flex;
  /* margin-left: -50px; */
  font-size: 16px;
  margin-top: -5px;

  @media screen and (max-width: 800px) {
  }
`;

const Views = styled.span`
  display: flex;
  font-size: 16px;
  margin-left: 4px;
  margin-bottom: 2px;
  margin-top: 1px;
`;

const WrapperLikesViews = styled.div`
  display: flex;
  align-items: center;
  margin-left: -7px;

  @media screen and (max-width: 800px) {
    margin-left: -27px;
  }
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
    PostViews();
  }, []);

  return (
    <AppContainer>
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
        <h2>POST</h2>
        {/* {postId} */}
        <CardApp key={post.id}>
          <TitleContainer>{post.title}</TitleContainer>

          <img src={post.image} width="300" alt={post.title} />
          {/* <p>{post.description}</p> */}

          {/* <p
            style={{
              textIndent: "20px",
              textAlign: "justify",
              width: "80%",
            }}
          >
            {post.text}
          </p> */}
          <TextContainer>{post.text}</TextContainer>
          <ContainerAuthor>
            <Author>Autor: {post.author}</Author>
            {/* <p style={{ marginLeft: "320px" }}> */}
            {/* <Data style={{ marginLeft: "185px" }}> */}
            <Data>{getDateWithoutTime(post.createdAt)}</Data>
          </ContainerAuthor>
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
              <WrapperLikesViews disabled>
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
                    }}
                    // disabled={true}
                  />
                </button>
                <Likes>{likes}</Likes>
              </WrapperLikesViews>
            ) : (
              <ContainerLikes
              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   justifyContent: "center",
              //   flexDirection: "row",
              // }}

              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   marginLeft: "8px",
              //   cursor: "pointer",
              // }}
              >
                <button
                  onClick={PostlIkes}
                  style={{
                    background: "none",
                    marginLeft: "-22px",
                    border: "none",
                  }}
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

                <Likes
                // style={{
                //   display: "flex",
                //   marginLeft: "-2px",
                //   marginTop: "10px",
                // }}
                >
                  {likes}
                </Likes>
              </ContainerLikes>
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
              <ViewsContainer
              // style={{
              //   marginLeft: "10px",
              //   fontSize: "18px",
              //   marginTop: "-10px",
              // }}
              >
                Views:
                <Views
                // style={{
                //   fontSize: "22px",
                //   marginLeft: "2px",
                //   marginBottom: "2px",
                // }}
                >
                  {views}
                </Views>
              </ViewsContainer>
            </div>
          </div>
        </CardApp>
      </div>
    </AppContainer>
  );
}

export default Post;
