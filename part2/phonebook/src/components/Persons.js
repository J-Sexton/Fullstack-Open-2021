import React from 'react'
import Person from './Person'
const Persons = ({namesToShow}) =>{
    return(
    <ul>
        {namesToShow.map(person =>
            <Person key={person.id} person={person}></Person>)}
    </ul>
    )
}

export default Persons