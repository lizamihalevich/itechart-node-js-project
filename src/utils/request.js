const request = (url, method, headers, queryString, body) => {
  const queryParams = queryString || '';
  const bodyParams = body || '';

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
  xhr.send(bodyParams);
};

const get = (url, queryParams, headers) => {
  request(url, 'GET', Headers, queryParams);
};

const post = (url, headers, body) => {
  request(url, 'POST', headers, body);
};

const put = (url, headers, body) => {
  request(url, 'PUT', headers, body);
};

export { get, post, put };
