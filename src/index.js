import React, {} from "react";
import {createHashRouter, RouterProvider} from "react-router-dom";
import {GirisEkran} from "./Components/girisEkran";
import {OyunModSecim} from "./Components/oyunModSecimEkran";
import 'bootstrap/dist/css/bootstrap.min.css';
import {OyunEkran} from "./Components/oyunEkranı";
import { createRoot } from 'react-dom/client';
//createHashRouter
//createBrowserRouter

const router = createHashRouter([
   {
        path: "/",
        element: <GirisEkran/>,
    },
    {
        path:"/ModSecim",
        element:<OyunModSecim/>
    },
    {
        path:"/oyunEkran",
        element:<OyunEkran/>
    }

]);
const App = () => {

    return (
        <RouterProvider router={router}/>
    )
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App  />);

//ReactDOM.render(<App/>, document.getElementById("root"));


