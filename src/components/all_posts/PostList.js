import Container from "react-bootstrap/Container";
import "./Posts.css";
import { useEffect, useState } from "react";
import { Post } from "./Post";
import { PostFilterBar } from "./PostFilterBar";
import { getAllPosts } from "../../services/postService";

export const PostList = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [topicSelection, setTopicSelection] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllPosts().then((topicArray) => {
      setAllPosts(topicArray);
    });
  }, []);

  useEffect(() => {
    if (parseInt(topicSelection)) {
      const foundTopic = allPosts.filter(
        (post) => post.topic.id === parseInt(topicSelection)
      );
      setFilteredPosts(foundTopic);
    } else {
      setFilteredPosts(allPosts);
    }
  }, [allPosts, topicSelection]);

  useEffect(() => {
    const foundTitle = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(foundTitle);
  }, [allPosts, searchTerm]);

  return (
    <Container className="posts-container">
      <h2>Posts</h2>
      <PostFilterBar
        setSearchTerm={setSearchTerm}
        setTopicSelection={setTopicSelection}
      />
      <article className="posts">
        {filteredPosts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </article>
    </Container>
  );
};
