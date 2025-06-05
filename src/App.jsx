import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import UserProfile from './pages/UserProfile';
import WritePost from './pages/WritePost';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/user/:id" element={<UserProfile  />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;