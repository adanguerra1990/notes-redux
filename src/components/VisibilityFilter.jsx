import { useDispatch } from 'react-redux'
import { filterChange } from '../reducer/filterReducer'

const VisibilityFilter = () => {
  const dispatch = useDispatch()
  return (
    <div>
      All
      <input
        type='radio'
        name='filter'
        onChange={() => dispatch(filterChange('ALL'))}
      />
      Important
      <input
        type='radio'
        name='filter'
        onChange={() => dispatch(filterChange('IMPORTANT'))}
      />
      Nonimportant
      <input
        type='radio'
        name='filter'
        onChange={() => dispatch(filterChange('NONIMPORTANT'))}
      />
    </div>
  )
}

export default VisibilityFilter
