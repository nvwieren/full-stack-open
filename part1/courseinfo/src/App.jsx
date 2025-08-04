const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  let contents = props.course.parts.map(part => {    
      return (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      )
  })
  return contents;
}

const Total = (props) => {
  let total = 0;
  props.course.parts.map(part => total += part.exercises);
  return (
    <p>
      Number of exercises {total}
    </p>
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
        exercises: 7
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
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App