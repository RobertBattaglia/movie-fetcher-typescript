const express = require('express');
const app = express();

const axios = require('axios');

const port = process.env.PORT || 8080;

app.use(express.static('../client/public'));

app.get('/movie', async (request, response) => {
  try {
    const movie = request.query.movie;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${movie}&language=en-US`
    );

    if (data.total_pages > 1) {
      const allPageData = [];
      for (let i = 2; i <= data.total_pages; i++) {
        allPageData.push(
          axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${movie}&page=${i}&language=en-US`
          )
        );
      }

      let pageResponses = await Promise.all(allPageData);
      pageResponses = pageResponses.map(response => response.data.results);
      data.results = data.results.concat(...pageResponses);
    }

    response.json(data);
  } catch (error) {
    console.error(error);
    response.status(500);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
