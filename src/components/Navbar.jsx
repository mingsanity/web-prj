import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const topics = [
    "Nghệ thuật & Nhiếp ảnh",
    "Tiểu sử & Hồi ký",
    "Kinh doanh & Kinh tế",
    "Hướng dẫn & Tự lực",
    "Sách Thiếu nhi",
    "Từ điển",
    "Giáo dục & Đào tạo",
    "Văn học & Tiểu thuyết",
    "Tạp chí",
    "Y tế & Sức khỏe",
    "Nuôi dạy & Các mối quan hệ",
    "Tham khảo",
    "Khoa học & Công nghệ",
    "Lịch sử & Chính trị",
    "Du lịch & Tham quan",
    "Sách Nấu ăn & Ẩm thực",
    "Khác"
  ];

  return (
    <nav className="navbar">
      {topics.map((topic, index) => (
        <a key={index} href={`#${topic.replace(/\s+/g, '-').toLowerCase()}`} className="nav-item">
          {topic}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
