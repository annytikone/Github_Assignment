import express from 'express';

const app = express();

app.listen(config.PORT, () => {
  console.log(`Github App is running on ${config.PORT} `);
});
