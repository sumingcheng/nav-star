import { createHashRouter } from 'react-router-dom'
import ErrorPage from '@/page/error'
import HomePage from '@/page/home'

export const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <ErrorPage />
  },
])
