import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
  
  const vote = anecdote => {
    dispatch(addVote(anecdote.id))
    dispatch(createNotification(`You voted for '${anecdote.content}'`))
    setTimeout(() => {dispatch(removeNotification())}, 5000)
  }



    return (
        <div>
        {[].concat(anecdotes).sort((a, b) => a.votes > b.votes ? -1 : 1).map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </div>
    
  )}
  </div>
)}

export default AnecdoteList