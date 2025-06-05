import React, { useState } from 'react';
import HeaderMain from '../components/HeaderMain';
import Navbar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import PostGrid from '../components/PostGrid';

const Home = ({ allPosts }) => { // Receive allPosts as prop
  const [searchTerm, setSearchTerm] = useState('');

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