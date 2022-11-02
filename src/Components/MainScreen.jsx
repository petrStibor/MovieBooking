import { MovieCard } from "../Components/MovieCard";

const MainScreen = () => {
  const movie = [
    {
      id: 1,
      moviename: "Iron Man",
      coverImage: "../images/ironman.jpg",
      runTime: 2415,
      PG: 13,
      trailer: "link"
    },
    {
      id: 2,
      moviename: "Thor",
      coverImage: "../images/thor.jpg",
      runTime: 205,
      PG: 13,
      trailer: "link"
    },
    {
      id: 3,
      moviename: "Avengers",
      coverImage: "../images/ironman.jpg",
      runTime: 2415,
      PG: 13,
      trailer: "link"
    }
  ];

  return (
    <div className="movieContainer">
      {movie.map((item) => {
        const { id } = item;
        return (
          <div key={id} className="movies">
            <MovieCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export { MainScreen };
