import React from "react";
import {createHashRouter, RouterProvider} from "react-router-dom";
import {Ekran1, Ekran2} from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';

//createHashRouter
//createBrowserRouter
const router = createHashRouter([
   {
        path: "/",
        element: <Ekran1/>,
    },

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

