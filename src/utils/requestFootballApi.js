import { request } from './request';

const get = (url, config) => {
  return request(url, config);
};

const post = (url, config) => {
  request(url, {
    method: 'post',
    ...config
  });
};

export { get, post };
