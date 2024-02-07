import React, { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'


function Iphone() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://ecom-backend-xgmy.onrender.com/store")
            .then(response => {
                setData(response.data)
            })

    })
        return (
        <>
         <div className="web-page">
            {data.filter((item) => item.cat === "Iphone").map((item, index) => {
                return (

                    <div key={index} className="image">
                        <Link to={`/store/${item.id}`}>
                        <img src={item.img} alt="not found" width={"100px"} height={"140px"}/>
                        </Link>
                        <h4 className="tittle">{item.tittle.slice(0,50)}</h4>
                    </div>

                )
            })}
            </div>
        </>
    )
}
export default Iphone