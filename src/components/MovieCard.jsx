import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          className="w-[300px] h-[300px] object-cover"
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
          </div>
        }
      />
    </Card>
  );
};

export default MovieCard;
