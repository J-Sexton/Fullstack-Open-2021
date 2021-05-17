import { useState } from "react"
import React from 'react'

const GiveFeedback = ({text, handleFeedback}) => {
  return (
  <button onClick={handleFeedback}>{text}</button>
  )
}

const SingleStatistic = ({text, stat, total}) => {
  if(total === 0) {
    return (
      <div>
        No Feedback Given
      </div>
    )
  } else {
    return (
      <div>
        <p>{text} {stat}</p>
      </div>
    )
  }

}

const Statistics  = ({goodFeedbackCount, neutralFeedbackCount, badFeedbackCount, feedbackAverage, positiveFeedbackPercentage, total}) => {
  if (total === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }else {
    return(
      <div>
        <SingleStatistic text="good" stat={goodFeedbackCount}></SingleStatistic>
        <SingleStatistic text="neutral" stat={neutralFeedbackCount}></SingleStatistic>
        <SingleStatistic text="bad" stat={badFeedbackCount}></SingleStatistic>
        <SingleStatistic text="all" stat={total}></SingleStatistic>
        <SingleStatistic text="average" stat={feedbackAverage}></SingleStatistic>
        <SingleStatistic text="positive" stat={positiveFeedbackPercentage}></SingleStatistic>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    setGood(good +1)
    updateTotal()
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral +1)
    updateTotal()
  }

  const handleBadFeedback = () => {
    setBad(bad+1)
    updateTotal()
  }

  const updateTotal = () => setTotal(total+1)

  const calculateFeedbackAverage = () => {
    var sum = good - bad
    return String(sum/total)
  }

  const positivePercentage = () => {
    return (good/total)*100 + "%"
  }


    return (
      <div>
        <p><strong>give feedback</strong></p>
        <GiveFeedback text="good" handleFeedback={() => handleGoodClick()}></GiveFeedback>
        <GiveFeedback text="neutral" handleFeedback={() => handleNeutralFeedback()}></GiveFeedback>
        <GiveFeedback text="bad" handleFeedback={() => handleBadFeedback()}></GiveFeedback>
        <p><strong>statistics</strong></p>
        <Statistics goodFeedbackCount={good}
        badFeedbackCount = {bad}
        neutralFeedbackCount = {neutral}
        feedbackAverage = {calculateFeedbackAverage()}
        positiveFeedbackPercentage = {positivePercentage()}
        total={total}></Statistics>
      </div>
    )
}

export default App;
