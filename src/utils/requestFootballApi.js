import { request } from './request';

const get = (url, config = {}) => {
  return request(url, {
    ...config,
    method: 'get'
  });
};

const post = (url, config = {}) => {
  return request(url, {
    ...config,
    method: 'post'
  });
};

export { get, post };
