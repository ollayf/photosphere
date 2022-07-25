export default function credsReducer(state, action) {
    payload = action.payload
    switch (action.type) {
        case 'loadProfile':
            return {
                ...state,
                creds: {
                    userId: payload.user.id,
                    username: payload.user.username,
                    firstname: payload.user.firstname,
                    lastname: payload.user.lastname,
                    email: payload.user.email,
                    spheres_count: payload.user.spheres_count,
                    authenticated: true
                }
            }
        
        case 'loadSpheres':
            return {
                ...state,
                spheres: payload
            }
        case 'selectSphere':
            return {
                ...state,
                selectedSphere: payload
            }   
        default:
            return state
    }
}