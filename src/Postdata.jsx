import { useEffect, useState } from "react";
function Postdata(){
    const [name,setname]=useState([]);
   

    useEffect(()=>{
 let ignore=false;
         fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },

        body:JSON.stringify({
            title:"React",
            body:"Server Integration",
            userid:2
        })
    }).then(res=>res.json()).
    then(data=>{if(!ignore){setname(pre=> [...pre,data]);}});

    return ()=>{ignore=true;};
    },[])
   
   

    return(
    <ul>
        { name.map(names=>(
        <li key={names.id}  >{names.userid}</li>
))}
    </ul>
)
}



export default Postdata;