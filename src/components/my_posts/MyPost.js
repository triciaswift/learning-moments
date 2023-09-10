import { Link } from "react-router-dom";
import { deletePost } from "../../services/postService";

export const MyPost = ({ post, getMyPosts }) => {
  const handleDelete = () => {
    deletePost(post.id).then(() => {
      getMyPosts();
    });
  };

  return (
    <div className="my-post">
      <Link to={`/${post.id}`}>
        <h5 className="my-post-title">{post.title}</h5>
      </Link>
      <button className="btn btn-warning btn-delete" onClick={handleDelete}>
        Delete Post
      </button>
    </div>
  );
};
