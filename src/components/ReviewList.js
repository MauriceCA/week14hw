import React from "react";
import { Container } from "react-bootstrap";
import Movie from "./Movie";

export default function ReviewList() {
  return (
    <article>
      <Container>
        {allMovies.map((review, index) => (
          <div key={index}>
            <Movie reviewData={review} />
          </div>
        ))}
      </Container>
    </article>
  );
}
