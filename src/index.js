  function clicked(msg){
       document.getElementById("btn").style.backgroundColor="red";
       let para=document.createElement("p");
       para.innerText="goodbye all";

       alert(msg+" "+para.innerText);
  }

         
    function stop(e){
     
      e.stopPropagation();
      alert("button clicked");
     document.body
       
    }

     function clickme(){
       let data=document.getElementById("text").value
       console.log(data);
   
       
    }
  export  {clicked,stop,clickme};
 
