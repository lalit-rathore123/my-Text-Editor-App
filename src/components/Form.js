import React, { useState } from 'react'

 const Form=(props)=> {

  const [text,setText]=useState('')

  const up=()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert('success', 'Convert To UpperCase')
  }
  const lower=()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert('success', 'Convert To LowerCase')
  }

  const clear=()=>{
   setText('')
   props.showAlert('success', 'Clear Text')
  }

  const copy=()=>{
    let copytext = document.getElementById('my-box')
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    props.showAlert('success', 'Copy to CilpBord')
  }

  const changetext=(event)=>{
    setText(event.target.value)
  }

  return (
   <>
   <div className='my-4' style={{color :props.mode==='dark'?'white':'black' }}>
    <h2 >{props.hedding}</h2>

  <textarea  className="form-control mb-3" id="my-box" value={text} rows="8" style={{backgroundColor : props.mode==='dark' ?'rgb(70 70 77)' :'white',color:props.mode==='dark'?'white':'black'}} onChange={changetext}></textarea>

  <button  className="btn btn-primary mx-2 " onClick={up}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2 my-4 " onClick={lower}>Convert to LowerCase</button>
  <button className='btn btn-primary mx-3  my-2 text-center ' onClick={clear}>clear Box</button>
  <button className='btn btn-primary mx-2 my-2 text-center  ' onClick={copy}>Copy</button>

  <h2 className='my-3'>Your Text Summary</h2>
  <p>{text.length} Character and {text.split(' ').length-1} Words</p>
  <p>{text.length * 0.008} Minutes Read</p>
  <h3>Perview </h3>
  <p >{text.length>0 ?text:'Enter Somthing in the Textbox Above to perview it here !'}</p>
</div>
   </>
  )
}
export default Form