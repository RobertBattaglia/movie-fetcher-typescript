import * as React from 'react';
import axios from 'axios';
interface IProps {
  placeholder: string;
  setMovies: Function;
}

const Search: React.FC<IProps> = ({ placeholder, setMovies }) => {
  const [searchInput, setSearchInput] = React.useState('');

  const changeInp = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchInput(e.currentTarget.value);
  };

  const clearInp = (): void => {
    setSearchInput('');
  };

  const searchMovies = async (
    e: React.FormEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    const movieResponse = await axios.get(`/movie?movie=${searchInput}`);
    clearInp();
    setMovies(movieResponse.data.results);
  };

  return (
    <form>
      <input
        onChange={changeInp}
        value={searchInput}
        type="text"
        name="movie-search"
        id="movie-search"
        placeholder={placeholder}
      ></input>
      <button onClick={searchMovies} type="submit">
        Search Movie
      </button>
    </form>
  );
};

export default Search;
