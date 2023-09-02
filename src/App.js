import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import { PostList } from "./components/all_posts/PostList";

export const App = () => {
  return (
    <>
      <Navbar expand="lg">
        <Nav.Link href="#all-posts">All Posts</Nav.Link>
        <Nav.Link href="#my-posts">My Posts</Nav.Link>
        <Nav.Link href="#favorites">Favorites</Nav.Link>
        <Nav.Link href="#new-posts">New Post</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#profile">Profile</Nav.Link>
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <PostList />
    </>
  );
};
