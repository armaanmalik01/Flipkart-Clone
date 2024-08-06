import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import NotFound from './pages/NotFound';

import ProductLoader from './loaders/productLoader';

import TimerContext from "./context/TimerContext";
import { useEffect, useState } from 'react';
import homeLoader from './loaders/homeLoader';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader
      },
      {
        path: "product/:name",
        element: <Product />,
        loader: ProductLoader,
      },
      {
        path: "checkout/:name",
        element: <Checkout />,
        loader: ProductLoader
      }
    ]
  }
])


function App() {
  return <TimerContext.Provider value={{name:"Timer"}}>
    <RouterProvider router={routes} />
  </TimerContext.Provider>
}

export default App;
