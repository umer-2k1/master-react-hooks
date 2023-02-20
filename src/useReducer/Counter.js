import React,{useState, useReducer} from 'react'
import './Counter.css'
import myreducer from './myreducer'

import { FcPlus } from 'react-icons/fc';
import { AiOutlineMinus } from 'react-icons/ai';

const initialValue= 0


const Counter = () => {
    // const [count, setCount] = useState(0)
    const [count, dispatch] = useReducer(myreducer, initialValue)
  return (
    <>
          <div className="counter-box text-center d-flex flex-column justify-content-center">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="d-flex flex-column justify-content-center p-5">
                      <h1 className="counter-heading">Counter</h1>
                      <h1 className="counter-box-number mt-4 " id="valueBox">{count}</h1>
                      <div className="d-flex flex-row justify-content-center mt-5">
                          <button onClick={()=> dispatch({type: "DECREMENT"})} className="shadow decrease-button p-2" id="decrementbtn">Decrement</button>
                          <button onClick={()=> dispatch({type: "RESET"})} className="shadow reset-button ml-4 p-2" id="resetbtn">Reset</button>
                          <button onClick={()=> dispatch({type: "INCREMENT"})} className="shadow increase-button ml-4 p-2" id="incrementbtn">Increment</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </>
  )
}

export default Counter
