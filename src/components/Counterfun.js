import React from 'react'
import {useState} from 'react'

function Counterfun() {

    const [counter,setcounter]=useState(0)

    function incrementcounter(){
      {
        setcounter(counter+1)
      }
    }
  
    function decrementcounter(){
      if(counter!=0)
      {
        setcounter(counter-1)
      }
    }
  
    function reset(){
      {
        setcounter(0)
      }
    }
  
  return (
    <div style={{
      // display:'flex',
   flexDirection:'column',
    alignItems:'center',
    border:'2px solid gray',
    backgroundColor:'#ffb1b1',
    padding:'230px'
    

 }}
>
        
    <h2 className='h1' style={{flexDirection:'column',display:'flex',textAlign:'center'}}>Your Turn....!</h2>
    <h1 className='text-center'> {counter}</h1>
      <button className='btn btn-warning mt-3 me-3 ' style={{marginLeft:'399px',width:'134px',fontWeight:'bold',fontSize:'20px'}} onClick={incrementcounter} >Add</button>
      <button className='btn btn-danger mt-3 me-3 '  style={{width:'134px',fontWeight:'bold',fontSize:'20px',color:'black'}} onClick={decrementcounter} >Reduce</button>
      <button  className='btn btn-success mt-3 me-3 ' style={{width:'134px',fontWeight:'bold',fontSize:'20px',color:'black'}}  onClick={reset}>Reset</button>


    </div>
  )
}

export default Counterfun