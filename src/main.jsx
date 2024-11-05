import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import noteReducer, { createNote } from './reducer/notesReducer.js'
import filterReducer, { filterChange } from './reducer/filterReducer.js'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
})

console.log(store.getState())

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
