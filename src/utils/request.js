import axios from 'axios';
// const request = params => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     const queryString = params.queryParams
//       ? Object.keys(params.queryParams)
//           .map(key => `${key}=${params[key]}`)
//           .join('&')
//       : '';

//     const url = params.queryParams
//       ? `${params.url}?${queryString}`
//       : params.url;

//     xhr.open(params.method || 'GET', url);

//     Object.entries(params.headers).forEach(([key, value]) => {
//       xhr.setRequestHeader(key, value);
//     });

//     xhr.onload = () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(JSON.parse(xhr.responseText));
//       } else {
//         reject(xhr.statusText);
//       }
//     };
//     xhr.onerror = () => reject(xhr.statusText);
//     xhr.send(params.body);
//   });
// };

const request = (url, config) => {
  return axios(url, {
    ...config,
    headers: {
      'X-Auth-Token': '02f16200174644cdab2c478d648b3748'
    }
  });
};

export { request };
