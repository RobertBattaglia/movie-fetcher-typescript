import * as React from 'react';

interface IProps {
  placeholder: string;
}

const Search: React.FC<IProps> = ({ placeholder }) => {
  const [movieInp, changeMovieInp] = React.useState('');

  const changeInp = (e: React.FormEvent<HTMLInputElement>): void => {
    changeMovieInp(e.currentTarget.value);
  };

  return (
    <form>
      <input
        onChange={changeInp}
        value={movieInp}
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
