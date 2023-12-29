import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ROUTES } from './routes';

const router = createBrowserRouter(ROUTES);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);