import { useState } from "react";

function BtnInc(props){
    return(
        <button onClick = {props.onClickFunc}>+</button>
    )
}
function BtnDec(props){
    return(
        <button onClick = {props.onClickFunc}>-</button>
    )
}
function Display(props){
    return(<label>{props.msg}</label>)
}

export default function StateHook(){
    var [counter, setCounter]= useState(1)
    var inc = ()=>setCounter(counter+1)
    var dec = ()=>setCounter(counter-1)
    if(counter<=1){
        dec = ()=>setCounter(1)
    }
    return(
        <div>
        <BtnDec onClickFunc={dec}/>
        <Display msg={counter}/>
        <BtnInc onClickFunc={inc}/>
        </div>
    )
}