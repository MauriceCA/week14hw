import React, { useState } from "react";
import { Rating } from "@mui/material";

export default function Review({ review }) {
  return (
    <>
      <Rating readOnly value={review.starRating} />
      <br />
      {review.writtenReview}
      <hr />
    </>
  );
}
