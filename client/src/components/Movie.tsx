import * as React from 'react';
import * as moment from 'moment';
import styled from '@emotion/styled';

const Figure = styled('figure')`
  width: 300px;
  border: solid blue 2px;
  margin: 1rem;
  padding: 1rem;
`;

const Img = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

interface IProps {
  id: number;
  title: string;
  releaseDate: string;
  imgSrc: string;
}

const Movie: React.FC<IProps> = props => {
  const { title, releaseDate, imgSrc } = props;
  return (
    <Figure>
      <p>{title}</p>
      <p>{moment(releaseDate).format('ddd, MMMM Do YYYY')}</p>
      <Img
        src={`https://image.tmdb.org/t/p/w300/${imgSrc}`}
        alt={`Movie Poster for ${title}`}
      />
    </Figure>
  );
};

export default Movie;
