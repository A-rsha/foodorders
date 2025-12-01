import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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
import ProfilePage from './Pages/ProfilePage.jsx';
import RegisterModal from './components/RegisterModal.jsx';
import LoginModal from './components/LoginModal.jsx';
import OrderHistory from './Pages/OrderHistory.jsx';

import AdminDashboard from './admin/AdminDashboard.jsx';
import ManageProducts from './admin/ManageProducts.jsx';
import ManageOrders from './admin/ManageOrders.jsx';
import ManageUsers from './admin/ManageUsers.jsx';
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
      { path: "/register", element: <RegisterModal /> },
      { path: "/login", element: <LoginModal /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/orderhistory", element: <OrderHistory /> },


      {
        path: "/admin",
        element: <AdminDashboard/>,
        children: [
          { index:true,element: <ManageProducts/>},
          { path:"products", element: <ManageProducts/>},
            { path: "orders", element: <ManageOrders/>},
              { path: "users", element: <ManageUsers/>}
        ]
      },

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
