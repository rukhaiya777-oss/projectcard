import { useState } from "react";
import Button from "@mui/material/Button"
function Name(){
    // const[user,setuser]=useState("hello  ");
    const [user,setuser]=useState(" ");
//   function get(){
//     console.log(ison);
//   }
//   get();
   
    // function getvalue(){
    //    let a=document.getElementById("btn").innerText;
    //    console.log(a);

    // }
   const [flag,setflag]=useState(true);
return(
    <>

    <h1 id="head">{user}</h1>
    <input type="text" name="sayed" onClick={(el)=>setuser("hello "+el.target.value).then(()=>setflag(false)).then(console.log(flag))}></input> 
    <Button variant="contained" color="primary">Form submit</Button>
    {/* <h1>{ison}</h1>

    {/* <button onClick={getvalue}>get value</button> */}

    {/* keyboard events */}
{/* <div onMouseOver={()=>console.log("mouse entered")}>
    <input type="text" onKeyDown={(e)=>{if(e.key==="a") alert("enter pressed")}}></input>
    </div> */}
{/* 
      <button id="btn" onClick={()=>{if(!ison) console.log(ison); else console.log("true")}}>
        {ison?"on":"off"}</button> */}
    </>
    
    )
   
}

export default Name;