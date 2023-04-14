import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import BasicRating from './Stars';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ReviewForm({movieData}) {
  //hooks to deal with an object

  const [reviewInput, setReviewInput] = useState({
    writtenReview: '',
    starRating: ''
  })

  const [allReviews, setAllReviews] = useState([])
  //something to hold all the objects
  //function to handle event change
  const handleChange = (e) => {
    setReviewInput({
      writtenReview: e.target.value,
      starRating: 5,
    })
  }
  //function to handle submit
  const handleSubmit = (e) => {

    setAllReviews([...allReviews, reviewInput])
  }
    return (
      console.log(movieData),
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="reviewForm">
            <BasicRating />
            <Form.Label>Write your review:</Form.Label> <br />
            <Form.Control onChange={handleChange}
              as="textarea" aria-label="With textarea"
              placeholder="Tell us what you think..."
              className="p-4"
            />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={handleSubmit}>
        Leave a review
        </Button>
        <div>
          {movieData.reviews},
          {setAllReviews}
        </div>
      </div>
    );
}
