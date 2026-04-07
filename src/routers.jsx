import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./Components/Header/Header";
import Post from "./Pages/Post";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
