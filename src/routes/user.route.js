import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Router is working');
});
module.exports = router;
