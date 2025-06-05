import React from 'react';
import { Link } from 'react-router-dom';
import './PostGrid.css'; // Đảm bảo file CSS này được import đúng

// Nhận posts và searchTerm làm props
const PostGrid = ({ posts, searchTerm }) => {
  // Nếu posts không được cung cấp, mặc định là một mảng rỗng để tránh lỗi
  const displayPosts = posts || [];

  // Lọc bài viết dựa trên searchTerm
  const filteredPosts = displayPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="post-grid-section">
      <h2>Bài viết nổi bật</h2>
      <div className="grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <Link to={`/post/${post.id}`} key={post.id} className="post-card-item">
              <img src={post.img} alt={post.title} className="post-card-image" />
              <div className="post-card-info">
                <p className="post-card-time">{post.time}</p>
                <h3 className="post-card-title">{post.title}</h3>
                <p className="post-card-author">{post.author} • {post.views}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-results-message">Không tìm thấy bài viết nào phù hợp.</p>
        )}
      </div>
    </section>
  );
};

export default PostGrid;