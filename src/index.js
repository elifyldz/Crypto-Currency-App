import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Market from "./components/Market.jsx";
import Portfoy from './views/Portfoy.jsx';
import { Provider } from 'react-redux'
import {store} from './store/index'

const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children:[
            {
                path:'/market',
                element:<Market/>
            },
            {
                path:'/portfoy',
                element:<Portfoy/>
            }

        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
        </React.StrictMode>
)

