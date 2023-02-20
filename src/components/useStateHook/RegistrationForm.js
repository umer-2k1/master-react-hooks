import React, {useContext} from 'react'
import './RegistrationForm.css'
// import Context1 from '../../Context1'
import { myContext } from '../../Context1'
const RegistrationForm = () => {
const {myDetails, fetchData} = useContext(myContext)
console.log(fetchData)
  return (
    <>
    <div className='ali'>
    {/* <p>{myDetails.Name}</p>
<p>{myDetails.Age}</p>
<p>{myDetails.Designation}</p> */}
<h1 className='font-bold text-center py-4 text-xl'>There are some Dummy Post</h1>

<div className="container flex flex-wrap justify-center">
{fetchData.map((val)=>
(
  // <div className='cards border-2 border-slate-200 w-full h-auto m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
  <div className='cards border-2 border-rose-600 w-full h-auto m-4 md:w-2/5 sm:w-1/2 lg:w-1/4 p-2'>

    <h5 className='font-medium mb-4'>{val.title}</h5>
    <h6 className='font-medium'>message:</h6>
    {/* <p>{val.body.slice(0,200)}</p> */}
    <p>{val.body.length>180 ? val.body.slice(0,180)+"..." : ""}</p>
  </div>

    )
    )}
    </div>
        
    </div>
    </>
  )
}

export default RegistrationForm
