import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home';


const MainRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<h1>Dashboard</h1>}/>
        </Routes>
    )
}

export default MainRoutes;