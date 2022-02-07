import { useState } from 'react'
const Person = ({person}) => {
    return <div>
        {person.name} {person.number}
    </div>
}
const Filter = (props) => {
    return(
    <div>
    Filter by: <input
    value = {props.filter}
    onChange = {props.handlefilterchange}
    />
</div>)
}
const AddNewForm = (props) => {
    return(
        <form onSubmit={props.addPerson}>
        <div>
          name: <input
          value={props.newName}
          onChange={props.handleNameChange}
           />
        </div>
        <div>
            number: <input 
            value={props.newNumber}
            onChange={props.handleNumberChange}
            />

        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
    { name: "Anomaly Krugenstein", number: "0420-666-808" }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  
  const [filter, setFilter] = useState("")
  const personsToShow = (filter === "")
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))


  const addPerson = (event) => {
      event.preventDefault()
      const sameName = persons.find(person => person.name === newName);
      console.log(sameName)
      if (sameName) {
          window.alert(newName + " löytyy jo!")
             }
      else {
      setPersons(persons.concat({ name: newName, number: newNumber}))
      }
      console.log(persons)
      setNewName("")
      setNewNumber("")
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
}

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleFilterChange = (event) => {
        setFilter(event.target.value)      
  }


  return (
    <div>
      <h2>Phonebook</h2>
          <Filter filter={filter} handlefilterchange={handleFilterChange}/>
      <h3> Add new</h3>
        <AddNewForm newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
         />
      <h2>Numbers</h2>
      <ul>
          {personsToShow.map((person, index) => 
          <Person key={index} person={person} />
          )}
      </ul>
    </div>
  )

}

export default App