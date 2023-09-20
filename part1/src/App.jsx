const Header = (course) => {
  return (
    <>
      {course.course}
    </>
    
  )
}

const Part = (course) => {

  return (
    <>
      <p>
        {course.part} {course.exercises}
      </p>
    </>
  )
}

const Content = (course) => {

  return (
    <>
      <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part part={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Part part={course.parts[2].name} exercises={course.parts[2].exercises}/>
    </>
  )
}

const Total = (course) => {
  return (
    <>
      Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises:10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
 
  return (
    <div>
        <Header course={course} />

        <Content parts={parts} />

        <Total parts={parts}/>

    </div>
  )
}

export default App