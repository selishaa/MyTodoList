import Todoitem from './Todo';
import React from 'react'

const Todos = (props) => {
  return (
    <div className='container'> 
    <h3 className='text-center my-3'>My Todos List</h3> 
    {props.todos.length===0? "No Todos to display":
    props.todos.map((todo)=>{
    return  <Todoitem todo={todo} key={todo.sno}onDelete={props.onDelete}/>}
 
  )}
  
  
     
     
    </div>
  )
}


export default Todos
