import { motion} from "framer-motion";
import { useState,useEffect } from "react";
// import { forwardRef } from "react";

const colors=["red","green","yellow","orange"];

export default function Framer(){
// const [currentcolor,setcurrentcolor]=useState(colors[0]);
const[index,setindex]=useState(0);

useEffect(()=>{

    

  const timer=setTimeout(()=>{
  setindex((previndex)=>(previndex+1)%colors.length);
  },2000);

  return()=>clearTimeout(timer);


},[index]);


    return(

  <motion.h1   whileHover={ {scale:2,backgroundColor:colors[index]}}   style={{height:"fit-content",
  width:"fit-content",margin:500,textAlign:"center"}} >this is the div
  paragraph</motion.h1>
    );
    
}


// animate={{backgroundColor:currentcolor,x:20,rotate:30,skewX:20}} transition={{duration:1}}{currentcolor}
// height:200,width:200,