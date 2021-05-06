import React from "react";
import Tododata from './components/Tododata';
import Todoitem from './components/Todoitem'
import './style.css';
function App (){
   const todo=Todoitem.map(item=> <Tododata key={item.id} item={item}/>)
   
  return(
   
    <div>
        <h1>practice work</h1>
        {todo}
    </div>
  )
}
export default App;