import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  //const votes = new Array(6).join('0').split('').map(parseFloat)
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6+1).join('0').split('').map(parseFloat))

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const getAnecdoteWithHighestVotes = () => {
    let indexOfLargetsVotes = 0
    votes.forEach((element, index) => {
      if (element > votes[indexOfLargetsVotes]){
        indexOfLargetsVotes = index
      }
    })
    return indexOfLargetsVotes
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected]+=1
    setVotes(copy)
  }

  return (
    <div>
      <p><strong>Anecdote of the day</strong></p>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={(handleNextAnecdote)}>next anecdotes</button>
      <button onClick={(handleVote)}>vote</button>

      <p><strong>Anecdote with the most votes</strong></p>
      <p>{anecdotes[getAnecdoteWithHighestVotes()]}</p>
      <p>has {votes[getAnecdoteWithHighestVotes()]}</p>



    </div>
  )
}

export default App