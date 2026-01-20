import React from 'react'
import "./App.css";

function Navbar(){

  
  // constructor(){
  //   super();
    
  //   this.handleclick=this.handleclick.bind(this);
  // }

  // handleclick=()=>{
  //   // let result=document.getElementById("text").innerText
  //   console.log(this);
  //   document.getElementById("text").classList.remove("show");
  // }
  function handlesubmit(e){
    e.preventDefault();
    alert("form submitted");
  }
 
 
    return(
      <>
      <div className="div" >
        <form >
          <input type='submit'></input>
        </form>
    <button onClick={handlesubmit} className='btn bg-danger'>click</button>
    <p id="text" className="show"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto iure aut expedita sapiente commodi nobis ipsum soluta impedit suscipit, beatae esse magnam repellat placeat itaque libero incidunt, eius quae voluptatibus possimus accusamus, dolores amet. Rem unde exercitationem provident illo quas harum, vitae repudiandae non aliquid perspiciatis ipsam tempore officiis excepturi asperiores veritatis quod error adipisci? Vitae ipsum expedita alias sequi vero porro nihil asperiores numquam corrupti eaque nesciunt assumenda quia rem sint, dolores aut neque exercitationem ducimus odit, ad magnam consequatur repudiandae hic ut. A, eum. Rerum magnam dolor deserunt! Blanditiis accusamus omnis sed doloribus, alias cum reprehenderit in.</p>
   <ul className="nav nav-pills
    bg-dark">
 
      <li  className="nav-item "><a href='#' className='nav-link active' >Home</a></li>
    <li className="nav-item" ><a href='#'  className='nav-link' >about</a></li>
    <li className="nav-item"><a href='#'  className='nav-link'>contact</a></li>
   </ul>
  
    </div>
        

    </>
    );
  
}

export default Navbar;