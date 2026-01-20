import {lazy,Suspense} from "react"
import react from "./assets/react.svg"
// import Card from "./MyCard.jsx"
function Lazy(){
const Card=lazy(()=>import("./MyCard.jsx"));
return(
<Suspense fallback={<><img src={react} alt="loading please wait"/><p>Loading Please wait....</p></>}>
<Card/>
</Suspense>
)
}

export default Lazy;