import Button from "./Button";
import {useState,useRef} from "react";
import { Search } from "react-feather"  
import {toast} from 'react-toastify';

export function Form({getVal,input,setInput}) {
    // const check = useRef(null)
   const  ref  = useRef(null);
   function windowListen(e){
    //  e.code ===
}
    // window.addEventListener("keydown",)
   
 
  

    function getCoolor(e){
        setInput(e.target.value)
        
         
    }
    function onHandleSubmit(e){
        // getVal()
        e.preventDefault();
        getVal(input)
        
    }
    return (<form className="hero__form" onSubmit={onHandleSubmit} >

        <input type="color" value={input} onChange={getCoolor} className="hero__color"/>
        <input type="text" placeholder="#c879ff" className="hero__input" value={input} onChange={getCoolor} />
        <Button  color={input} class="btn"  type="submit">🔍</Button>
        {/* <Colors  /> */}

    </form>);
}
