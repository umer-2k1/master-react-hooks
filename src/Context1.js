import React,{createContext, useState, useEffect} from 'react'
export const myContext = createContext()

const Context1 = ({children}) => {
  const [fetchData, setFetchData] = useState([])
    const myDetails = {
        "Name": "Muhammad Umer",
        "Age": 22,
        "Designation": "Software Engineer",
    }
    // let fetchData = [1,2,3,4,5,6]
    const fetchingApi = async ()=>{
      let response = await fetch('https://dummyjson.com/posts')
      let myjson = await response.json()
      setFetchData(myjson.posts)
    }
    
  useEffect(() => {
    fetchingApi()
   },[]);
  return (
    <>
    <myContext.Provider  value={{myDetails, fetchData}} >
      {children}
    </myContext.Provider>
  </>
  )
}

export default Context1
