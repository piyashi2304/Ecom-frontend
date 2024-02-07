import React from 'react'
import Home from './Home'
import Ipad from './Ipad'
import Iphone from './Iphone'
import Macbook from './Macbook'
// import Store from './StoreCompojs'
import Accesories from './Accesories'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import DynamicCmpo from './DynamicCmpo'


function RouteCompo(){
    return(
        <>
        <div className='route-part'>
        <BrowserRouter>
        <div className='link'>
        <Link to='/'>Home</Link>
        {/* <Link to='/store'>Store</Link> */}
        <Link to='/iphone'>Iphone</Link>
        <Link to='/ipad'>Ipad</Link>
        <Link to='/macbook'>Macbook</Link>
        <Link to='/accesories'>Accesories</Link>
        </div>
        <Routes>
            <Route path='/'  element={<Home />}/>
            {/* <Route path='/store'  element={<Store />}/> */}
            <Route path='/iphone'  element={<Iphone />}/>
            <Route path='/ipad'  element={<Ipad />}/>
            <Route path='/macbook'  element={<Macbook />}/>
            <Route path='/accesories'  element={<Accesories />}/>
            <Route path='/store/:id' element={<DynamicCmpo />}/>
        </Routes>
        </BrowserRouter>
        </div>
        </>
    )
}
export default RouteCompo