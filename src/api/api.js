import axios from 'axios';


export function getToken(request, name, password, callback) {
  axios.post(request, {
    name,
    password,
  })
  .then(response => {
    callback(response.data);
  })
  .catch(error => {
    callback(error);
  });
}

export function get(url, token, callback) {
  axios.get(url, {
    headers: {
      'x-access-token': token,
    },
  })
  .then(response => {
    callback(response.data);
  })
  .catch(error => {
    callback(error);
  });
}
