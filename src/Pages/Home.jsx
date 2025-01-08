import React, { useState } from "react";
import MovieData from "../Data";
import MovieList from "../components/MovieList";
import AddMovie from "../components/AddMovie";
import FilterMovies from "../components/FilterMovies";

function Home({ showDescription, setShowDescription }) {
  const [moviesData, setMovieData] = useState(MovieData);

  const handleAddNewMovie = (movieInfo) => {
    // To generate and add a random ID into a new movie added from AddMovie.Jsx to be added to data.js
    return setMovieData([movieInfo, ...MovieData]);
  };

  const handleMovieRatingFilter = (value) => {
    switch (value) {
      case "Rating less than 5":
        {
          const movieRatingLessThan5 = MovieData.filter(
            (item) => item.rating < 5
          );
          setMovieData(movieRatingLessThan5);
        }

        break;
      case "Rating-5-and-above":
        {
          const movieRatingGreaterThan5 = moviesData.filter(
            (item) => item.rating > 5
          );
          setMovieData(movieRatingGreaterThan5);
        }
        break;

      case "All": {
        setMovieData(MovieData);
      }
      default:
        break;
    }
  };

  return (
    <>
      <section className="container mx-auto pt-5">
        <div className="flex gap-2 max-w-69">
          <AddMovie handleAddNewMovie={handleAddNewMovie} />
          {/* Filter movie */}
          <FilterMovies handleMovieRatingFilter={handleMovieRatingFilter} />
          {/* *********** */}
        </div>

        <MovieList
          showDescription={showDescription}
          setShowDescription={setShowDescription}
          moviesData={moviesData}
        />
      </section>
    </>
  );
}

export default Home;
