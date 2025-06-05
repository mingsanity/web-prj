/* eslint-disable react-hooks/exhaustive-deps */
// src/pages/PostDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './PostDetail.css';
import { useLikePost } from './api/use-like-post';
import { useAddComment } from './api/use-add-comment';
import { useFollowUser } from './api/use-follow-user';
import { useGetPosts } from './api/use-get-posts';

const PostDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState(0); // Thêm state cho số lượt thích bài viết
  const [isLiked, setIsLiked] = useState(false); // Thêm state để kiểm tra người dùng đã thích hay chưa
  const [hasAuthorBeenFollowed, setHasAuthorBeenFollowed] = useState(false);

  const { getPosts } = useGetPosts()
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
    } 
    fetchPosts()
  }, [])
  
  const { likePost } = useLikePost()
  const { addComment } = useAddComment()
  const user = JSON.parse(localStorage.getItem('user'))
  const { followUser } = useFollowUser()

  useEffect(() => {
    const foundPost = allPosts.find(p => p._id === id);

    let content = '';
    if (foundPost) {
      switch (foundPost.id) {
        case allPosts[0]._id:
          content = `
            <h2>I. Giới thiệu về John Nash và Thuyết trò chơi</h2>
            <p>John Forbes Nash Jr. là một nhà toán học xuất sắc người Mỹ, nổi tiếng với những đóng góp mang tính cách mạng cho lý thuyết trò chơi, hình học vi phân và phương trình đạo hàm riêng. Công trình đột phá của ông về thuyết trò chơi đã giúp ông đoạt giải Nobel Kinh tế năm 1994, cùng với Reinhard Selten và John Harsanyi.</p>
            <p>Thuyết trò chơi là một nhánh của toán học ứng dụng nghiên cứu các tình huống chiến lược (game) trong đó người chơi đưa ra các quyết định phụ thuộc vào hành động của những người khác.</p>
            <h3>Cân bằng Nash</h3>
            <blockquote>
              "Trong lý thuyết trò chơi, cân bằng Nash là một khái niệm giải pháp của một trò chơi phi hợp tác, trong đó mỗi người chơi, biết chiến lược cân bằng của những người chơi khác, không có lợi khi thay đổi chiến lược của mình."
            </blockquote>
            <p>Nói cách khác, trong một cân bằng Nash, không có người chơi nào có thể cải thiện kết quả của mình bằng cách thay đổi chiến lược một mình, giả sử các người chơi khác giữ nguyên chiến lược của họ.</p>
            <img src="/thumbnail/nash_diagram.jpg" alt="Cân bằng Nash" class="post-content-image"/>
            <p>Cân bằng Nash có ứng dụng rộng rãi trong kinh tế học, khoa học chính trị, sinh học và nhiều lĩnh vực khác để phân tích hành vi trong các hệ thống phức tạp.</p>
            <h3>II. Ứng dụng và tầm ảnh hưởng</h3>
            <p>Công trình của Nash đã thay đổi cách chúng ta hiểu về sự cạnh tranh và hợp tác trong nhiều lĩnh vực. Ví dụ điển hình là "Song đề Tù nhân" (Prisoner's Dilemma), một trò chơi trong đó hai cá nhân có thể hợp tác hoặc phản bội lẫn nhau. Cân bằng Nash giúp dự đoán hành vi hợp lý của họ.</p>
            <ul>
              <li><strong>Kinh tế:</strong> Phân tích thị trường cạnh tranh, chiến lược định giá.</li>
              <li><strong>Khoa học chính trị:</strong> Nghiên cứu đàm phán quốc tế, chiến tranh lạnh.</li>
              <li><strong>Sinh học:</strong> Mô hình hóa hành vi tiến hóa.</li>
            </ul>
            <p>Mặc dù phải đối mặt với bệnh tâm thần trong phần lớn cuộc đời, John Nash vẫn để lại di sản khoa học vĩ đại, minh chứng cho sức mạnh của trí tuệ con người.</p>
          `;
          break;
        case allPosts[1]._id:
          content = `
            <p>Giữa một thế giới đầy biến động và phức tạp, nơi mà sự giả dối, toan tính đôi khi len lỏi vào mọi ngóc ngách của cuộc sống, việc giữ vững một tinh thần chân thành – dám nói thật, dám sống thật – là vô cùng đáng quý. Chủ nghĩa Khắc Kỷ dạy ta rằng: không có gì mạnh mẽ hơn sự chân thành. Nó không chỉ giúp ta bình an trong tâm hồn, mà còn xây dựng niềm tin bền vững với người khác.</p>
            <h2>I. Chân thành theo góc nhìn Khắc Kỷ</h2>
            <p>Khắc Kỷ (Stoicism) không chỉ là một trường phái triết học cổ đại mà còn là một lối sống thực tiễn, giúp con người tìm thấy sự bình yên và hạnh phúc trong những điều kiện khó khăn nhất. Đối với các triết gia Khắc Kỷ như Seneca, Epictetus hay Marcus Aurelius, chân thành không chỉ là đức tính cá nhân mà còn là nền tảng của mọi mối quan hệ và sự phát triển nội tại.</p>
            <blockquote>
              "Điều khiến bạn hạnh phúc nhất là điều mang lại lợi ích cho bạn. Điều khiến bạn có lợi là điều mà bạn đạt được thông qua đức hạnh."
              <br/>— Epictetus
            </blockquote>
            <img src="https://images.spiderum.com/sp-images/detail/2024/05/29/1717013894_254848039_629858604753069_3110534293933932223_n.jpg" alt="Chân thành là sức mạnh" class="post-content-image"/>
            <p>Sống chân thành là sống đúng với bản chất thật của mình, không che đậy, không giả tạo. Điều này không có nghĩa là ta phải phô bày mọi suy nghĩ, cảm xúc ra ngoài, mà là phải hành động nhất quán với những giá trị và nguyên tắc nội tại.</p>
            <h3>II. Tại sao chân thành lại là sức mạnh?</h3>
            <p>Sức mạnh của sự chân thành không nằm ở khả năng thao túng hay kiểm soát người khác, mà ở khả năng tạo dựng niềm tin, sự tôn trọng và bình an nội tại.</p>
            <ol>
              <li><strong>Tạo dựng niềm tin:</strong> Một người chân thành luôn được tin tưởng. Trong kinh doanh, trong tình bạn hay tình yêu, niềm tin là nền tảng vững chắc nhất.</li>
              <li><strong>Bình an trong tâm hồn:</strong> Khi bạn sống thật với chính mình, bạn không cần phải lo lắng về việc duy trì một vỏ bọc. Điều này giải phóng bạn khỏi gánh nặng của sự giả tạo, mang lại sự thanh thản.</li>
              <li><strong>Tăng cường sự tự nhận thức:</strong> Quá trình sống chân thành đòi hỏi bạn phải hiểu rõ bản thân, những điểm mạnh và điểm yếu, những giá trị cốt lõi của mình.</li>
              <li><strong>Thu hút những mối quan hệ đích thực:</strong> Sự chân thành sẽ thu hút những người cũng sống thật, tạo nên những mối quan hệ sâu sắc và ý nghĩa.</li>
            </ol>
            <p>Qua đó, bài học rút ra từ Khắc Kỷ là: hãy sống chân thành, không chỉ với người khác, mà trước tiên là với chính bản thân mình. Đó mới là sức mạnh thực sự giữa đời sống hiện đại đầy biến động này.</p>
          `;
          break;
        default:
          content = `
            <h2>Giới thiệu về bài viết</h2>
            <p>Đây là nội dung chi tiết của bài viết "${foundPost.title}". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <blockquote>
              "Một trích dẫn ý nghĩa từ bài viết này."
            </blockquote>
            <img src="${foundPost.bookImage}" alt="Hình ảnh minh họa" class="post-content-image"/>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>Kết luận</h3>
            <p>Cảm ơn bạn đã đọc bài viết này. Hãy chia sẻ suy nghĩ của bạn ở phần bình luận bên dưới!</p>
          `;
          break;
      }
    }

    if (foundPost) {
        setPost({ ...foundPost, content });
        document.title = `${foundPost.title} - Ứng dụng Blog`;
        const defaultComments = [
          // Thêm authorId giả lập cho các comment
          { _id: '1', author: {displayName: 'Bạn đọc A', _id: new Date().getTime()}, content: 'Bài viết rất hay và ý nghĩa!', createdAt: '2025-03-10'},
          { _id: '2', author: {displayName: 'Độc giả B', _id: new Date().getMilliseconds()}, content: 'Tôi đồng ý với quan điểm của tác giả.', createdAt: '2021-05-04'},
        ]
        const postComments = foundPost.comments.map(comment => ({
          _id: comment._id,
          author: {displayName: comment.author.displayName, _id: comment.author._id},
          content: comment.content,
          createdAt: comment.createdAt.split('T')[0],
        }))
        setComments([...defaultComments, ...postComments]);
        // Thiết lập số lượt thích ban đầu và trạng thái đã thích (giả lập)
        setLikes(foundPost.likes.length || 10); // Giả lập có 10 lượt thích ban đầu
        setIsLiked(foundPost.likes.some(like => like._id === user._id)); // Giả lập ban đầu người dùng chưa thích
        setHasAuthorBeenFollowed(foundPost.author.followers.some(follower => follower === user._id))
    } else {
        setPost(null);
        document.title = 'Bài viết không tìm thấy - Ứng dụng Blog';
    }
  }, [id, allPosts, user._id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const commentAuthor = user ? user.displayName : 'Người dùng ẩn danh';
      const commentAuthorId = user ? user._id : null; // Lấy ID của người dùng nếu có
      const newCommetnt = { id: Date.now(), author: {displayName: commentAuthor, _id: commentAuthorId}, content: newComment, createdAt: new Date().toISOString().split('T')[0] }
      setComments([...comments, newCommetnt]);
      setNewComment('');
      addComment(post._id, newCommetnt)
    }
  };

  // Hàm xử lý khi click nút Like bài viết
  const handleLikePost = () => {
    if (isLiked) return
    else {
      setLikes(prevLikes => prevLikes + 1);
      likePost(post._id)
    }
    setIsLiked(prevIsLiked => !prevIsLiked);
    // Trong ứng dụng thực tế, bạn sẽ gửi yêu cầu API đến backend để cập nhật lượt thích
  };

  const handleFollowUser = () => {
    if (hasAuthorBeenFollowed) setHasAuthorBeenFollowed(false)
    else setHasAuthorBeenFollowed(true)
    followUser(post.author._id, user)
  }

  if (!post) 
    return <h2 className="post-detail-message">Đang tải bài viết hoặc không tìm thấy...</h2>;

  return (
    <div className="post-detail-container">
      <button onClick={() => navigate('/home')} className='back-btn'>Quay lại</button>
      <div className="post-detail-header">
        <h1>{post.title}</h1>
      </div>

      <div className="author-section">
        <div className="author-info">
          {post.author._id ? (
            <Link to={`/user/${post.author._id}`} className="author-link">
              <strong>{post.author.displayName}</strong>
            </Link>
          ) : (
            <strong>{post.author.displayName}</strong>
          )}
          <button className="follow-btn" onClick={handleFollowUser}>{hasAuthorBeenFollowed ? 'Đã theo dõi' : '+ Theo dõi'}</button>
        </div>
      </div>

      {post.bookImage && <img src={post.bookImage} alt={post.title} className="post-main-image" />}

      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>

      <div className="post-actions-bottom">
        <button
          className={`like-post-btn ${isLiked ? 'liked' : ''}`}
          onClick={handleLikePost}
        >
          {isLiked ? '❤️ Đã thích' : '🤍 Thích'} ({likes})
        </button>
      </div>

      <div className="comments-section">
        <h3>Bình luận</h3>
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            placeholder="Viết bình luận của bạn..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows="4"
          ></textarea>
          <button type="submit">Gửi bình luận</button>
        </form>

        <div className="comments-list">
          {comments.length === 0 ? (
            <p className="no-comments">Chưa có bình luận nào. Hãy là người đầu tiên!</p>
          ) : (
            comments.map(comment => (
              <div key={comment._id} className="comment-item">
                <div className="comment-main-content">
                  {comment.author._id ? (
                    <Link to={`/user/${comment.author._id}`} className="comment-author-link" style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                      <p className="comment-author"><strong>{comment.author.displayName}</strong></p>
                      <p style={{color: '#666', fontSize: '12px'}}> - {comment.createdAt}</p>
                    </Link>
                  ) : (
                    <p className="comment-author"><strong>{comment.author.displayName}</strong></p>
                  )}
                  <p className="comment-text">{comment.content}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
