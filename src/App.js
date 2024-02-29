import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

const App = ()  => {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks,setTasks] = useState(
    [
      {
          id : 1,
          text : 'Go Swimming',
          day : 'Feb 28 at 4:00pm',
          reminder : false,
      },
      {
          id : 2,
          text : 'Go Bike Riding',
          day : 'Feb 29 at 11:00am',
          reminder : true,
      },
      {
          id : 3,
          text : 'Water the plants',
          day : 'Mar 1 at 12:00pm',
          reminder : true,
      },
  
  ]
  )   


// ADD TASK

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = { id, ...task};
  setTasks([...tasks, newTask])
 }

//DELETE TASK
const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id !== id) )
}

// TOGGLE REMINDER
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task,reminder : !task.reminder} : task))
}
  return (
   <div className="container">
    
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />  

     {showAddTask &&  <AddTask onAdd={addTask} />}

    {
    tasks.length > 0 ? (
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    ) :( 
      'No Tasks Pending, Get some sleep')
      }
   </div>
  );
}



export default App;
