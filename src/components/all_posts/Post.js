import Card from "react-bootstrap/Card";

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
      <Card.Body className="post">
        <Card.Title className="post-info">{post.title}</Card.Title>
        <Card.Subtitle className="post-info">{post.topic.name}</Card.Subtitle>
        <Card.Text className="post-info">{handleNumberOfLikes()}</Card.Text>
      </Card.Body>
    </Card>
  );
};
