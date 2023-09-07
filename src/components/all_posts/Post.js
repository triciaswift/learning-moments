import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  const handleNumberOfLikes = () => {
    const numberOfLikes = post ? post.postLikes?.length : 0;
    if (numberOfLikes > 1 || numberOfLikes === 0) {
      return numberOfLikes + " Likes";
    } else {
      return numberOfLikes + " Like";
    }
  };

  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body className="post-card">
        <Link to={`/${post.id}`}>
          <Card.Title className="post-info post-title">{post.title}</Card.Title>
        </Link>
        <Card.Subtitle className="post-info">{post.topic.name}</Card.Subtitle>
        <Card.Text className="post-info">{handleNumberOfLikes()}</Card.Text>
      </Card.Body>
    </Card>
  );
};
