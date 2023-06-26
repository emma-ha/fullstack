import { useState, useEffect } from 'react'

import personService from './services/Persons'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([

  ]) 

  useEffect(() => {
    personService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQ, setSearchQ] = useState('')

  const handleName = event => setNewName(event.target.value)

  const handleNumber = event => 
  {
    setNewNumber(event.target.value)
  }

  const handleSearch = event => 
  {
    setSearchQ(event.target.value)
  }

  const handleRemove = (name,id) =>
  {
    if(window.confirm(`Delete ${name}?`)){
      personService.del(id).then(deletedPerson => {
        setPersons(persons.filter(person => person.name !== deletedPerson.name))
      })
    }
  }
  const handlePerson = event =>
  {
    event.preventDefault()

    if(persons.find(person => person.name === newName)){
      alert({newName} + ' is already added to phonebook')
    }
    else{
      const newPerson = {name : newName, number: newNumber}

      personService.create(newPerson).then(addedPerson =>{
        setPersons(persons.concat(addedPerson))
      })

    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search = {searchQ} handleSearch = {handleSearch} />
      <h2>Add a new</h2>
      <Form name = {newName} number = {newNumber} handleNa = {handleName} handleNu = {handleNumber} handleP = {handlePerson}/>
      <h2>Numbers</h2>
      <Persons persons = {persons} search = {searchQ} handleRemove = {handleRemove}/>
    </div>
  )
}

export default App