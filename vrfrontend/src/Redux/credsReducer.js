export default function credsReducer(state, action) {
    payload = action.payload
    switch (action.type) {
        case 'logIn':
            return {
                ...state,
                creds: {
                    userId: payload.user.id,
                    username: payload.user.name,
                    firstname: payload.user.firstname,
                    lastname: payload.user.lastname,
                    email: payload.user.email,
                    authenticated: true
                }
            }
        default:
            return state
    }
}