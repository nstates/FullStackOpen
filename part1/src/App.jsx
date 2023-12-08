import { useState } from 'react'

const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [num, setNum] = useState(0);
  const length = anecdotes.length
  const [votes, setVotes] = useState(Array(length).fill(0))
  const [most_voted, setMost_voted] = useState(0)
  const checkHighestVote = () => {
    if (votes[selected] > votes[most_voted]) {
      setMost_voted(selected)
    }
  }

 

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} vote(s)</p>

      <button onClick={() => setSelected(randomNumberInRange(0, length - 1))}>
        next anecdote
      </button>

      <button onClick={
        () => {
          const copy = [...votes]
          copy[selected] += 1
          setVotes(copy)
        }}>
        vote
      </button>

      <h2>Highest-voted anecdote</h2>
      {checkHighestVote()}
      <p>{anecdotes[most_voted]}</p>
      <p>has {votes[most_voted]} vote(s) </p>
      {console.log(votes)}
    </div>
  )
}

export default App