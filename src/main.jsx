import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './Router/router';
import { HelmetProvider } from 'react-helmet-async';
import Auth from './Auth/Auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <React.StrictMode>
      <HelmetProvider>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </HelmetProvider>
    </React.StrictMode>
  </div>
)
