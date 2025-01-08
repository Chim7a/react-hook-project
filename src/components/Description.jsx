import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import MovieData from "../Data";

function Description() {
  const [moviesInfo, setMovieInfo] = useState(MovieData);
  const params = useParams();

  const getDescriptionById = () => {
    const movie = MovieData.find((item) => item.id === Number(params.movie_id));

    setMovieInfo(movie);
  };

  useEffect(() => {
    getDescriptionById();
  }, []);

  return (
    <div className=" container  h-screen mx-auto flex flex-col items-center justify-center gap-3 text-left">
      <iframe
        width="900"
        height="900"
        src={moviesInfo.trailer}
        title="YouTube video player"
      ></iframe>
      <h2 className="text-3xl font-extrabold text-white">{moviesInfo.title}</h2>
      <p className="text-2xl text-yellow-50 max-w-3xl">
        {moviesInfo.description}
      </p>
      <Link to="/">
        <button className="text-2xl bg-red-500 text-white px-5 py-3 rounded-md font-semibold">
          Go back
        </button>
      </Link>
    </div>
  );
}

export default Description;
