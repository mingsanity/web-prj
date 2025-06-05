/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import HeaderMain from '../components/header-main';
import Navbar from '../components/navbar';
import SearchBar from '../components/search-bar';
import PostGrid from '../components/post-grid';
import { useGetPosts } from './api/use-get-posts';

const Home = () => { // Receive allPosts as prop
  const [searchTerm, setSearchTerm] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const { getPosts } = useGetPosts()

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <HeaderMain />
      <Navbar />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PostGrid searchTerm={searchTerm} posts={allPosts} /> {/* Pass posts to PostGrid */}
    </>
  );
};

export default Home;