import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const [movie, setMovie] = useState();

  const navigate = useNavigate();

  const { moviename, coverImage } = item;

  return (
    <div className="movieCard">
      <p>{moviename}</p>
      <img src={coverImage} alt="Movie" />

      <button
        onClick={() => {
          navigate("movie");
        }}
      >
        Use navigate
      </button>
    </div>
  );
};

export { MovieCard };
