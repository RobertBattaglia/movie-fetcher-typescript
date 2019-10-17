import * as React from 'react';

import Search from './components/Search';

interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  return (
    <>
      <Search placeholder="The Godfather" />
      <p>{`Hello ${name}`}</p>
    </>
  );
};

export default App;
