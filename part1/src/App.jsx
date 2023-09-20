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
  const part1 = {
    name: 'Fundamentals of React',
    exercises:10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
        <Header course={course} />

        <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />

        <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />

    </div>
  )
}

export default App