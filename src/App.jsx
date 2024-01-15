// rrd import
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
// layout
import RootLayout from "./layout/RootLayout"
// import hooks
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Card from "./pages/Card"
import Checkout from "./pages/Checkout"
import SingleProduct from './pages/SingleProduct'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// importcomponents
import ProtectedRoutes from "./components/ProtectedRoutes";
// import firebase
import { auth } from './firebase/firebaseConfig'
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const { user, dispatch, isAuthChange } = useGlobalContext();

const roots = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoutes user={user}>
    <RootLayout />
  </ProtectedRoutes>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/products',
        element: <Products/>
      },
      {
        path: '/card',
        element: <Card/>
      },
      {
        path: '/checkout',
        element: <Checkout/>
      },
      {
        path: '/singleproduct/:id',
        element: <SingleProduct/>
      }
    ]
  },
  {
    path: "login",
    element: <>{user ? <Navigate to="/" /> : <Login />}</>,
  },
  {
    path: "signup",
    element: <>{user ? <Navigate to="/" /> : <Signup />}</>,
  },
]);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    dispatch({ type: "LOGIN", payload: user });
    dispatch({ type: "IS_AUTH_CHANGE" });
  });
}, []);

  return <>
  {isAuthChange && <RouterProvider router={roots}/>}</>
}

export default App

