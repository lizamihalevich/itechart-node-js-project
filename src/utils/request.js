const request = (url, method, headers, queryParams, body) => {
  queryParams = queryParams || '';
  body = body || '';

  const xhr = new XMLHttpRequest();
  xhr.open(method, url + queryParams);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        return JSON.parse(xhr.responseText);
      }
    }
  };
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });
  xhr.send(body);
};

const requestData = {
  get(url, headers, queryParams) {
    request(url, 'GET', headers, queryParams);
  },

  post(url, headers, body) {
    request(url, 'POST', headers, body);
  },

  put(url, headers, body) {
    request(url, 'PUT', headers, body);
  },

  delete(url, headers, body) {
    request(url, 'DELETE', headers, body);
  }
};

export default requestData;
