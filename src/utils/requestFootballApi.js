import { request } from './request';

const requestWithAuth = (params, headers) => {
  params.headers = {
    'X-Auth-Token': '02f16200174644cdab2c478d648b3748',
    ...headers
  };
  return request(params);
};

const get = (url, queryString, headers) => {
  return requestWithAuth({ url, queryString, method: 'GET' }, headers);
};

const post = (url, headers, body) => {
  requestWithAuth({ url, body, method: 'POST' }, headers);
};

export { get, post };
