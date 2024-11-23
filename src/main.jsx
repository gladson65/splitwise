import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// lazy loading
const Home = lazy(()=> import("./components/Home.jsx"));
const Login = lazy(()=> import("./components/Login.jsx"));
const Signup = lazy(()=> import("./components/Signup.jsx"));
const Welcome = lazy(()=> import("./components/Welcome.jsx"));
const Group = lazy(()=> import("./components/Group.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/splitwise",
    element: <App />,
    children: [
      {
        path: "/splitwise",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Home />
          </Suspense>
        ) 
      },

      {
        path: "/login",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login />
          </Suspense>
        ) 
      },

      {
        path: "/signup",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Signup />
          </Suspense>
        ) 
      },

      {
        path: "/dashboard",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Welcome />
          </Suspense>
        ) 
      },

      {
        path: "/groups/new",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Group />
          </Suspense>
        ) 
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
