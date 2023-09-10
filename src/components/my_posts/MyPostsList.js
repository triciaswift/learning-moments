import { MyPost } from "./MyPost";
import "./MyPosts.css";
import { useEffect, useState } from "react";
import { getPostsByUserId } from "../../services/postService";

export const MyPostsList = ({ currentUser }) => {
  const [myPosts, setMyPosts] = useState([]);

  const getMyPosts = () => {
    getPostsByUserId(currentUser.id).then((data) => {
      const posts = data.posts;
      setMyPosts(posts);
    });
  };

  useEffect(() => {
    getMyPosts();
  }, []);

  return (
    <div className="my-posts">
      {myPosts.map((post) => {
        return <MyPost key={post.id} post={post} getMyPosts={getMyPosts} />;
      })}
    </div>
  );
};
