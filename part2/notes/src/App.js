import React from 'react'
import Notes from './components/Notes'


const App = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Notes kye={notes.id} note={note}></Notes>
          )}
      </ul>
    </div>
  )
}

export default App