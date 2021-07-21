import express from 'express';
import userController from '../controller/user.controller';

const router = express.Router();

router.get('/', userController.getUserInfo);

router.get('/repo', userController.searchGithubRepositories);

module.exports = router;
