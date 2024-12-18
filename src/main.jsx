import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { 
    QueryClient, 
    QueryClientProvider } 
    from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
              <div className='mx-auto'>
                <RouterProvider router={router} />
              </div>
        </HelmetProvider>
        <ToastContainer></ToastContainer>
        </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
