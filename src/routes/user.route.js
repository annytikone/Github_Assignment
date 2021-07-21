import express from 'express';

const router = express.Router();

// http://localhost:8080/v1/?userHandler=annytikone
router.get('/', (req, res) => {
  res.json('Router is working');
});
module.exports = router;
