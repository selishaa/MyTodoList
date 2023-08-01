
import './App.css';
import Navbar  from'./component/navbar';
import AddTodo from'./component/addTodo';
import Todos from'./component/Todos';
import Footer from'./component/footer';
import React, {useState} from 'react';


function App() {


  const [todos, setTodos] = useState([]);
  
  const onDelete = (todo)=>{
    console.log("I am ondelete", todo);
    
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.getItem("todos");

  }

    const addTodo = (title, desc)=>{
      console.log("I am adding this todo", title, desc)
      let sno;
      if(todos.length==0){
        sno = 0;
      }
      else{
         sno = todos[todos.length-1].sno + 1;
      }
   
      const myTodo = {
        sno:sno,
        title: title, 
        desc: desc,
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
    }
    


  return (
    <div>
      <Navbar title=" MyTodoList" searchbar={true}/>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete}/>  
      <Footer/>

    </div>
  );
}

export default App;
