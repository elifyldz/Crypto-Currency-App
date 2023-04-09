import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Leftbar from "./components/Leftbar.jsx";

function App() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/portfoy')
    }, [])



    return (
        <div className='flex overflow-hidden'>
            <Leftbar/>
            <div className='bg-gray-700 w-full h-screen'>
                <Outlet/>
            </div>
        </div>
    )
}

export default App
