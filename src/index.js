import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'swiper/css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import HomePage from './Pages/Home/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import BlogPage from './Pages/Blog/BlogPage';
import SingleProduct from './Components/Shop/SingleProduct';
import CartPage from './Pages/Cart/CartPage';
import SingleBlogPage from './Pages/Blog/SingleBlogPage';
import AboutPage from './Pages/About/AboutPage';
import ContactPage from './Pages/Contact/ContactPage';
import AuthProvider from './Auth/Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import LogInPage from './Pages/Auth/LogInPage';
import SignUp from './Pages/Auth/SignUp'


const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    children : [
      { path : "/" , element : <HomePage />},
      { path : "/shop" , element : <ShopPage />},
      { path : "/shop/:id" , element : <SingleProduct />},
      { path : "/blog" , element : <BlogPage />},
      { path : "/blog/:id" , element : <SingleBlogPage />},
      { path : "/cart-page" , element : <PrivateRoute ><CartPage /></PrivateRoute>},
      { path : "/about" , element : <AboutPage />},
      { path : "/contact" , element : <ContactPage />},
    ],
   
  },
  {
    path:"/login",
    element:<LogInPage />
  },
  {
    path:"/sign-up",
    element:<SignUp />
  }
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

