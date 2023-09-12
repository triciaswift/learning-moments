import { useEffect, useState } from "react";
import "./Favorites.css";
import { getAllLikes } from "../../services/likeService";
import { Favorite } from "./Favorite";

export const FavoriteList = ({ currentUser }) => {
  const [allLikes, setAllLikes] = useState([]);
  const [userLikes, setUserLikes] = useState([]);

  const handleUserLikes = () => {
    getAllLikes().then((likesArray) => {
      setAllLikes(likesArray);
    });
  };

  useEffect(() => {
    handleUserLikes();
  }, []);

  useEffect(() => {
    const getUserLikes = allLikes.filter(
      (like) => like.userId === currentUser?.id
    );
    setUserLikes(getUserLikes);
  }, [allLikes, currentUser]);

  return (
    <div className="favorite-posts">
      {userLikes.map((like) => {
        return (
          <Favorite
            key={like.id}
            like={like}
            handleUserLikes={handleUserLikes}
          />
        );
      })}
    </div>
  );
};
