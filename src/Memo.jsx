import {useMemo,memo} from "react"



    const Memo=memo(()=>{
          const result= useMemo(()=>{
        let sum=0;
        for(let i=0;i<=1000000000;i++){
            sum+=i;
        }
       console.log(sum);
       return <h1>{sum}</h1>
     },[])
       return(
        <>
      
       <div>this is the {result} </div>
       </>
    
    )
},[])
  



export default Memo;