export function haveErrored(state = false, action) {
    switch (action.type) {
        case 'HAVE_ERRORED':
            return action.haveErrored;
        default:
            return state;
    }
}
export function areLoading(state = false, action) {
    switch (action.type) {
        case 'ARE_LOADING':
            return action.areLoading;
        default:
            return state;
    }
}

// Changes state according to the action
export function items(state = { items: [] }, action) {
    switch (action.type) {
        case 'FETCH_SUCCES':
            return {
                ...state, items: action.payload.users
            }
        default:
            return state;
    }
}

export function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
  }, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      }
    default:
      return state
  }
}


