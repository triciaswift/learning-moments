import { useEffect, useState } from "react";
import "./PostDetails.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../../services/postService";
import { addPostLike } from "../../services/likeService";

export const PostDetails = ({ currentUser }) => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getPostById(postId).then((postObject) => {
      setPost(postObject);
    });
  }, [postId]);

  const handleSave = () => {
    const postLike = {
      userId: currentUser.id,
      postId: post.id,
    };

    addPostLike(postLike).then(() => {
      navigate(`/favorites`);
    });
  };

  return (
    <section className="post">
      <header className="post-header">{post.title}</header>
      <div className="post-details">
        <div>
          <span className="post-info">Author: </span>
          {post.user?.fullName}
        </div>
        <div>
          <span className="post-info">Topic: </span>
          {post.topic?.name}
        </div>
      </div>
      <div className="post-details">
        <div>
          <span className="post-info">Date: </span>
          {post.date}
        </div>
        <div>
          <span className="post-info"># of Likes: </span>
          {post.postLikes?.length}
        </div>
      </div>
      <div className="post-body">{post.body}</div>
      <div className="btn-container">
        {post?.userId === currentUser.id ? (
          <Link to={`/edit_post/${postId}`}>
            <button className="btn btn-info">Edit</button>
          </Link>
        ) : (
          <button className="btn btn-info" onClick={handleSave}>
            Like
          </button>
        )}
      </div>
    </section>
  );
};
