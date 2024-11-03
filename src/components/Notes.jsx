import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducer/notesReducer'

const Note = ({ note, haandleClick }) => {
  return (
    <li onClick={haandleClick}>
      {note.content} <strong>{note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state) => {
    if (state.filter === 'ALL') {
      return state.notes
    }
    return state === 'IMPORTANT'
      ? state.notes.filter((note) => note.important)
      : state.notes.filter((note) => !note.important)
  })
  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          haandleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  )
}

export default Notes
