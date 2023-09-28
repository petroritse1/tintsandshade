import { useState } from 'react'
import Hero from './Header'
import  Values from "Values.js";
import { ToastContainer, toast } from 'react-toastify';
import { Form } from './Form';
import { Cpu } from 'react-feather';
import ColorsList from './ColorsList';

// toast.success('awesome');
// toast.error('error message');

 

function App() {
  const [input,setInput] = useState("")
  const [ color,setColor] = useState(new Values('#c879ff').all(10))
  function getVal(val){
  
    
    try{
       setColor(new Values(val).all(10)) 
       
    }
    catch(err){
      toast.error(err)
    }
    
    // return addColor
  }
   
 
 

  return (
    <>
     <Hero>
      <Form getVal={getVal} input={input} setInput={setInput} />
     </Hero>
     <ColorsList color={color} input={input}/>
 
    <ToastContainer position='top-center' />
    </>
  )
}

export default App
