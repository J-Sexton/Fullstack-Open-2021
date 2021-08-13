import React from 'react'

const PersonForm = ({newName, handleNameInputChange, newNumber, handleNumberInputChange, addName}) =>{
    return (
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
    )
}

export default PersonForm