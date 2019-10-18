import * as React from 'react';
import * as moment from 'moment';

interface IProps {
  id: number;
  title: string;
  releaseDate: string;
  imgSrc: string;
}

const Movie: React.FC<IProps> = props => {
  const { title, releaseDate } = props;
  return (
    <figure>
      <p>{title}</p>
      <p>{moment(releaseDate).format('ddd, MMMM Do YYYY')}</p>
    </figure>
  );
};

export default Movie;
