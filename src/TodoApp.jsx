import {useState,useEffect} from "react";
function TodoApp(){
    // const [item,setitem]=useState([]);
    // const[text,settext]=useState("");
    // function handleclick(){
    //   setitem([...item,text]);
    //     settext("");
      
    // }

    // function showall(){
    //    let texts= document.getElementsByClassName("l");
    //  for(let text of texts){
    //     console.log(text.innerHTML);
    //  }
      
    // }

    const [name,setuser]=useState("pooja");

    

    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/users").then(res=>(res.json())).then(data=>(setuser(data)));
       console.log(name).then(na=>setuser(na))

       .then(console.log(setuser.na));
  


    });
    return(
        <>
    {/* <input type="text" onChange={(e)=>settext(e.target.value)}></input>
    <button onClick={handleclick}>ADD</button>
     <button onClick={showall}>show all</button>
     <div id="place"></div>

    <ul id="list">
        {item.map((item)=>(
            <li className="l" >{item}</li>
        ))}
    </ul> */}
      
{/* 
      <ul>
        {user.map((user)=>(
          <li>{user.name}</li>
        ))}
      </ul> */}

      <h1>hello</h1>
       <button id="submit" >Submit</button>

    </>
    );
}
export default TodoApp;