import { request } from './request';

const get = (url, config = {}) => {
  return request(url, config); // как post
};

const post = (url, config = {}) => {
  return request(url, {
    ...config,
    method: 'post'
  });
};

export { get, post };
