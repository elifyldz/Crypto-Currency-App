import React from 'react';
import { NavLink } from "react-router-dom";

function Leftbar(props) {
    return (
        <div className='w-[20vw] bg-gray-800 h-screen text-white px-8 py-12 flex flex-col'>
            <NavLink to={'/portfoy'} className={({isActive}) => {
        
                return `bg-gray-400 p-3 rounded-lg text-center font-bold hover:bg-gray-500 mb-4 + ${isActive ? 'text-gray-900' : ''}`
            }} >Portfoy</NavLink>
            <NavLink to={'/market'} className={({isActive}) => {

                return `bg-gray-400 p-3 rounded-lg text-center font-bold hover:bg-gray-500 + ${isActive ? 'text-gray-900' : ''}`
            }} >
                Market
            </NavLink>
        </div>
    );
}

export default Leftbar;