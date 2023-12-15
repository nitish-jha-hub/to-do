import React from 'react'

const Map = () => {
  let arrowoflist = [" pen","paper","water","milk","Mahadev"];
  let arrstr = arrowoflist.join(" ");
  
  let objlist = {
    Name : "Nitish",
    age : 26,
    passion1: "JS",
    passion2 : "python"
  }
  
  var a = "fuyiui iuyiuy lio"
  return (
    <>
    <div>{arrstr}</div>
    <ol>
      {/* map function retutn 2 props i.e: value and index in case of array*/}
    {arrowoflist.map((value,index)=>{return <li key={index}>{value}</li>})}
    {/* to print a object key and value we convert obj key to array and then render by map key refrence */}
    {Object.keys(objlist).map((value,index)=>{return <li key={index}>{value} = {objlist[value]}</li>})}
    </ol>
    </>
  )
}

export default Map