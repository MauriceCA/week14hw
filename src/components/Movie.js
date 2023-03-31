import React from "react";
import Card from "react-bootstrap/Card";
import { Rating } from "@mui/material";

export default function Movie ({movieData}){
    return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top"
            src={movieData.posterImage}
            alt="movie poster" width="250px"
          />
          <Card.Body>
            <Card.Title>{movieData.title}</Card.Title>
            <Card.Text>
              Year Released: {movieData.releaseDate} <br/>
              Director: {movieData.director} <br/>
              {movieData.description} <br/>
            </Card.Text>
              <Rating />
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </Card.Body>
        </Card>
    )
};

