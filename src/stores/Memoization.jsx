import {memo} from "react"

const Memoization=memo(()=>{
    console.log("component created");
    return(
        <div>This is the content </div>
    )
})

export default Memoization;