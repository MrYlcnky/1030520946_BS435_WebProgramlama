import React, {StrictMode} from "react";
import {createHashRouter, RouterProvider} from "react-router-dom";
import {Ekran1, Ekran2, Ekran3} from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';

//createHashRouter
//createBrowserRouter
const router = createHashRouter([
   {
        path: "/",
        element: <Ekran1/>,
    },
    {
        path:"/ModSecim",
        element:<Ekran2/>
    },
    {
        path:"/oyunEkran",
        element:<Ekran3/>
    }
]);
const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <App />
);

//ReactDOM.render(<App/>, document.getElementById("root"));

