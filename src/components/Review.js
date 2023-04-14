import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ReviewForm from './ReviewForm';


export default function LeaveAReview({movieData}) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>

      <ReviewForm movieData={movieData} />
    </>
  );
}
