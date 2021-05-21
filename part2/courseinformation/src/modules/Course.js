import React from 'react';

const Header = ({ course }) => {
    return (
      <p>{course.name}</p>
    )
  }
  
  const Total = ({ course }) => {
    const reducer = (accumulator, currentValue) => { return accumulator + currentValue.exercises}
    return(
      <p>total of {course.parts.reduce(reducer,0)} exercises</p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <li>{props.part.name} {props.part.exercises}</li> 
    )
  }
  
  const Content = ({ course }) => {
    return (
      <ul>
        {course.parts.map(part =>
          <Part key={part.id} part={part}/>
          )}
      </ul>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <h1><Header course={course}></Header></h1>
        <Content course={course}></Content>
        <Total course={course}></Total>
      </div>
    )
  }

  export default Course