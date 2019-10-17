import * as React from 'react';

import Search from './components/Search';

interface IProps {
  name: string;
}

const App: React.FC<IProps> = ({ name }) => {
  return (
    <>
      <Search placeholder="The Godfather" />
      <p>{`Hello ${name}`}</p>
    </>
  );
};

export default App;
