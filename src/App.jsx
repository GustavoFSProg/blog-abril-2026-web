import { useEffect, useState } from "react";
import api from "./api";
import moment from "moment";

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
          // marginLeft: "-150px",
        }}
      >
        {/* <div> */}
        {posts.map((item) => (
          <div
            style={{
              display: "flex",
              width: "60%",
              height: "auto",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // marginLeft: "-150px",
              marginTop: "70px",
            }}
            key={item.id}
          >
            <h1>{item.title}</h1>
            <img src={item.image} width="300" alt={item.title} />
            {/* <p>{item.description}</p> */}
            <p
              style={{
                textIndent: "20px",
                textAlign: "justify",
                width: "80%",
              }}
            >
              {item.text}
            </p>
            <p style={{ marginLeft: "510px" }}>
              {getDateWithoutTime(item.createdAt)}
            </p>
          </div>
        ))}
      </div>
      {/* </div> */}

      <div className="ticks"></div>
      <section id="spacer"></section>
    </div>
  );
}

export default App;
