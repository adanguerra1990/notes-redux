import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './reducer/notesReducer'
import filterReducer from './reducer/filterReducer'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
})

export default store
