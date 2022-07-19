import { configureStore } from '@reduxjs/toolkit';
import { Pressable } from 'react-native';
import credsReducer from './credsReducer'

const preloadedState = {
    creds: {
        userId: null,
        username: "beans",
        email: null,
        firstname: null,
        lastname: null,
        authenticated: false
    },
    spheres: []
}

const store = configureStore({
    reducer: credsReducer,
    preloadedState: preloadedState
})

export default store;