import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <>
      <td>{props.text}</td> 
      <td>{props.value} </td>
    </>
    
  )
}
const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text="good" value={props.good} />
        </tr>

        <tr>
          <StatisticLine text="neutral" value={props.neutral} />
        </tr>

        <tr>
          <StatisticLine text="bad" value={props.bad} />
        </tr>

        <tr>
          <StatisticLine text="total" value={props.total} />
        </tr>

        <tr>
          <StatisticLine text="average" value={props.average} />
        </tr>

        <tr>
          <StatisticLine text="positive" value={(props.good / props.total) * 100} /><td>%</td>
        </tr>
      </tbody> 
    </table>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  // add total, average out of 1, percent of positive
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)


  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    setAverage((updatedGood - bad) / (updatedGood + bad + neutral))
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
    setAverage((good - bad) / (good + bad + updatedNeutral))
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
    setAverage((good - updatedBad) / (good + updatedBad + neutral))
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} />
      
    </div>
  )
}

export default App