export const getAllPosts = () => {
  return fetch(
    `http://localhost:8088/posts?_expand=topic&_embed=postLikes`
  ).then((res) => res.json());
};

export const getPostById = (postId) => {
  return fetch(
    `http://localhost:8088/posts?id=${postId}&_expand=topic&_embed=postLikes&_expand=user`
  ).then((res) => res.json());
};

/*
  !This can be used instead for getPostById, however undefined pieces get messed up in PostDetails
  http://localhost:8088/posts/2?_expand=user&_embed=postLikes&_expand=topic
*/
