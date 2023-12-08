// "use client"
import React from 'react'
import '../form/styles1.css'
import { Metadata } from 'next'


export const metadata = {
  title: '...',
  description: '...',
}

const Page = () => {


  let route1=()=>{
    alert("hello")
  }
  return (

    <div>
        <form action="" id="id1">
            <label id="id3" htmlFor="id"> Text Box</label> 
            <input type="text" id="id" placeholder='enter any text' />
            

        </form>
            <button onClick={1}>Window open func</button>
    </div>
  )
}

export default Page
