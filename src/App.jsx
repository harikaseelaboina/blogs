import React, { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Details = lazy(() => import("./pages/Details"));
const HeaderBlogs = lazy(() => import("./pages/HeaderBlogs"));
const Page404 = lazy(() => import("./pages/Page404"));
const PlayVideo = lazy(() => import("./pages/PlayVideo"));

function App() {
  return (
    // <div className="zoom">
    <div>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* List of blogs page */}
        <Route path="/blogs/:title" element={<Blogs />} />

        {/* Blog details page */}
        <Route path="/details/:id" element={<Details />} />

        {/* List of headerblogs page */}
        <Route path="/headerblogs/:data" element={<HeaderBlogs />} />

        {/* List of headerblogs page */}
        <Route path="/playVideo/*" element={<PlayVideo />} />

        {/* 404 page not found page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
