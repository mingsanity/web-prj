import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const { id } = useParams(); // Lấy id người dùng từ URL
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  // const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    document.title = 'Trang cá nhân - Cookbook';

    const fetchUserData = async () => {
      try {
        // Gửi yêu cầu API để lấy thông tin người dùng
        const response = await fetch(`/api/user/${id}`, { credentials: 'include' });
        const data = await response.json();

        if (data.success && data.data) {
          setUser(data.data); // Lưu thông tin người dùng vào state
        } else {
          console.warn('Không tìm thấy thông tin người dùng');
        }
      } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
      }
    };
    fetchUserData();
  }, [id]);

  if (!user) return <div className="loading-state">Đang tải hồ sơ...</div>; // Chờ khi dữ liệu đang được tải

  return (
    <div className="user-profile-container">
      <div className="user-header-banner" style={{ backgroundImage: `url(${user.backgroundUrl})` }}>
        <img src={user.avatarUrl} alt={user.displayName} className="user-avatar-large" />
      </div>

      <div className="user-info-section">
        <div className="user-main-details">
          <h2>{user.displayName}</h2>
          <p className="user-handle">{user.email}</p>  {/* Hiển thị email */}
          <p className="user-bio">{user.bio.currentPlaces.join(', ') || 'Chưa cập nhật thông tin'}</p>  {/* Hiển thị thông tin bio */}
        </div>

        <div className="user-actions">
          <button
            className="edit-profile-btn"
            onClick={() => navigate('/edit-profile')}
          >
            Chỉnh sửa trang cá nhân
          </button>
          <button
            className={`follow-btn ${isFollowing ? 'following' : ''}`}
            onClick={() => setIsFollowing(!isFollowing)}  // Toggle follow state
          >
            {isFollowing ? 'Đang theo dõi' : 'Theo dõi'}
          </button>
        </div>
      </div>

      {/* Nội dung bài viết, series, lưu trữ, etc. */}
    </div>
  );
};

export default UserProfile;

