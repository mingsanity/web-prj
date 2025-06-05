import React, { useState, useEffect } from 'react';
import './HeaderMain.css';
import { useNavigate } from 'react-router-dom';

function HeaderMain() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State để lưu thông tin người dùng

  const userId = '68387f23abaaed7fedd2c28e'; // Giả sử bạn lấy userId từ localStorage hoặc từ state đăng nhập

  useEffect(() => {
    // Lấy dữ liệu người dùng từ backend sau khi đăng nhập
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user/${userId}`, { credentials: 'include' });
        const data = await response.json();

        if (data.success && data.data) {
          setUser(data.data); // Lưu dữ liệu người dùng vào state
        } else {
          console.warn('Không tìm thấy thông tin người dùng');
        }
      } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
      }
    };

    fetchUserData();
  }, [userId]); // Chỉ gọi khi userId thay đổi

  const [showMenu, setShowMenu] = useState(false);

  const handleAvatarClick = () => {
    setShowMenu(!showMenu); // Đảo ngược trạng thái menu
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Xóa thông tin người dùng trong localStorage
    navigate('/login'); // Điều hướng về trang đăng nhập
  };

  const handleProfileClick = () => {
    navigate(`/user/${userId}`); // Điều hướng đến trang cá nhân của user
  };

  if (!user) return null; // Nếu chưa có thông tin người dùng, không hiển thị gì

  return (
    <header className="header-main">
      <div className="header-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand-name">Cookbook</span>
      </div>
      <div className="header-buttons">
        <button className="nav-btn" onClick={() => navigate('/search')}>🔍 Tìm kiếm</button>
        <button className="nav-btn" onClick={() => navigate('/notifications')}>🔔 Thông báo</button>
        <button className="nav-btn write-btn" onClick={() => window.open('/write', '_blank')}>✏️ Viết bài</button>
        <img
          src={user.avatarUrl || "/default-avatar.png"}  // Hiển thị ảnh avatar lấy từ backend
          alt="Avatar"
          className="avatar"
          style={{ width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }}
          onClick={handleAvatarClick}
        />
        {showMenu && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={handleProfileClick}>Xem trang cá nhân</button>
            <button className="dropdown-item" onClick={handleLogout}>Đăng xuất</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderMain;