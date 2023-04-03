import React from "react";
import Movie from "./Movie";
import { useState } from 'react';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export default function MovieList (){
  const [allMovies, setAllMovies] = useState([
    {
        id: 0,
        title: 'Se7en',
        posterImage: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        director: 'David Fincher',
        releaseDate: '1995',
        description: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
        reviews: []
    },
    {
        id: 1,
        title: 'The Silence of the Lambs',
        posterImage: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        director: 'Jonathan Demme',
        releaseDate: '1991',
        description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        reviews: []
    },
    {
        id: 2,
        title: 'Taxi Driver',
        posterImage: 'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        director: 'Martin Scorsese',
        releaseDate: '1976',
        description:'A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.',
        reviews: []
    },
    {
        id: 3,
        title: 'Psycho',
        posterImage: 'https://cdn.shopify.com/s/files/1/1416/8662/products/psycho_1960_linen_original_film_art_600x.jpg?v=1593652743',
        director: 'Aldred Hitchcock',
        releaseDate: '1960',
        description:'A Phoenix secretary embezzles $40,000 from her employers client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.',
        reviews: []
    },
    {
        id: 4,
        title: 'Zodiac',
        posterImage: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51kTXzQZYmL._AC_UF894,1000_QL80_.jpg',
        director: 'David Fincher',
        releaseDate: '2007',
        description: 'Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.',
        reviews: []
    },
    {
        id: 5,
        title: 'American Psycho',
        posterImage: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f85ee5ef68c6266f73cf11f6c599cffd_9c1132bb-9c5f-41c8-bd6f-f35db9a6a1a6_500x.jpg?v=1573653978',
        director: 'Mary Harron',
        releaseDate: '2000',
        description: 'A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.',
        reviews: []
    },
    {
        id: 6,
        title: 'The Texas Chainsaw Massacre',
        posterImage: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51t32cnZyuL._AC_.jpg',
        director: 'Tobe Hooper',
        releaseDate: '1974',
        description: 'Five friends head out to rural Texas to visit the grave of a grandfather. On the way they stumble across what appears to be a deserted house, only to discover something sinister within. Something armed with a chainsaw.',
        reviews: []
    },
    {
        id: 7,
        title: 'The Brave One',
        posterImage: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51qqKSRT5TL._AC_UF894,1000_QL80_.jpg',
        director: 'Neil Jordan',
        releaseDate: '2007',
        description: 'Struggling to recover emotionally from a brutal assault that killed her fiancé and left her in a coma, a radio personality begins a quest for vengeance against the perpetrators that leaves a bloody trail across New York City.',
        reviews: []
    },
    {
        id: 8,
        title: 'Henry: Portrait of a Serial Killer',
        posterImage: 'https://m.media-amazon.com/images/M/MV5BM2VjMDkzMTUtMDZjZi00YzFlLWE2MzYtNjVhNTkwYzU0YmNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        director: 'John McNaughton',
        releaseDate: '1986',
        description: 'Arriving in Chicago, Henry moves in with ex-con acquaintance Otis and starts schooling him in the ways of the serial killer.',
        reviews: []
    },
    {
        id: 9,
        title: 'Badlands',
        posterImage: 'https://m.media-amazon.com/images/M/MV5BY2VhZGExZDQtMTZlOS00OTNmLThjYzktN2VhZDg2ZDA3YzEzXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_FMjpg_UX1000_.jpg',
        director: 'Terrence Malick',
        releaseDate: '1973',
        description: 'An impressionable teenage girl from a dead-end town, and her older greaser boyfriend, embark on a killing spree in the South Dakota Badlands.',
        reviews: []
    },
])
  return (
    <article>
      <Container>
        <h1>Top Movies about Serial Killers</h1>
        <p>According to IMDB</p>
        <Row >
          <Col className="d-flex flex-wrap justify-content-center">
            {allMovies.map((movie, index) => (
              <div key={index}>
                <Movie movieData={movie} /> <br />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </article>
  );
}