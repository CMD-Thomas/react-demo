export function usersHaveErrored(state = false, action) {
    switch (action.type) {
        case 'USERS_HAVE_ERRORED':
            return action.haveErrored;
        default:
            return state;
    }
}
export function usersAreLoading(state = false, action) {
    switch (action.type) {
        case 'USERS_ARE_LOADING':
            return action.areLoading;
        default:
            return state;
    }
}

// Changes state according to the action
export function users(state = { users: [] }, action) {
    switch (action.type) {
        case 'USERS_FETCH_SUCCES':
            return {
                ...state, users: action.users.users
            }
        default:
            return state;
    }
}

