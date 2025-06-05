// src/pages/PostDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = ({ allPosts }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState(0); // Thêm state cho số lượt thích bài viết
  const [isLiked, setIsLiked] = useState(false); // Thêm state để kiểm tra người dùng đã thích hay chưa

  useEffect(() => {
    const foundPost = allPosts.find(p => p.id === parseInt(id));

    let content = '';
    if (foundPost) {
      switch (foundPost.id) {
        case 1:
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
        case 8:
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
            <img src="${foundPost.img}" alt="Hình ảnh minh họa" class="post-content-image"/>
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
        setComments([
          // Thêm authorId giả lập cho các comment
          { id: 1, author: 'Bạn đọc A', authorId: 201, text: 'Bài viết rất hay và ý nghĩa!', likes: 5, liked: false, replies: [] },
          { id: 2, author: 'Độc giả B', authorId: 202, text: 'Tôi đồng ý với quan điểm của tác giả.', likes: 2, liked: true, replies: [
            { id: 2.1, author: 'Admin', authorId: 999, text: 'Cảm ơn bạn đã đóng góp ý kiến!' }
          ] },
        ]);
        // Thiết lập số lượt thích ban đầu và trạng thái đã thích (giả lập)
        setLikes(foundPost.initialLikes || 10); // Giả lập có 10 lượt thích ban đầu
        setIsLiked(false); // Giả lập ban đầu người dùng chưa thích
    } else {
        setPost(null);
        document.title = 'Bài viết không tìm thấy - Ứng dụng Blog';
    }
  }, [id, allPosts]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const user = JSON.parse(localStorage.getItem('user'));
      const commentAuthor = user ? user.displayName : 'Người dùng ẩn danh';
      const commentAuthorId = user ? user.id : null; // Lấy ID của người dùng nếu có
      setComments([...comments, { id: Date.now(), author: commentAuthor, authorId: commentAuthorId, text: newComment, likes: 0, liked: false, replies: [] }]);
      setNewComment('');
    }
  };

  const handleLikeComment = (commentId) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.liked ? comment.likes - 1 : comment.likes + 1, liked: !comment.liked }
        : comment
    ));
  };

  // Hàm xử lý khi click nút Like bài viết
  const handleLikePost = () => {
    if (isLiked) {
      setLikes(prevLikes => prevLikes - 1);
    } else {
      setLikes(prevLikes => prevLikes + 1);
    }
    setIsLiked(prevIsLiked => !prevIsLiked);
    // Trong ứng dụng thực tế, bạn sẽ gửi yêu cầu API đến backend để cập nhật lượt thích
  };

  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = (e, parentCommentId) => {
    e.preventDefault();
    if (replyText.trim()) {
      const user = JSON.parse(localStorage.getItem('user'));
      const replyAuthor = user ? user.displayName : 'Người dùng ẩn danh';
      const replyAuthorId = user ? user.id : null; // Lấy ID của người dùng nếu có
      setComments(comments.map(comment =>
        comment.id === parentCommentId
          ? {
              ...comment,
              replies: [...comment.replies, { id: Date.now(), author: replyAuthor, authorId: replyAuthorId, text: replyText }]
            }
          : comment
      ));
      setReplyText('');
      setReplyingTo(null);
    }
  };

  if (!post) {
    return <h2 className="post-detail-message">Đang tải bài viết hoặc không tìm thấy...</h2>;
  }

  return (
    <div className="post-detail-container">
      <div className="post-detail-header">
        <h1>{post.title}</h1>
      </div>

      <div className="author-section">
        <div className="author-info">
          {post.authorId ? (
            <Link to={`/user/${post.authorId}`} className="author-link">
              <strong>{post.author}</strong>
            </Link>
          ) : (
            <strong>{post.author}</strong>
          )}
          <p>{post.views} • {post.time}</p>
          <button className="follow-btn">+ Theo dõi</button>
        </div>
      </div>

      {post.img && <img src={post.img} alt={post.title} className="post-main-image" />}

      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>

      {/* Phần Like bài viết */}
      <div className="post-actions-bottom">
        <button
          className={`like-post-btn ${isLiked ? 'liked' : ''}`}
          onClick={handleLikePost}
        >
          {isLiked ? '❤️ Đã thích' : '🤍 Thích'} ({likes})
        </button>
      </div>

      {/* Phần bình luận */}
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
              <div key={comment.id} className="comment-item">
                <div className="comment-main-content">
                  {/* Link tên tác giả bình luận đến trang cá nhân */}
                  {comment.authorId ? (
                    <Link to={`/user/${comment.authorId}`} className="comment-author-link">
                      <p className="comment-author"><strong>{comment.author}</strong></p>
                    </Link>
                  ) : (
                    <p className="comment-author"><strong>{comment.author}</strong></p>
                  )}
                  <p className="comment-text">{comment.text}</p>
                </div>
                <div className="comment-actions">
                  <button
                    className={`like-btn ${comment.liked ? 'liked' : ''}`}
                    onClick={() => handleLikeComment(comment.id)}
                  >
                    Thích {comment.likes > 0 && `(${comment.likes})`}
                  </button>
                  <button
                    className="reply-btn"
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  >
                    Trả lời
                  </button>
                </div>

                {/* Form trả lời */}
                {replyingTo === comment.id && (
                  <form onSubmit={(e) => handleReplySubmit(e, comment.id)} className="reply-form">
                    <textarea
                      placeholder="Viết trả lời của bạn..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      rows="2"
                    ></textarea>
                    <button type="submit">Gửi trả lời</button>
                    <button type="button" onClick={() => setReplyingTo(null)} className="cancel-reply-btn">Hủy</button>
                  </form>
                )}

                {/* Hiển thị các câu trả lời */}
                {comment.replies.length > 0 && (
                  <div className="comment-replies">
                    {comment.replies.map(reply => (
                      <div key={reply.id} className="reply-item">
                        {/* Link tên tác giả trả lời đến trang cá nhân */}
                        {reply.authorId ? (
                          <Link to={`/user/${reply.authorId}`} className="reply-author-link">
                            <p className="reply-author"><strong>{reply.author}</strong></p>
                          </Link>
                        ) : (
                          <p className="reply-author"><strong>{reply.author}</strong></p>
                        )}
                        <p className="reply-text">{reply.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
