export const getAllLikes = () => {
  return fetch(`http://localhost:8088/postLikes?_expand=post`).then((res) =>
    res.json()
  );
};

export const removeLike = (likeId) => {
  return fetch(`http://localhost:8088/postLikes/${likeId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addPostLike = (likeObj) => {
  return fetch(`http://localhost:8088/postLikes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(likeObj),
  });
};
