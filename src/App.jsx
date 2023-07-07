import React from "react";

const SlotM=()=>{
let icons=["😻", "🤦", "😠"];
let points=0;

let first = icons[Math.floor(Math.random()*icons.length)];
let second = icons[Math.floor(Math.random()*icons.length)];
let third = icons[Math.floor(Math.random()*icons.length)];
//const check = (first===second && second===third);

if((first===second && second===third)){
    return(
      
    <>
         <div  className="slot_inner">
         <h1> {first} {second} {third}</h1>
         <h1 >this is match</h1>
         <hr/>
         </div>  
        
    </>
    );

}
 else{
  return(
      
    <>
         <div  className="slot_inner">
         <h1> {first} {second} {third}</h1>
          <h1>this is not match</h1>
         </div>  
        
    </>
    );
 }
};


const App=()=>{
    return(
       
  <>

    <h1 className="heading_style">welcome to <span style={{fontWeight:"bold"}}>Slot Machine game</span></h1>
    <div className="slot_machine">
    <SlotM></SlotM>
    <hr/>
      <SlotM></SlotM>
      <hr/>
      <SlotM></SlotM>
      <hr/>
      <SlotM></SlotM>
      <hr/>
      <SlotM></SlotM>
      <hr/>
      <SlotM></SlotM>
      <hr/>
      <SlotM></SlotM>
      <hr/>
      <SlotM></SlotM>
    </div>
     
  </>
    )
}
export default App;