import { Link } from "react-router-dom";
import { removeLike } from "../../services/likeService";

export const Favorite = ({ like, handleUserLikes }) => {
  const handleRemove = () => {
    const likeId = like.id;
    removeLike(likeId).then(() => {
      handleUserLikes();
    });
  };

  return (
    <div className="favorite-post">
      <Link to={`/${like.postId}`}>
        <h5 className="favorite-post-title">{like.post?.title}</h5>
      </Link>
      <button className="btn btn-warning btn-delete" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};
