const axios = require("axios");

async function getUserActivity(username) {
  const response = await axios.get(`https://api.github.com/users/${username}/events`);
  return response.data;
}

module.exports = { getUserActivity };
