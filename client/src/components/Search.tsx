import * as React from 'react';
import axios from 'axios';
interface IProps {
  placeholder: string;
}

const Search: React.FC<IProps> = ({ placeholder }) => {
  const [movieInp, changeMovieInp] = React.useState('');

  const changeInp = (e: React.FormEvent<HTMLInputElement>): void => {
    changeMovieInp(e.currentTarget.value);
  };

  const clearInp = (): void => {
    changeMovieInp('');
  };

  const searchMovie = async (
    e: React.FormEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    const movieResponse = await axios.get(`/movie?movie=${movieInp}`);
    clearInp();
    console.log(movieResponse);
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
      <button onClick={searchMovie} type="submit">
        Search Movie
      </button>
    </form>
  );
};

export default Search;
