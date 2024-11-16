import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        
        <HelmetProvider>
              <div className='max-w-screen-xl mx-auto'>
                <RouterProvider router={router} />
              </div>
        </HelmetProvider>
        <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>,
)
