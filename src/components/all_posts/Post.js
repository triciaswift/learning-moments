import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { getAllPostLikes } from "../../services/postLikeService";

export const Post = ({ post }) => {
  const [postLikes, setPostLikes] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});

  useEffect(() => {
    getAllPostLikes().then((likeArray) => {
      setPostLikes(likeArray);
    });
  }, []);

  useEffect(() => {
    const likes = postLikes.find((like) => like.id === post.id);
    setSelectedPost(likes);
  }, [postLikes, post]);

  const handleNumberOfLikes = () => {
    const numberOfLikes = selectedPost ? selectedPost.postLikes?.length : 0;
    if (numberOfLikes > 1 || numberOfLikes === 0) {
      return numberOfLikes + " Likes";
    } else {
      return numberOfLikes + " Like";
    }
  };

  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body className="post">
        <Card.Title className="post-info">{post.title}</Card.Title>
        <Card.Subtitle className="post-info">{post.topic.name}</Card.Subtitle>
        <Card.Text className="post-info">{handleNumberOfLikes()}</Card.Text>
      </Card.Body>
    </Card>
  );
};
