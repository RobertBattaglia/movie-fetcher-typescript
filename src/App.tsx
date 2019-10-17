import * as React from 'react';

interface Props {
  name: string;
}

const App: React.FC<Props> = ({ name }) => {
  return <p>{`Hello ${name}`}</p>;
};

export default App;
