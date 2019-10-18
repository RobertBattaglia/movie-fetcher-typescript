import * as React from 'react';
import * as moment from 'moment';
import styled from '@emotion/styled';

const Figure = styled('figure')`
  height: 300px;
  width: 300px;
  border: solid blue 2px;
`;

interface IProps {
  id: number;
  title: string;
  releaseDate: string;
  imgSrc: string;
}

const Movie: React.FC<IProps> = props => {
  const { title, releaseDate } = props;
  return (
    <Figure>
      <p>{title}</p>
      <p>{moment(releaseDate).format('ddd, MMMM Do YYYY')}</p>
    </Figure>
  );
};

export default Movie;
