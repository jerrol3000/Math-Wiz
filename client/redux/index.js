import {createLogger} from 'redux-logger'
import {configureStore} from '@reduxjs/toolkit'

import auth from './authSlice'
import mathGameSlice from './gameSlice'

const store = configureStore({
  reducer: {auth, mathGameSlice},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createLogger({collapsed: true}))
})

export default store
export * from './authSlice'
