import React from "react";
import Card from "react-bootstrap/Card";
import ReviewForm from "./ReviewForm";

export default function Movie({ movieData }) {
  return (
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img
        variant="top"
        src={movieData.posterImage}
        alt="movie poster"
        width="250px"
      />
      <Card.Body>
        <Card.Title style={{ color: "darkblue", fontWeight: 700 }}>
          {movieData.title}
        </Card.Title>
        <Card.Text>
          <strong>Year Released:</strong> {movieData.releaseDate} <br />
          <strong>Director:</strong> {movieData.director} <br />
          {movieData.description} <br />
        </Card.Text>
        <ReviewForm movieData={movieData} />
      </Card.Body>
    </Card>
  );
}
