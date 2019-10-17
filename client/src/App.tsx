import * as React from 'react';

import Search from './components/Search';
import Movies from './components/Movies';

const App: React.FC = () => {
  const [movies, setMovies] = React.useState<any[]>([]);

  return (
    <>
      <Search placeholder="The Godfather" setMovies={setMovies} />
      <Movies movies={movies} />
    </>
  );
};

export default App;
