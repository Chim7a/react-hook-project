import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesData }) => {
  return (
    <div>
      {moviesData.map((movies) => {
        return (
          <MovieCard
            key={movies.id}
            title={movies.title}
            description={movies.description}
            posterURL={movies.posterURL}
            rating={movies.rating}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
