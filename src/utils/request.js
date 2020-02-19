import axios from 'axios';

const request = (url, config) => {
  return axios(url, {
    ...config,
    headers: {
      'X-Auth-Token': '02f16200174644cdab2c478d648b3748'
    }
  });
};

export { request };
