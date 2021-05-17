import { useState } from "react"
import React from 'react'

const Button = ({text, handleFeedback}) => {
  return (
  <button onClick={handleFeedback}>{text}</button>
  )
}

const Statistic = ({text,value, total}) => {
  if(total === 0) {
    return (
      <div>
        No Feedback Given
      </div>
    )
  } else {
    return (
        <tr>
          <td>{text}</td>
          <td></td> 
          <td>{value}</td>
        </tr>
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
      <table>
        <tbody>
        <Statistic text="good" value={goodFeedbackCount}></Statistic>
        <Statistic text="neutral" value={neutralFeedbackCount}></Statistic>
        <Statistic text="bad" value={badFeedbackCount}></Statistic>
        <Statistic text="all" value={total}></Statistic>
        <Statistic text="average" value={feedbackAverage}></Statistic>
        <Statistic text="positive" value={positiveFeedbackPercentage}></Statistic>
        </tbody>
      </table>
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
        <Button text="good" handleFeedback={() => handleGoodClick()}></Button>
        <Button text="neutral" handleFeedback={() => handleNeutralFeedback()}></Button>
        <Button text="bad" handleFeedback={() => handleBadFeedback()}></Button>
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
