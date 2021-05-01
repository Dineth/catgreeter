const request = require("request-promise-native");
const CAT_API_BASE_URL = "https://cataas.com/cat/says/";

// common function to call GET rest methods with binary files from cat api
const getImage = (text, queryString) => {
  const requestOptions = {
    method: "GET",
    timeout: 10000,
    uri: `${CAT_API_BASE_URL}/${text}?${queryString}`,
    encoding: "binary",
  };
  return request(requestOptions);
};

module.exports = getImage;
