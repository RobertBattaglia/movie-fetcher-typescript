const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('../client/public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
