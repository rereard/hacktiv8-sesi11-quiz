import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import postsReducer from './features/posts/postsSlice'
export const store = configureStore({
    reducer: {
        posts: postsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})