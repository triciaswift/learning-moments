import { useEffect, useState } from "react";
import "./Form.css";
import { getAllTopics } from "../../services/topicService";
import { savePost } from "../../services/postService";
import { useNavigate } from "react-router-dom";

export const NewPost = ({ currentUser }) => {
  const [topics, setTopics] = useState([]);
  const [newPost, setNewPost] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getAllTopics().then((topicsArray) => {
      setTopics(topicsArray);
    });
  }, []);

  const handleInputChange = (event) => {
    const newPostCopy = { ...newPost };
    newPostCopy[event.target.name] = event.target.value; // name here is referring to the input name
    setNewPost(newPostCopy);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const getDate = new Date();
    const date =
      getDate.getFullYear() + "-" + getDate.getMonth() + "-" + getDate.getDay();

    const post = {
      title: newPost.title,
      body: newPost.body,
      date: date,
      userId: currentUser.id,
      topicId: parseInt(newPost.topicId),
    };

    savePost(post).then(() => {
      navigate(`/my_posts`);
    });
  };

  return (
    <form className="new-post">
      <h2 className="form-header">Add New Post</h2>
      <fieldset>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            required
            className="form-control"
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
            <option value="0">Please choose a topic</option>
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
            required
            className="form-control form-body"
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
