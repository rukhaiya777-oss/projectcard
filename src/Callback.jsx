import { useCallback } from "react";
function Callback(){
const handleClick=useCallback(()=>{
     console.log("button clicked ")
},[])
    return(
<button onClick={handleClick}>Click me !!</button>
    )
}

export default Callback;