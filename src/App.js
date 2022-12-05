import './App.css';
import { ToDoList } from './ToDoList';
import image from './mir.jpeg';


function App() {
  return (
    <div className='app'>
      <div className='container'>
     <img src={ image } width='250px' alt='list'/>
     </div>
     <div className='container'>
     <h1>The best countries...</h1>
     </div>
   <ToDoList/>
    </div>
  );
}

export default App;