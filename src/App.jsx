import { useState } from "react";
import "./App.css";
import MovieData from "./Data";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { Select } from "antd";

function App() {
  const [moviesData, setMovieData] = useState(MovieData);

  const handleAddNewMovie = (movieInfo) => {
    // To generate and add a random ID into a new movie added from AddMovie.Jsx to be added to data.js
    return setMovieData([movieInfo, ...moviesData]);
  };

  const handleMovieRatingFilter = (value) => {
    switch (value) {
      case "Rating less than 5":
        {
          const movieRatingLessThan5 = moviesData.filter(
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
        setMovieData(moviesData);
      }
      default:
        break;
    }
  };

  return (
    <>
      <AddMovie handleAddNewMovie={handleAddNewMovie} />

      {/* Filter movie */}
      <Select
        defaultValue="Filter Ratings"
        style={{
          width: 220,
        }}
        onChange={handleMovieRatingFilter}
        options={[
          {
            value: "Rating less than 5",
            label: "Rating less than 5",
          },
          {
            value: "Rating-5-and-above",
            label: "Rating-5-and-above",
          },
          {
            value: "All",
            label: "All",
          },
        ]}
      />
      {/* *********** */}

      <MovieList moviesData={moviesData} />
    </>
  );
}

export default App;
