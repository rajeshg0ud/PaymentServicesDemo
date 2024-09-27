
import Home from './Home'
import {createBrowserRouter, Outlet} from 'react-router-dom'
 
const AppLayout=()=>{
    return( 
    <div> 
        <Outlet />
    </div> 
    )
}

const AppRouter= createBrowserRouter([{
    path:'/',
    element:<AppLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        }  

    ]

}])

export default AppRouter;