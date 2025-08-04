import { useState } from 'react'

const Button = ({ label, onClick }) =>  {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) {
    return "No feedback given"
  }

  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (    
      <table>
        <tbody>
          <StatisticLine label="good" value={good} />
          <StatisticLine label="neutral" value={neutral} />
          <StatisticLine label="bad" value={bad} />
          <StatisticLine label="all" value={all} />
          <StatisticLine label="average" value={average.toFixed(1)} />
          <StatisticLine label="positive" value={positive.toFixed(1) + '%'} />
        </tbody>
      </table>    
  )
}

const StatisticLine = ({ label, value }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>       
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleAddGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }
  const handleAddNeutral = () => setNeutral(neutral + 1)
  const handleAddBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button label="Good" onClick={handleAddGood} />
        <Button label="Neutral" onClick={handleAddNeutral} />
        <Button label="Bad" onClick={handleAddBad} />
      </div>
      
      <h1>statistics</h1>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>      
    </div>
  )
}

export default App