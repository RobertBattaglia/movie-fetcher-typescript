import * as React from 'react';

interface IProps {
  movies: any[];
}

const Movies: React.FC<IProps> = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>{movie.id}</div>
      ))}
    </div>
  );
};

export default Movies;
