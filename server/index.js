const express = require('express');
const app = express();

const axios = require('axios');

const port = process.env.PORT || 8080;

app.use(express.static('../client/public'));

app.get('/movie', async (request, response) => {
  try {
    const movie = request.query.movie;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${movie}&language=en-US&page=1&include_adult=true`
    );
    response.json(data);
  } catch (error) {
    console.error(error);
    response.status(500);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
