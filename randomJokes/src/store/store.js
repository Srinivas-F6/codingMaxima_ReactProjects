import {configureStore} from '@reduxjs/toolkit'
import jokeapiReducer from './jokeapislice.js'
export const store = configureStore({
    reducer:{
       jokeapi: jokeapiReducer,
    },
})