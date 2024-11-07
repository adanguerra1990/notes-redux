import { useDispatch } from 'react-redux'
import { createNote } from '../reducer/notesReducer'
import noteService from '../services/notes'

const NewNote = () => {
  const dispatch = useDispatch()

  const addNote = async event => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    const newNote = await noteService.createNew(content)
    dispatch(createNote(newNote))
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default NewNote
