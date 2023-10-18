const Header = (course) => {
  console.log(course.course.name)
  return <h1>{course.course.name}</h1>
}

/*const Part = (parts) => {

  return (
    <>
      <p>
        parts.forEach(part => {
          console.log(part.name, part.exercises)
        })
      </p>
    </>
  )
}
*/

const Content = (course) => {

  return (
    <>
    <p> {course.course.parts[0].name} </p>
    <p> {course.course.parts[1].name} </p>
    <p> {course.course.parts[2].name} </p>
    </>
  )
}


const Total = (parts) => {
  return (
    <>
    <p>{parts.parts.parts[0].exercises}</p>
    <p>{parts.parts.parts[1].exercises}</p>
    <p>{parts.parts.parts[2].exercises}</p>
    </>

    
    
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises:7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  return (
    <div>
        <Header course={course} />
        <Total parts={course} />
        <Content course={course} />


    </div>
  )
}

export default App