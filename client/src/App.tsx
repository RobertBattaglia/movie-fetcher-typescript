import * as React from 'react';
import { Global } from '@emotion/core';

import theme from './theme';
import Search from './components/Search';
import Movies from './components/Movies';

const App: React.FC = () => {
  const [movies, setMovies] = React.useState<any[]>([]);

  return (
    <>
      <Global styles={theme} />
      <Search placeholder="The Godfather" setMovies={setMovies} />
      <Movies movies={movies} />
    </>
  );
};

export default App;
