import { configureStore } from '@reduxjs/toolkit'
import { pinApi } from '../services/pins';
import { switchApi } from '../services/switches';

export const store = configureStore({
  reducer: {
      [pinApi.reducerPath]: pinApi.reducer,
      [switchApi.reducerPath]: switchApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
  .concat(pinApi.middleware).concat(switchApi.middleware)
})

export default store;