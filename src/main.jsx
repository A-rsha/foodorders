import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import store from './app/store'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Homepage from './Pages/Homepage.jsx';
import MenuPage from './Pages/MenuPage.jsx';
import CartPage from './Pages/CartPage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import OrderSummary from './Pages/OrderSummary.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <  App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/Home", element: <Homepage /> },
      { path: "/Menu", element: <MenuPage /> },
      { path: "/Cart", element: <CartPage /> },
      { path: "/About", element: <AboutPage /> },
      { path: "/Contact", element: <ContactPage /> },
      { path: "/order-summary", element: <OrderSummary /> },

    ]

  }

]);

createRoot(document.getElementById('root')).render(
  < StrictMode>
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>
  </ StrictMode>
)
