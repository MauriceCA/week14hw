import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Rating } from '@mui/material';

export default function ReviewForm() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="reviewForm">
        <Form.Label>Write your review:</Form.Label> <br/>
        <Form.Control type="text" placeholder="Tell us what you think..." className='p-5'/>
        </Form.Group>
      </Form>
    );
}
