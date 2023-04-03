import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

export default function Form() {
    return (
      <Form>
        <InputGroup className="m-5">
          <InputGroup.Text>With textarea</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
      </Form>
    );
}
