import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { groupSlice, watchFetchGroup } from './'

const sageMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        group: groupSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sageMiddleware),
})

sageMiddleware.run(watchFetchGroup)
