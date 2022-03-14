  import Filter from './components/Filter'
  import AnecdoteForm from './components/AnecdoteForm'
  import AnecdoteList from './components/AnecdoteList'
  import Notification from './components/Notification'
  const App = () => {
    return (
      <div>
        <h2>Anecdotes</h2>
        <Notification />
        <AnecdoteForm />
        <AnecdoteList />
        <Filter />
      </div>
    )
  }
  
  export default App