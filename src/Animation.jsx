import "./index.css";
// import {CSSTransition} from "react-transition-group";
import {useState} from "react"
function Animation(){
const[open,setOpen]=useState(false);
return(
  <>
<button onClick={()=>setOpen(!open)}>click</button>
<div className={'panel $(open?"open":open)'}>menu</div>

    
    </>
)


}


export default Animation;




{/* <>
      const active =true;
    const show=true;
     <div className={active?"box active":"box"}/>
     <div  style={{opacity:show?1:0,transition:"opacity 0.9s",backgroundColor:"pink", height: "300px",
 width: "300px"}}/>
     </> */}







// const[show,setshow]=useState(false);
// const ref=useRef(null);
// return(
// <div style={{padding:"20px"}}><button onClick={()=>setshow(!show)}>animation</button>
// <CSSTransition in={show}
// timeout={400}
// classNames="fade"
// unmountOnExit
// nodeRef={ref}>
//     <div ref={ref} className="box">Animated effect</div>
// </CSSTransition>
// </div>
// );


//       const [show,setshow]=useState(false);
//       const ref=useRef(null);
//     return(
// <div>

//         <button onClick={()=>setshow(!show)}>Click</button>
// <CSSTransition 
// in={show}
// timeout={400}
// classNames="fade"
// unmountOnExit
// nodeRef={ref}
// ><div ref={ref} className="box" >Animated effect</div></CSSTransition>
// </div>
//     );

    // <button onClick={()=>setshow(!show)}>Click me</button>
    // <div className={show?"box show":"box"}></div>




    // const [open,setopen]=useState(true);

// return(

//     <>
//     <button onClick={()=>setopen(!open)}>Toggle</button>
//       <div className={`panel ${open? "open":""}`}>Menu</div>
//     </>
// )
