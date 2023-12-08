"use client"
import styles from './page.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'



const todos = ()=>{
  let list = localStorage.getItem("list")
  console.log(JSON.parse(list))
  
  return JSON.parse(list)

}

export default function Home() {
  
  const [text, setText] = useState("")
  const [todolist, setTodolist] = useState(todos())
  
  const clearall = (e)=>{
    e.preventDefault();
    setTodolist([])
    localStorage.setItem("list" , JSON.stringify(todolist))
  }
  useEffect(() => {
    setTodolist(todos())
  }, [text])
  
  

  const addfunction = (e) => {
    e.preventDefault();
    if (!text) {      
    } else {
      localStorage.setItem('list', JSON.stringify([...todolist,text]))
      setText("")
    }
  }

  const removeitem = (todolist,id)=>{
  
  }



  return (
    <main className={styles.main}>
      <Link href="/form">form</Link>
      <h1>Home Page :Todo</h1>

      <form>
        <label htmlFor="inputid">add task</label> <br />
        <input type="text" id='inputid' onChange={e => setText(e.target.value)} value={text} />
        <button onClick={addfunction} >Add</button>
        <button onClick={clearall}>clear all</button>
      </form>
      <ol>
      {todolist.map((key)=>{
        return <li> {key} </li>
      })}
      </ol>
      
    </main>
  )
}
