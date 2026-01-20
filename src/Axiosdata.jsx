import axios from "axios";
import {useEffect,useState} from "react";
function Axiosdata(){
    const[products,setproducts]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/Products").then(res=>setproducts(res.data));
    },[])
    return(
        <ul>
            {products.map(el=>(
                <li key={el.id}>{el.description}</li>
            ))}
        </ul>
    )
}
export default Axiosdata