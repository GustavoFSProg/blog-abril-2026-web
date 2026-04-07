// import { useEffect, useState } from "react";
// import api from "./api";
// import moment from "moment";
// import styled from "styled-components";

import Header from "../Components/Header/Header";

function Post() {
  // const [posts, setPosts] = useState([]);

  // async function getPosts() {
  //   try {
  //     const { data } = await api.get("/get-posts");

  //     setPosts(data);

  //     return console.log(posts);
  //   } catch (error) {
  //     return alert(error);
  //   }
  // }

  // function getDateWithoutTime(date) {
  //   return moment(date).format("DD-MM-YYYY");
  // }

  // useEffect(() => {
  //   getPosts();
  // }, []);

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
        <h1>POST</h1>
      </div>
    </>
  );
}

export default Post;
