import React from 'react';
function Tododata(props){
  return(
    <div class="todo">
     
         <input type="checkbox" checked={props.item.completed}/>
         <p>{props.item.text}</p>
         <hr></hr>
      
    </div>
  )

}
export default Tododata;
  