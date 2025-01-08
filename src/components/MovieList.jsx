import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesData }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto p-2 gap-3">
      {moviesData.map((movies) => {
        return (
          <MovieCard
            key={movies.id}
            id={movies.id}
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
