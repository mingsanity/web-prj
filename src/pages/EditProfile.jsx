import React, { useState, useEffect } from 'react';
import './EditProfile.css';

const EditProfile = () => {
  useEffect(() => {
    document.title = 'Chỉnh sửa hồ sơ - CookBook';
  }, []);

  // Giả lập dữ liệu user ban đầu
  const [user, setUser] = useState({
    displayName: 'vitwag',
    email: 'quang.nvv173203@gmail.com',
    dob: { day: '', month: '', year: '' },
    gender: 'male',
    bio: '',
    avatarUrl: '', // Initial empty avatar URL
    backgroundUrl: '' // Initial empty background URL
  });

  // Các mảng chọn ngày tháng năm
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  // Hàm xử lý thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['day', 'month', 'year'].includes(name)) {
      setUser(prev => ({
        ...prev,
        dob: { ...prev.dob, [name]: value }
      }));
    } else {
      setUser(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Hàm xử lý tải ảnh lên (avatar và background)
  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'avatar') {
          setUser(prev => ({ ...prev, avatarUrl: reader.result }));
        } else if (type === 'background') {
          setUser(prev => ({ ...prev, backgroundUrl: reader.result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Hàm submit (chưa kết nối API)
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: gọi API update profile
    alert('Lưu thông tin thành công (demo)');
    // Optionally, you might want to refresh the page or redirect after successful save
    // window.location.reload(); // This would refresh the entire page
  };

  return (
    <div className="edit-profile-container">
      <h2>Chỉnh sửa trang cá nhân</h2>

      <form onSubmit={handleSubmit} className="edit-profile-form">
        <div className="background-upload">
          <div className="background-placeholder">
            {/* Hiển thị ảnh nền */}
            {user.backgroundUrl ? (
              <img src={user.backgroundUrl} alt="Ảnh bìa" />
            ) : (
              <div className="placeholder-text">Thay đổi ảnh bìa</div>
            )}
            <input
              type="file"
              id="background-upload-input"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'background')}
            />
            <button
              type="button"
              className="btn-upload"
              onClick={() => document.getElementById('background-upload-input').click()}
            >
              📷
            </button>
          </div>
        </div>

        <div className="avatar-upload">
          <div className="avatar-placeholder">
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt="Avatar" />
            ) : (
              <div className="placeholder-circle">📷</div>
            )}
            <input
              type="file"
              id="avatar-upload-input"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'avatar')}
            />
            <button
              type="button"
              className="btn-upload-circle"
              onClick={() => document.getElementById('avatar-upload-input').click()}
            >
              📷
            </button>
          </div>
        </div>

        <div className="input-group">
          <label>Tên hiển thị</label>
          <input
            type="text"
            name="displayName"
            maxLength="50"
            value={user.displayName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group dob-group">
          <label>Ngày sinh</label>
          <select name="day" value={user.dob.day} onChange={handleChange}>
            <option value="">Ngày</option>
            {days.map(day => <option key={day} value={day}>{day}</option>)}
          </select>
          <select name="month" value={user.dob.month} onChange={handleChange}>
            <option value="">Tháng</option>
            {months.map(month => <option key={month} value={month}>{month}</option>)}
          </select>
          <select name="year" value={user.dob.year} onChange={handleChange}>
            <option value="">Năm</option>
            {years.map(year => <option key={year} value={year}>{year}</option>)}
          </select>
        </div>

        <div className="input-group gender-group">
          <label>Giới tính</label>
          <label><input type="radio" name="gender" value="male" checked={user.gender === 'male'} onChange={handleChange} /> Nam</label>
          <label><input type="radio" name="gender" value="female" checked={user.gender === 'female'} onChange={handleChange} /> Nữ</label>
          <label><input type="radio" name="gender" value="other" checked={user.gender === 'other'} onChange={handleChange} /> Khác</label>
        </div>

        <button type="submit" className="btn-save">Lưu thay đổi</button>
      </form>
    </div>
  );
};

export default EditProfile;