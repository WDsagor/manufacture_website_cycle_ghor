
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/Login';
import Blog from '../Pages/Blog/Blog';

export const publicRoute = [
    { path: "/", Component: Home },
    { path: "/home", Component: Home },
    { path: "/blog",  Component: Blog },
    { path: "/login", Component: Login },
    { path: "/signup", Component: SignUp },
  ];
