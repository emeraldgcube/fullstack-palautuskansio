import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const allpointszero = Array(anecdotes.length).fill(0)
  const [points, setPoints] = useState(allpointszero)
  const vote = () =>{ 
      const copied = [...points]
  copied[selected] += 1
    setPoints(copied)}     

   const mostvotesvalue = Math.max(...points)
    const anecdotewithmostvotes = points.indexOf(mostvotesvalue)

  return (
    <div>
        <h2>Anecdote of the day</h2>
      {anecdotes[selected]} <br></br>
    {points[selected]}
    <br></br>
    <button onClick={()=>setSelected((Math.floor(Math.random() * 7)))}>
        next anecdote
    </button>
    <button onClick={()=>vote()}>
        vote
    </button>
    <h2>Anecdote with most votes</h2>
    {anecdotes[anecdotewithmostvotes]}
    </div>

  )
}

export default App