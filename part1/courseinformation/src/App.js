import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  let  content = []
  props.parts.forEach(x => {
    content.push(<Part part={x.name} exercise={x.exercises} />)
  })
  return (
    <div>
      {content}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
    {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  const total = () => {
      let sum = 0;
      props.parts.forEach(element => {
        sum += element.exercises
      });
      return sum
    }
  return (
    <p>
      Number of excercise {total()}
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}



export default App