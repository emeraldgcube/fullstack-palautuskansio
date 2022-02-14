import { useState, useEffect } from 'react'
import personService from "./services/persons"

const Person = ({person, delPerson}) => {
    const uid = person.id
    return <div>
        {person.name} {person.number} <button onClick={() => delPerson(uid)}>Poista</button>
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

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  
  const [filter, setFilter] = useState("")
  const personsToShow = (filter === "")
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

  const delPerson = (uid) => {
      if (window.confirm("Haluatko poistaa tämän yhteystiedon?")) {

      personService.delPerson(uid)
      .then(response => {
          console.log(response)
      })
    }
  }
  const addPerson = (event) => {
      event.preventDefault()
      const sameName = persons.find(person => person.name.toUpperCase() === newName.toUpperCase());
      const newObject = {
          name: newName,
          number: newNumber
      }

      if (sameName) {
          window.alert(newName + " löytyy jo!")
             }
      else {
        personService.create(newObject)
        .then(response => {
            console.log(response)
            setPersons(persons.concat(response.data))
        })
        .catch(error => {
            console.log(50*"#" + error.response)
            alert(error.response.data)
        })
        
      setNewName("")
      setNewNumber("")
    }
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
  useEffect(() => {
    personService.getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])


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
          <Person key={index} person={person} delPerson={delPerson} />
          )}
      </ul>
    </div>
  )

}

export default App