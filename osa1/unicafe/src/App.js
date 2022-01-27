import { queryByDisplayValue } from '@testing-library/react'
import { useState } from 'react'

const Statistics = (props) => {
    if (props.good + props.neutral + props.bad === 0) {
        return ( <div>No feedback given</div>)
    }


    return (
                <table cellspacing="0" cellpadding="0">
    <StatisticLine name="good" value={props.good}/> 
    <StatisticLine name="neutral" value={props.neutral}/>
    <StatisticLine name="bad" value={props.bad}/>
    <StatisticLine name="all" value={props.good + props.neutral + props.bad}/>
    <StatisticLine name="average" value={(props.good+(props.bad*-1))/(props.good+props.neutral+props.bad) }/>
    <StatisticLine name="positive" value={100*(props.good/(props.good + props.neutral + props.bad))}/>
    </table>
    )
}
const Button = (props) => {
    return( 
        <button onClick={() => props.setvalue(props.value + 1)}>
        {props.name}
        </button>
    )
}

const StatisticLine = (props) => {
    if (props.name === "positive") {
        return <tr><td>{props.name}</td><td> {props.value} %</td> </tr>
    }
    return(<tr>
        <td>{props.name}</td><td> {props.value}</td>
    </tr>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <h2>give feedback</h2>
     
<Button setvalue={setGood} value={good} name="good"></Button>

<Button setvalue={setNeutral} value = {neutral} name="neutral"></Button>

<Button setvalue={setBad} value={bad} name="bad"></Button>

<h2>results</h2>
<Statistics good={good} neutral = {neutral}bad={bad}></Statistics>
</div>
  )
}

export default App