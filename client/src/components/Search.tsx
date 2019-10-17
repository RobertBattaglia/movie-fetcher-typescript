import * as React from 'react';

interface Props {
  placeholder: string;
}

const Search: React.FC<Props> = ({ placeholder }) => {
  return (
    <form>
      <input
        type="text"
        name="movie-search"
        id="movie-search"
        placeholder={placeholder}
      ></input>
      <button type="submit">Search Movie</button>
    </form>
  );
};

export default Search;
