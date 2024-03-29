const Header = (props) => {
  console.log(props)
  return (
  <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
    </div>
  )
}

  
const Total = (props) => {
  console.log(props)
  return (
    <p>Number of Exercises{' '}{props.parts.reduce((total, part) => part.exercises + total, 0)}</p>
  )
}

const Part = (props) => (
  <p>{props.part.name} {props.part.exercises}</p>
)


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }

  return (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
  )
}

export default App