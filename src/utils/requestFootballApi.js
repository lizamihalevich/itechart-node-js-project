import { request } from './request';

const get = (url, config = {}) => {
  return request(url, {
    ...config,
    method: 'get',
    headers: {
      ...config.headers,
      'X-Auth-Token': '02f16200174644cdab2c478d648b3748'
    }
  });
};

const post = (url, config = {}) => {
  return request(url, {
    ...config,
    method: 'post',
    headers: {
      ...config.headers,
      'X-Auth-Token': '02f16200174644cdab2c478d648b3748'
    }
  });
};

export { get, post };
