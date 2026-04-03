import { useEffect, useState } from "react";
import api from "./api";

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

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <section id="center">
        <div className="hero">
          {posts.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.image} width="300" alt={item.title} />
              <p>{item.description}</p>
              <p>{item.text}</p>
              <p>{item.createdAt}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
