import axios from 'axios';

const request = (url, config) => {
  return axios(url, {
    ...config
  });
};

const get = (url, config) => {
  return request(url, {
    ...config,
    method: 'get'
  });
};

const post = (url, config) => {
  return request(url, {
    ...config,
    method: 'post'
  });
};

export { request, get, post };
