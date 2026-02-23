
import { useState } from "react"
import './style.css'

const Random = ()=>{

    const[num,setnum] = useState(null)

   const click = ()=>{
    setnum(Math.floor(Math.random()*100+1))
   }
   
    return(<>
    <div style={{backgroundColor:"pink"}}className="container">
    <div style={{backgroundColor:"#ADD8E6"}} className="container1">

    <h1 style={{color:"#2F6F73"}}>Generate Random Number</h1>
    <p>Min:1</p>
    <p>Max:100</p>
    <h1 style={{color:"green"}}>{num === null? "No number generated yet!!" : num}</h1>

    <button onClick={click} className="btn">Generate  Random Number</button>

    </div>
    </div>
    </>)
}

export default Random