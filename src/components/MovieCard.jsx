import React from "react";
import { Card } from "antd";
import { Link } from "react-router";

const { Meta } = Card;
const MovieCard = ({ title, id, description, posterURL, rating }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          className="w-[150px] h-[300px] object-cover"
          alt="example"
          src={posterURL}
        />
      }
    >
      <Meta
        title={title}
        description={
          <div>
            <p>{rating}</p>
            <p>{description}</p>

            <Link to={`/description/${id}`}>
              <button className="bg-black text-white py-2 px-4 borde rounded-md">
                Show movie description
              </button>
            </Link>
          </div>
        }
      />
    </Card>
  );
};

export default MovieCard;
