import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";
import { useEffect, useState } from "react";
import { getPostById, updatePost } from "../../services/postService";
import { getAllTopics } from "../../services/topicService";

export const EditPost = () => {
  const [topics, setTopics] = useState([]);
  const [post, setPost] = useState({});
  const [editedPost, setEditedPost] = useState();

  const { postId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getAllTopics().then((topicsArray) => {
      setTopics(topicsArray);
    });
  }, []);

  useEffect(() => {
    getPostById(postId).then((postObject) => {
      setPost(postObject);
    });
  }, [postId]);

  useEffect(() => {
    const getDate = new Date();
    const date =
      getDate.getFullYear() + "-" + getDate.getMonth() + "-" + getDate.getDay();

    const initialPost = {
      id: post.id,
      title: post.title,
      body: post.body,
      date: date,
      userId: post.userId,
      topicId: post.topicId,
    };

    setEditedPost(initialPost);
  }, [post]);

  const handleInputChange = (event) => {
    const postCopy = { ...editedPost };
    postCopy[event.target.name] = event.target.value;
    setEditedPost(postCopy);
  };

  const handleSave = (event) => {
    event.preventDefault();

    updatePost(editedPost).then(() => {
      navigate(`/my_posts`);
    });
  };

  return (
    <form>
      <h2 className="form-header">Edit Post</h2>
      <fieldset>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            className="form-control"
            placeholder={post.title}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Topic</label>
          <select
            name="topicId"
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="0">{post.topic?.name}</option>
            {topics.map((topicObj) => {
              return (
                <option key={topicObj.id} value={topicObj.id}>
                  {topicObj.name}
                </option>
              );
            })}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Body</label>
          <textarea
            name="body"
            rows="4"
            cols="50"
            onChange={handleInputChange}
            className="form-control form-body"
            placeholder={post.body}
          ></textarea>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="btn form-btn btn-primary" onClick={handleSave}>
            Save Post
          </button>
        </div>
      </fieldset>
    </form>
  );
};
