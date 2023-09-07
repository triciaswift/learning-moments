import { useEffect, useState } from "react";
import "./PostDetails.css";
import { useParams } from "react-router-dom";
import { getPostById } from "../../services/postService";

export const PostDetails = ({ currentUser }) => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    getPostById(postId).then((data) => {
      const postObject = data[0];
      setPost(postObject);
    });
  }, [postId]);

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
          //! TODO: need to add link here to navigate to Edit View
          <button className="btn btn-info">Edit</button>
        ) : (
          //! TODO: need to add link here to navigate to Favorites View
          <button className="btn btn-info">Like</button>
        )}
      </div>
    </section>
  );
};
