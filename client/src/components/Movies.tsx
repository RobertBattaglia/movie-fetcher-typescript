import * as React from 'react';

import Movie from './Movie';

interface IProps {
  movies: any[];
}

const Movies: React.FC<IProps> = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          imgSrc={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default Movies;
