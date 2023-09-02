import { useEffect, useState } from "react";
import { getAllTopics } from "../../services/topicService";

export const Post = ({ post }) => {
  return (
    <section className="post">
      <div className="post-info">{post.title}</div>
      <div className="post-info">{post.topic.name}</div>
      <div className="post-info"></div>
    </section>
  );
};
