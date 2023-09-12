import { Outlet, Route, Routes } from "react-router-dom";
import { AllPosts } from "../components/all_posts/AllPosts";
import { NavBar } from "../components/nav/NavBar";
import { useEffect, useState } from "react";
import { PostDetails } from "../components/post_details/PostDetails";
import { NewPost } from "../components/forms/NewPost";
import { MyPostsList } from "../components/my_posts/MyPostsList";
import { EditPost } from "../components/forms/EditPost";
import { FavoriteList } from "../components/favorites/FavoriteList";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user");
    const learningUserObject = JSON.parse(localLearningUser);
    setCurrentUser(learningUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<AllPosts />} />
        <Route
          path=":postId"
          element={<PostDetails currentUser={currentUser} />}
        />
        <Route path="edit_post/:postId" element={<EditPost />} />

        <Route
          path="my_posts"
          element={<MyPostsList currentUser={currentUser} />}
        />
        <Route
          path="new_post"
          element={<NewPost currentUser={currentUser} />}
        />
        <Route
          path="favorites"
          element={<FavoriteList currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
