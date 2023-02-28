import React from "react";
import ReactDOM from "react-dom/client";
import{
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom";


import { Main, About, MyWorks } from "./components";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/MyWorks" element={<MyWorks />} />
        </>
    )
)

root.render(<RouterProvider router={router} />);
