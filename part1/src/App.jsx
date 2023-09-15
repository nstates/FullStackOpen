const Header = (course) => {
  return (
    <>
      {course.course}
    </>
    
  )
}

const Part = (course) => {
  console.log(course.part)

  return (
    <>
      <p>
        {course.part} {course.exercises}
      </p>
    </>
  )
}

const Content = (course) => {
  console.log(course.part1)
  console.log(course.exercises1)
  return (
    <>
      <Part part={course.part1} exercises={course.exercises1} />
      <Part part={course.part2} exercises={course.exercises2}/>
      <Part part={course.part3} exercises={course.exercises3}/>
    </>
  )
}

const Total = (course) => {
  return (
    <>
      Number of exercises {course.exercises1 + course.exercises2+ course.exercises3}
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Header course={course} />

        <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />

        <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />

    </div>
  )
}

export default App