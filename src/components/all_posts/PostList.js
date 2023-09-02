import { useEffect, useState } from "react";
import { Post } from "./Post";
import { PostFilterBar } from "./PostFilterBar";
import "./Posts.css";
import { getAllPosts } from "../../services/postService";

export const PostList = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
    });
  }, []);

  return (
    <div className="posts-container">
      <h2>Posts</h2>
      {/* <PostFilterBar /> */}
      <article className="posts">
        {allPosts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </article>
    </div>
  );
};
