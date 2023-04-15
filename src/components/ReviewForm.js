import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Review from "./Review";
import { Rating } from "@mui/material";

export default function ReviewForm({ movieData }) {
  //hooks to deal with an object
  const [value, setValue] = React.useState(0);
  const [reviewText, setReviewText] = useState("");
  const [allReviews, setAllReviews] = useState(movieData.reviews);

  //something to hold all the objects
  //function to handle event change
  //function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllReviews([
      ...allReviews,
      {
        writtenReview: reviewText,
        starRating: value,
      },
    ]);
  };
  return (
    <article>
      <Form>
        <Form.Group className="mb-3" controlId="reviewForm">
          <p>Rate this movie:</p>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <br />
          <Form.Label>
            <p>Write your review:</p>
          </Form.Label>{" "}
          <br />
          <Form.Control
            onChange={(e) => setReviewText(e.target.value)}
            as="textarea"
            aria-label="With textarea"
            placeholder="Tell us what you think..."
            className="p-4"
          />
        </Form.Group>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Leave a review
        </Button>
      </Form>
      <div>
        {allReviews.map((review, index) => (
          <div key={index}>
            <Review review={review} /> <br />
          </div>
        ))}
      </div>
    </article>
  );
}
