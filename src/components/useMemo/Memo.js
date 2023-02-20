import React, {useState, useEffect, useMemo} from 'react'
import {GrView, GrHide} from "react-icons/gr"
import {FaCopy} from "react-icons/fa"
import {BiHide, BiShow} from "react-icons/bi"
const Memo = () => {
    const [show, setShow] = useState(false)
    const [keyValue, setKeyValue] = useState("")
    const [secreteKi, setSecreteKi] = useState("hello")
    const [copied, setCopied] = useState("")
    
    // useMemo hook does not cause component to re-render
    const id = useMemo(()=>{
        return Math.random()*15
    },[])



    const showHandler = ()=>{
        console.log("object")
        show ? setShow(false): setShow(true)
    }

    const keyHandler = (e)=>{
        const {value} = e.target
        setKeyValue(value)
        console.log(keyValue)

    }
    const generateHandler = ()=>{
      if(keyValue.length<=0){
        return
      }
      else{

        setSecreteKi(keyValue)
      console.log(secreteKi)
      setKeyValue("")
    }
      
    }

let str = secreteKi
let asterik = ""
for(let u of str){
  asterik = asterik+"*"
  
}
console.log(asterik)

const copyHandler = ()=>{
  let copyText = secreteKi
  //copy the text to clipboard
  navigator.clipboard.writeText(copyText)
}
  return (
    <>
    <div className="container mx-auto mt-16 w-1/2  p-4 text-lg">
    <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">UseMemon Hook </h1>
    <p>Unique Number - {id}</p>

<div>
<input onChange={keyHandler} value={keyValue} name="key" className=' bg-white border-2 border-black mr-2 h-10 p-1' type="text"/>
<button onClick={generateHandler} className='w-24 text-white bg-gray-700 rounded-md h-10 my-4 hover:bg-gray-600 '>Generate</button>
</div>
    
   <div>

     <button onClick={()=> showHandler()} className='w-16 bg-gray-700 rounded-md h-12 my-4 hover:bg-gray-600 text-center justify-center'> 

     {show? <BiShow className='font-medium px-2 text-5xl inline mx-auto  text-center justify-center text-white'/> : <BiHide className='font-medium px-2 text-5xl inline mx-auto  text-center justify-center text-white'/>}
     
     </button>
    <span className='px-4 font-bold' >{show ? "Show" : "Hide"}</span>
   </div>

     <div>
     <span>Secret Key: </span>
     <button className='px-2 h-10 bg-gray-500 text-white'>{show? secreteKi : asterik} </button> 

     <button onClick={copyHandler} className='mx-4 w-12 text-white rounded-md h-10 my-4 bg-gray-700' ><FaCopy className='mx-auto text-center justify-center ' /></button>


          </div>
     
      
    </div>

    </>
  )
}

export default Memo

