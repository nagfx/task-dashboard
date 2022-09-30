import React from 'react'

function SearchList(props) {
  return (
    <ul>
        {props.tasks.map((task) => {
          return <li className='list-paddings' key={task.id}>{task.taskname}</li>
        })}
    </ul>
  )
}

export default SearchList