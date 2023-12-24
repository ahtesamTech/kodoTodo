import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import AuthProvider from './Context/AuthProvider.jsx';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Login from './pages/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
      path: '/',
      element:<Home></Home>
    },
    {
      path: 'login',
      element: <Login></Login>
    }
  ],
  },
]);


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <RouterProvider router={router}/>
    </QueryClientProvider>
  
   </AuthProvider>
  </React.StrictMode>,
)
