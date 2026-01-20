




import Callback from "./Callback.jsx";
import "./index.css";


import Memo from "./Memo.jsx";
import MyCard from "./MyCard.jsx";
import Name from "./Name.jsx";
import Navbar from "./Navbar.jsx";
import Sample from "./Sample.jsx";
import Memoization from "./stores/Memoization.jsx";
import TodoApp from "./TodoApp.jsx";
import Lazy from "./Lazy.jsx";
import { Button } from "@mui/material";

 

function App() {

 
    return(
      <>
   
   <Lazy/>
   <Button/>
      </>

    )

    }
    


export default App;

  {/* <button id="btn"  onClick={()=>clicked("hello")}>Click me</button>
  <input type="text" id="text"  onChange={getvalue}></input>
  <button onClick={clickme}>get data</button>*/}










//  const [count,setcount]=useState(Store.getcount());

//  useEffect(()=>{
//   const onchange=()=>setcount(Store.getcount());
//   Store.AddChangeListener(onchange);
//  },[]);

//  return (
// <>
// <h3>Counter</h3>
// <p>count is {count}</p>
// <button onClick={increment}>+</button>
// <button onClick={decrement}>-</button>
// </>
//  )

//    const count=useSelector((state)=>state.count);
//    const dispatch=useDispatch();


//    return(
//     <>
//     <h1>count is {count}</h1>
//     <button onClick={()=>
//         dispatch(increment())
//     }>+</button>
//     <button onClick={()=>
//         dispatch(decrement())
//     }>-</button></>
//    );


// const interval=setInterval(()=>{
//   setindex((previndex)=>(previndex+1)%colors.length)
// },2000)

// return()=>clearInterval(interval)
// },[]);



  //  <nav className="navtab">
  //       <Link to="/" className="text">Home</Link>
  //        <Link to="/TodoApp.jsx" className="text">About</Link>

  //             <Link to="/MyCard.jsx" className="MyCard">Open Card</Link>
     
        
  //     </nav>
      
  //     <Routes>
  //          <Route path="/" element={<Navbar/>}/>
  //         <Route path="/TodoApp.jsx" element={<TodoApp/>}/>
  //             <Route path="/MyCard.jsx"  element={< MyCard/>}/>
    
  //     </Routes>