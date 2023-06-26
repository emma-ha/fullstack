const Sum = ({parts}) => (
    <p>
      Total is {parts.reduce((a, b) => a + b.exercises, 0)} exercises
    </p>
  )
  
  const Part = ({part}) => (
    <p>
      {part.name}{part.exercises}
    </p>
  )
  
  const Content = ({parts}) => (
    <div>
      {parts.map(part =>(
        <Part key = {part.id} part = {part}/>
      ))}
    </div>
  )
  
  const Header = ({heading}) => (
    <h1>{heading}</h1>
  )
  
  const Courses = ({ courses }) => (
    <>
    <h1>Web Development Curriculum</h1>
      {courses.map(course => (
        <div>
          <Header heading={course.name} />
          <Content parts={course.parts} />
          <Sum parts={course.parts} />
        </div>
      ))}
    </>
  )

export default Courses