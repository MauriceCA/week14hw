import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Rating } from "@mui/material";
import ReviewForm from './ReviewForm';


export default function LeaveAReview() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      

      <ReviewForm />
      <Button variant="primary" onClick={handleShow}>
        Leave a review
      </Button>
    </>
  );
}
