import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = ((good / all) * 100) + ' %'
  return(
    <div>
      <h2>statistics</h2>
      <StatisticsLine text="good" value ={good} />
      <StatisticsLine text="neutral" value ={neutral} />
      <StatisticsLine text="bad" value ={bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positive} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const inc = (state, setState) => () => setState(state + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={inc(good, setGood)} text="good" />
      <Button onClick={inc(neutral, setNeutral)} text="neutral" />
      <Button onClick={inc(bad, setBad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App