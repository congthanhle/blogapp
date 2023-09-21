/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useLocation } from "react-router";

const BaseURL = "http://localhost:5000";

export default function Home() {
  const [Posts, set_posts] = useState([]);
  const { Search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${BaseURL}/posts` + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [Search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={Posts} />
        <Sidebar />
      </div>
    </>
  );
}
