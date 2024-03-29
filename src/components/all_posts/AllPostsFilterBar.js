import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { getAllTopics } from "../../services/topicService";

export const AllPostsFilterBar = ({ setSearchTerm, setTopicSelection }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topicsArray) => {
      setTopics(topicsArray);
    });
  }, []);

  return (
    <Container className="filter-bar-container">
      <select
        className="filter"
        name="topics"
        id="topic-select"
        onChange={(event) => {
          setTopicSelection(event.target.value);
        }}
      >
        <option value="0">--Filter by topic--</option>
        {topics.map((topic) => {
          return (
            <option value={topic.id} key={topic.id}>
              {topic.name}
            </option>
          );
        })}
      </select>
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="Search Titles"
        className="filter"
      />
    </Container>
  );
};
