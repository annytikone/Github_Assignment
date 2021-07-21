import axios from 'axios';
import config from '../config/config';

const { baseUrl } = config;

const getGithubResponse = async (url) => {
  try {
    return await axios.get(url);
  } catch (err) {
    return err;
  }
};

class GithubService {
  async getUserInfo(userHandle) {
    const url = `${baseUrl}/users/${userHandle}`;
    const response = await getGithubResponse(url);
    return response.data;
  }

  async searchGithubRepositories(repo) {
    const url = `${baseUrl}/search/repositories?q=${repo}`;

    const response = await getGithubResponse(url);
    return response.data.items;
  }
}
module.exports = new GithubService();
