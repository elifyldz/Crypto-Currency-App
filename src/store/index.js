import { configureStore } from '@reduxjs/toolkit'
import portfoySlice from './slices/portfoy'


export const store = configureStore({
    reducer:{
            portfoy: portfoySlice
    }
})
