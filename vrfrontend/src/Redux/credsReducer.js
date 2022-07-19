export default function credsReducer(state, action) {
    payload = action.payload
    switch (action.type) {
        case 'logIn':
            return {
                ...state,
                creds: {
                    userId: payload.user.id,
                    username: payload.user.username,
                    firstname: payload.user.firstname,
                    lastname: payload.user.lastname,
                    email: payload.user.email,
                    authenticated: true
                }
            }
        
        case 'loadSpheres':
            return {
                ...state,
                spheres: payload.spheres
            }
        default:
            return state
    }
}