import React, { useEffect, useState, useRef } from 'react';
import './header-main.css';
import { useNavigate } from 'react-router-dom';

function HeaderMain() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('user'))
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); 

  const handleAvatarClick = () => setShowMenu(!showMenu);
 

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    navigate('/login'); 
  };

  const handleProfileClick = () => navigate(`/user/${userData._id}`); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

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
        <button onClick={handleAvatarClick} style={{borderRadius: '50px', display: 'flex', alignItems: 'center'}}>
          <img
            src={userData.avatarUrl || "/default-avatar.png"}  // Hiển thị ảnh avatar lấy từ backend
            alt="Avatar"
            className="avatar"
            style={{ width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }}
          />
        </button>
        {showMenu && (
          <div className="dropdown-menu" ref={menuRef}>
            <button className="dropdown-item" onClick={handleProfileClick}>Xem trang cá nhân</button>
            <button className="dropdown-item" onClick={handleLogout}>Đăng xuất</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderMain;