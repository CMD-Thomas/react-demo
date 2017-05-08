
//Grabbing any items
export function areLoading(bool) {
  return {
    type: 'ARE_LOADING',
    areLoading: bool,
  };
}

export function fetchSuccess(payload) {
  return {
    type: 'FETCH_SUCCES',
    payload,
  };
}

export function haveErrored(bool) {
  return {
    type: 'HAVE_ERRORED',
    HaveErrored: bool,
  };
}

export function fetchData(url, token) {
  return (dispatch) => {
    dispatch(areLoading(true));
    axios.get(url, {
      headers: {
        'x-access-token': token,
      },
    })
    .then(response => {
      dispatch(areLoading(false));
      return response;
    })
    .then((response) => {
      dispatch(fetchSuccess(response.data));
    })
    .catch(() => {
      dispatch(haveErrored(true));
    });
  };
}

// Auth
export function requestLogin() {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false,
}

export function receiveLogin(token) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
  };
}

export function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

export function loginUser(url, name, password) {
  return dispatch => {
    dispatch(requestLogin());
    axios.post(url, {
      name,
      password,
    })
    .then(response => {
      localStorage.setItem('token', response.data.data);
      dispatch(receiveLogin(response.data.data));
    })
    .catch(err => {
      dispatch(loginError("error"));
    });
  };
}
