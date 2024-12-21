import React, { useState } from 'react'

const App = () => {
const [inputval,setinputval]=useState("")


const changeinputval=(e,each)=>{
  
let keyEle=document.getElementById(each).textContent
try{if(keyEle==="="){

let val=eval(inputval)
setinputval(val)
}
else if(keyEle==="AC"){
  setinputval("")
}
else if(keyEle==="DEL"){
let AfterDElVAl=inputval.toString().substring(0,inputval.length-1)
setinputval(AfterDElVAl)
}
else{
  setinputval(prev=>prev+keyEle)
}}
catch(error){
setinputval("undefined")

}


}
const onchangeInputBox=(e)=>{

  let keyEle=e.key
  
  console.log(e.key)
  try{if(keyEle==="="||keyEle==="Enter"){
  
  let val=eval(inputval)
  setinputval(val)
  }
  else if(keyEle==="delete"){
    setinputval("")
  }
  else if(keyEle==="Backspace"){
  let AfterDElVAl=inputval.toString().substring(0,inputval.length-1)
  setinputval(AfterDElVAl)
  }
  else{
    setinputval(prev=>prev+keyEle)
  }}
  catch(error){
  setinputval("undefined")
  
  }


}

const btnclass=(val)=>{
    console.log(val)
    switch(val){

 case "AC":
    return "btn-warning"
case "DEL":
    return "btn-danger"
case "=":
    return "btn-success"
default:
    return "btn-info"


    }
}





  const arry=["AC","DEL","+/-","/",7,8,9,"*",4,5,6,"-",1,2,3,"+","%",0,".","="]
  return (
    <div className='contianer d-flex justify-content-center align-items-center mt-5 cal-main'>
       

<div className='d-flex row col-10 col-lg-5 justify-content-center bg-info cal-b'> 
  <input value={inputval} className='form-control ' onKeyDown={(e)=>onchangeInputBox(e)} />
{arry.map(each=>(<button className={`col-3 border cal-box btn ${btnclass(each)}`} key={each} id={each} onClick={(e)=>{changeinputval(e,each)}}>{each}</button>))}


</div>


    </div>
 
  )
}

export default App