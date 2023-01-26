import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
 
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom";
import IndexPage from './pages/IndexPage';
 
const router = createBrowserRouter([
 {
  path: "/",
  element: <IndexPage />,
 },
 
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
);