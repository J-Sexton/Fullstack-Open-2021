import React from 'react'

const Filter = ({nameFilter, handleFilterChange}) =>{
    return (
        <form>
            <div>filter with a <input value={nameFilter} onChange={handleFilterChange}/></div>
        </form>
    )
}

export default Filter