import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <></>
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <></>
  }
])

export default function App() {
  return (
    <RouterProvider router={routes}/>
  )
}