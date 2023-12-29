import React from 'react';
import Root from "../pages/Root";
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Features from '../pages/Features';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Contact from '../pages/Contact';

export const ROUTES = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'features',
        element: <Features />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
];
