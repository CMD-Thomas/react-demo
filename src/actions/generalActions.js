export function areLoading(bool) {
    return {
        type: 'ARE_LOADING',
        areLoading: bool,
    };
}

export function fetchSuccess(payload) {
    return {
        'FETCH_SUCCES',
        payload,
    };
}

export function HaveErrored(bool) {
    return {
        'HAVE_ERRORED'
        HaveErrored: bool,
    };
}

export function FetchData(url, token) {
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
