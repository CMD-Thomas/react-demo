import axios from 'axios';

export function usersHaveErrored(bool) {
  return {
    type: 'USERS_HAVE_ERRORED',
    haveErrored: bool,
  };
}

export function usersAreLoading(bool) {
  return {
    type: 'USERS_ARE_LOADING',
    areLoading: bool,
  };
}

export function usersFetchSuccess(users) {
  return {
    type: 'USERS_FETCH_SUCCES',
    users,
  };
}

export function usersFetchData(url, token) {
  return (dispatch) => {
    dispatch(usersAreLoading(true));
    axios.get(url, {
      headers: {
        'x-access-token': token,
      },
    })
    .then(response => {
      dispatch(usersAreLoading(false));
      return response;
    })
    .then((response) => {
      dispatch(usersFetchSuccess(response.data));
    })
    .catch(() => {
      dispatch(usersHaveErrored(true));
    });
  };
}

