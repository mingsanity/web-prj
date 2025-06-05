import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import UserProfile from './pages/UserProfile';
import WritePost from './pages/WritePost';
import EditProfile from './pages/EditProfile';

function App() {
  // Centralized post data
  const [allPosts] = useState([
    { id: 1, title: 'John Nash - Thuyết trò chơi', img: '/thumbnail/thumbnail1.jpg', author: 'Nhat Minh', views: '106N lượt xem', time: '16 phút đọc' },
    { id: 2, title: 'Blockchain Việt Nam: 1Matrix & Make in Vietnam', img: '/thumbnail/thumbnail2.jpeg', author: 'Anh Duy', views: '12N lượt xem', time: '18 phút đọc' },
    { id: 3, title: 'Yếu tố quốc gia siêu cường?', img: '/thumbnail/thumbnail3.jpg', author: 'Viet Quang', views: '50N lượt xem', time: '22 phút đọc' },
    { id: 4, title: 'Chúng ta là chúng ta?', img: '/thumbnail/thumbnail4.jpg', author: 'Minh Duc', views: '13N lượt xem', time: '14 phút đọc' },
    { id: 5, title: 'Minh học được gì từ 1121 phút tìm hiểu', img: '/thumbnail/thumbnail5.jfif', author: 'Minh Triết', views: '30N lượt xem', time: '14 phút đọc' },
    { id: 6, title: 'Vì trùng phản công', img: '/thumbnail/thumbnail6.jpeg', author: 'Chúa Cao Su', views: '23N lượt xem', time: '22 phút đọc' },
    { id: 7, title: 'Tại sao thế hệ trước không bị trầm cảm?', img: '/thumbnail/thumbnail7.webp', author: 'Baram01', views: '35N lượt xem', time: '18 phút đọc' },
    { id: 8, title: 'Chân thành là sức mạnh', img: '/thumbnail/thumbnail8.jfif', author: 'Eternal Mind', views: '22N lượt xem', time: '16 phút đọc' },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        {/* Pass allPosts to Home */}
        <Route path="/home" element={<Home allPosts={allPosts} />} />
        <Route path="/post/:id" element={<PostDetail allPosts={allPosts} />} /> {/* PostDetail might also need allPosts */}
        {/* Pass allPosts to UserProfile */}
        <Route path="/user/:id" element={<UserProfile allPosts={allPosts} />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;