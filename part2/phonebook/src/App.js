import React, { useState } from 'react'

const Number = ({person}) => {
  console.log(person.name)
  return (
    <div>{person.name} {person.number}</div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ nameFilter, setNameFilter] = useState('')
  const [showAll, setShowAll] = useState(true)


  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number:newNumber
    }
    let duplicates = persons.filter(person => person.name === newName)
    if (duplicates.length > 0) {
      window.alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
    setShowAll(false)
  }

  const namesToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().cont(newName))

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>filer with a <input value={nameFilter} onChange={handleFilterChange}/></div>
      </form>
      <h2>add to phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameInputChange}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberInputChange}/></div>
        {/* <div>debug: {newName}</div> */}
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {namesToShow.map(person => {
          console.log(person)
          return <Number key={person.name} person={person}/>
        })}
      </ul>
    </div>
  )
}

export default App