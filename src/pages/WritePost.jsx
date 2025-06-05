import React, { useState, useEffect } from 'react';
import './WritePost.css';
import { useCreatePost } from './api/use-create-post';
import { useNavigate } from 'react-router-dom';

const WritePost = () => {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Viết bài mới - Cookbook';
  }, []);
  const [title, setTitle] = useState('');
  const [bookName, setBookName] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [bookImage, setBookImage] = useState(null);

  const { createPost } = useCreatePost()

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    setImages([...images, file])
  }

  const handleBookImageUpload = (e) => {
    const file = e.target.files[0]
    setBookImage(file)
  }

  const handlePost = () => {
    createPost({ title, bookName, content, images, bookImage })
    alert('Đăng bài thành công')
    navigate('/home')
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
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <textarea
        placeholder="Nội dung bài viết"
        rows="10"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <div className="image-upload">
        <label htmlFor="fileInput-post">📷 Thêm ảnh bài viết</label>
        <input type="file" id="fileInput-post" accept="image/*" onChange={handleImageUpload} />
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px'}}>
          {images.map((image, index) => (
            <img src={URL.createObjectURL(image)} alt="Thumbnail" key={index} style={{width: '100px', height: '100px', objectFit: 'cover'}} />
          ))}
        </div>
      </div>

      {/* Cho phép chèn ảnh */}
      <div className="image-upload">
        <label htmlFor="fileInput-book">📷 Thêm ảnh sách</label>
        <input type="file" id="fileInput-book" accept="image/*" onChange={handleBookImageUpload} />
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px'}}>
          {bookImage && <img src={URL.createObjectURL(bookImage)} alt="Thumbnail" style={{width: '100px', height: '100px', objectFit: 'cover'}} />}
        </div>
      </div>

      <button onClick={handlePost}>Đăng bài</button>
    </div>
  );
};

export default WritePost;
