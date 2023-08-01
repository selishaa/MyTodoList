
import './App.css';
import Navbar  from'./component/navbar';
import Todos from'./component/Todos';
import Footer from'./component/footer';


function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc:"You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc:"You need to go to the mall to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the salon",
      desc:"You need to go to the salon to get this job done3"
    }
  ]
  const onDelete = ()=>{
    console.log("I am ondelete")

  }
  return (
    <div>
      <Navbar title=" MyTodoList" searchbar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>  
      <Footer/>

    </div>
  );
}

export default App;
