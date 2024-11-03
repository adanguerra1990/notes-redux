import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import noteReducer, { createNote } from './reducer/notesReducer.js'
import filterReducer, { filterChange } from './reducer/filterReducer.js'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
})

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(
  createNote('combineReducers forms one reducer from many simple reducers')
)

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div />
  </Provider>
)
