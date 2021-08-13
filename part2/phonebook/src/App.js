import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
// const Number = ({person}) => {
//   console.log(person.name)
//   return (
//     <div>{person.name} {person.number}</div>
//   )
// }

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
  const [ showAll, setShowAll] = useState(true)


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
    : persons.filter(person => person.name.toLowerCase().includes(nameFilter))

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange}></Filter>
      <h2>add to phonebook</h2>
        <PersonForm newName={newName} handleNameInputChange={handleNameInputChange} newNumber={newNumber} handleNumberInputChange={handleNumberInputChange} addName={addName}></PersonForm>
      <h2>Numbers</h2>
        <Persons namesToShow={namesToShow}></Persons>
    </div>
  )
}

export default App