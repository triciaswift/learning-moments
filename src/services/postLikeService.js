export const getAllPostLikes = () => {
  return fetch(`http://localhost:8088/posts?_embed=postLikes`).then((res) =>
    res.json()
  );
};
