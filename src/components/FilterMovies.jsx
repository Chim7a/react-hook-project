import React from "react";
import { Select } from "antd";

function FilterMovies(props) {
  return (
    <>
      <div>
        <Select
          defaultValue="Filter Ratings"
          style={{
            width: 220,
          }}
          onChange={props.handleMovieRatingFilter}
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
      </div>
    </>
  );
}

export default FilterMovies;
