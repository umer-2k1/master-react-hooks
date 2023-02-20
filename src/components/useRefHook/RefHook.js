// why useRef
// 1. It can be used to store mutable varibale that does not cause re render when updated (useState causes the re-rendering)
// 2. It allow you to directly access HTML DOM


import { useBattery } from "react-use";
import React,{useRef, useState, useEffect} from 'react'
import { useContext } from "react";
import { myContext } from "../../Context1";
const RefHook = () => {
  const {myDetails, fetchData} = useContext(myContext)
  const [inputText, setInputText] = useState("")
  const [playing, setPlaying] = useState(false);

    const inputRef = useRef(null)
    const videoRef = useRef()
    const submitHandler = ()=>{
      setInputText(inputRef.current.value)
    }
    const playHandler = ()=>{
      // alert("Clicked")
      videoRef.current.play()
      setPlaying(true)
    }
    const pauseHandler = ()=>{
      // alert("Clicked")
      videoRef.current.pause()
      setPlaying(false)
    }
    useEffect(()=>{

    }, [playing])
    const state = useBattery();
  return (
    <>

<p>{myDetails.Name}</p>
<p>{myDetails.Age}</p>
<p>{myDetails.Designation}</p>
{/* <p>{fetchData}</p> */}

<pre>{JSON.stringify(state, null, 2)}</pre>;
    <h1  className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">UseCase 1 </h1>



      <p className='m-4' >This will update your text  <b>{inputText}</b> without Re-rendering</p>
    <div className='m-4' >
      <input ref={inputRef} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

      <button onClick={submitHandler} type="submit" className=" mt-2 w-24 font-medium mx-auto  py-2 text-white bg-blue-800 rounded-md" >Submit</button>
    </div>

    <h1  className="font-medium leading-tight text-4xl mt-6 mb-2 text-blue-600">UseCase 1 </h1>


      <div className='my-4  ml-12'>

      <div className='space-x-24 mb-4'>
      <button onClick={playHandler} type="submit" className=" mt-2 w-24 font-medium mx-auto  py-2 text-white bg-green-800 rounded-md" >Play</button>
      <button onClick={pauseHandler} type="submit" className=" mt-2 w-24 font-medium mx-auto  py-2 text-white bg-red-800 rounded-md" >Pause</button>
      </div>
      <video width="100%" height="50%" src="../../../public/Assests/video.mp4" ref={videoRef} type="video/mp4"></video>

   
      </div>
    
      
    </>
  )
}

export default RefHook
