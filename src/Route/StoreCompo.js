import React, { createContext,useState } from 'react'


export const Store=createContext()

function StoreCompo(props) {
    const [data,setData]=useState([
       
    ])
  return (
  <>
  <Store.Provider value={[data,setData]}>
     {props.children}
   </Store.Provider>
  
  </>
  )
}

export default StoreCompo