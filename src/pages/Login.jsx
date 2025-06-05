import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';
import './Login.css';

const Login = () => {
  useEffect(() => {
    document.title = 'Đăng nhập - CookBook';
  }, []);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);

      if (res && res.success) {
        alert(res.message);

        // 🌟 Gọi API backend để lấy dữ liệu user từ email
        const userRes = await fetch(`/api/user/search?q=${email}`, { credentials: 'include' });
        const userData = await userRes.json();
        if (userData.success && userData.data.length > 0) {
          const user = userData.data[0];
          localStorage.setItem('user', JSON.stringify(user));  //  Lưu user vào localStorage
        } else {
          console.warn('Không tìm thấy thông tin user!');
        }

        navigate('/home');
      } else {
        setError(res.message || 'Đăng nhập không thành công');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Lỗi đăng nhập');
    }
  };

  return (
    <div className="login-page">
      <div className="left-panel">
        <img src="/MyLoginGif.gif" alt="Login GIF" />
      </div>
      <div className="right-panel">
        <form className="login-form" onSubmit={handleLogin}>
          <img src="/logo.png" alt="Logo" className="form-logo" />
          <h2>Đăng Nhập</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <label>Email:</label>
          <input
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

