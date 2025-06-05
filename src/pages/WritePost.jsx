import React, { useState, useEffect } from 'react';
import './WritePost.css';

const WritePost = () => {
  useEffect(() => {
    document.title = 'Viết bài mới - Cookbook';
  }, []);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handlePost = () => {
    alert(`Đăng bài: ${title}, ${category}, ${content}`);
    // Gửi dữ liệu lên backend hoặc API sau này
  };

  return (
    <div className="write-post">
      <h2>Viết bài</h2>
      <input
        type="text"
        placeholder="Tiêu đề bài viết"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Danh mục/quyển sách"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <textarea
        placeholder="Nội dung bài viết"
        rows="10"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      {/* Cho phép chèn ảnh */}
      <div className="image-upload">
        <label htmlFor="fileInput">📷 Thêm ảnh</label>
        <input type="file" id="fileInput" accept="image/*" />
      </div>

      {/* Cho phép trích dẫn */}
      <blockquote>“Trích dẫn”</blockquote>

      <button onClick={handlePost}>Đăng bài</button>
    </div>
  );
};

export default WritePost;
