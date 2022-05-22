
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/Login';
import Blog from '../Pages/Blog/Blog';
import DasshBoard from '../Pages/DasshBoard/DasshBoard';
import NotFound from '../share/NotFound';

export const publicRoute = [
    { path: "/", Component: Home },
    { path: "/home", Component: Home },
    { path: "/blog",  Component: Blog },
    { path: "/login", Component: Login },
    { path: "/signup", Component: SignUp },
    { path: "/dashboard", Component: DasshBoard },
    { path: "*", Component: NotFound },
  ];
