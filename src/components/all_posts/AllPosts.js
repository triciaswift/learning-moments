import Container from "react-bootstrap/Container";
import "./Posts.css";
import { useEffect, useState } from "react";
import { Post } from "./Post";
import { AllPostsFilterBar } from "./AllPostsFilterBar";
import { getAllPosts } from "../../services/postService";
import { Link } from "react-router-dom";

export const AllPosts = () => {
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
      <h2>All Posts</h2>
      <AllPostsFilterBar
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
