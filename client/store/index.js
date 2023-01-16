import {createLogger} from 'redux-logger'
import {configureStore} from '@reduxjs/toolkit'

import auth from './authSlice'
import gameSlice from './gameSlice'

const store = configureStore({
  reducer: {auth, gameSlice},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createLogger({collapsed: true}))
})

export default store
export * from './authSlice'
