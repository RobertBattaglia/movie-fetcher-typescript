import * as React from 'react';
import styled from '@emotion/styled';

import Movie from './Movie';

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

interface IProps {
  movies: any[];
}

const Movies: React.FC<IProps> = ({ movies }) => {
  return (
    <Container>
      {movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          imgSrc={movie.poster_path}
        />
      ))}
    </Container>
  );
};

export default Movies;
