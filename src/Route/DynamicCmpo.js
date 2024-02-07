import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DynamicCmpo() {
    const {id}= useParams()
    const [item,setItem]=useState([])

    useEffect(()=>{
        console.log('Fetching data for ID:', id);
        axios.get(`http://localhost:4000/store/${id}`)
        .then(response=>{
            setItem(response.data)
        })
    },[id])

    if(!item){
        return <p>Loading...</p>
    }

  return (
   <>
   
   <img src={item.img} alt='not found' width={"200px"} height={"250px"} />
   <h2>{item.tittle}</h2>
   <h3>{item.cont}</h3>
   </>
  )
}

export default DynamicCmpo