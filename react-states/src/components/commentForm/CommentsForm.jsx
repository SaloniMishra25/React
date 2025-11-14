import { useState } from "react";
import "./Comments.css";

export default function CommentsForm() {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setCommentsList([...commentsList, comment]);
    setComment("");
  };

  return (
    <div className="comment-container">
      <h2 className="comment-heading">Comments</h2>

      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          className="comment-textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
        ></textarea>

        <button className="comment-btn" type="submit">
          Post Comment
        </button>
      </form>

      <div className="comments-list">
        {commentsList.map((c, index) => (
          <div key={index} className="comment-item">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
