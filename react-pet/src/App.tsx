import { ReactNode, createElement, useState } from 'react'
import './App.css'

export default function App() {
  const [test, setTest] = useState("");
  const [todoList, setTodoList] = useState<any>([]);
  const [itemForm, setItemForm] = useState({tag:"", task:""});
  

function onInputChange(e:any){  
  const { name, value } = e.currentTarget;
  
  setItemForm((prevItem)=>({
    ...prevItem,  
    [name]: value,
  })
  )
  console.log(itemForm)
}
  console.log(todoList);
  return (
    <ul className='todo-list'>
      <li className="todo-wrapper" onClick={(e)=>{
         setTodoList((prev:any)=>[...prev, itemForm])
      }}>
        <input name='tag' type="text" onClick={(e)=>e.stopPropagation()} onInput={onInputChange}/>
        <input name='task' type="text" onClick={(e)=>e.stopPropagation()} onInput={onInputChange}/>
      </li>
    </ul>
  )
  }

