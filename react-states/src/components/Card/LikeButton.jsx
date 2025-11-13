import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <button
      onClick={toggleLike}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
      }}
    >
      {isLiked ? (
        <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
      ) : (
        <i className="fa-regular fa-heart" style={{ color: "#888" }}></i>
      )}
    </button>
  );
}
