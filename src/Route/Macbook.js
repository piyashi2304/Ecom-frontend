import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Macbook(){
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
            {data.filter((item) => item.cat === "Macbook").map((item, index) => {
                return (

                    <div key={index} className="image">
                         <Link to={`/store/${item.id}`}>
                        <img src={item.img} alt="not found" width={"220px"} height={"160px"}/>
                        </Link>
                        <h4 className="tittle">{item.tittle.slice(0,50)}</h4>
                    </div>

                )
            })}
            </div>
        </>
    )
}
export default Macbook