import { useState } from "react"
import React from 'react'

const GiveFeedback = ({text, handleFeedback}) => {
  return (
  <button onClick={handleFeedback}>{text}</button>
  )
}

const Statistics = ({text, feedbackCount}) => {
  return (
    <div>
      <p>{text} {feedbackCount}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good +1)

  const handleNeutralFeedback = () => setNeutral(neutral +1)

  const handleBadFeedback = () => setBad(bad+1)


    return (
      <div>
        <p><strong>give feedback</strong></p>
        <GiveFeedback text="good" handleFeedback={() => handleGoodClick()}></GiveFeedback>
        <GiveFeedback text="neutral" handleFeedback={() => handleNeutralFeedback()}></GiveFeedback>
        <GiveFeedback text="bad" handleFeedback={() => handleBadFeedback()}></GiveFeedback>
        <p><strong>statistics</strong></p>
        <Statistics text="good" feedbackCount={good}></Statistics>
        <Statistics text="neutral" feedbackCount={neutral}></Statistics>
        <Statistics text="bad" feedbackCount={bad}></Statistics>
      </div>
    )
}

export default App;
