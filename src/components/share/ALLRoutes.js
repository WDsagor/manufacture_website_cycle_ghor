
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/SignUp';
import Blog from '../Pages/Blog/Blog';
import DasshBoard from '../Pages/DasshBoard/DasshBoard';
import NotFound from '../share/NotFound';
import ResetPassword from '../Pages/Login/ResetPassword';

const publicRoute = [
    { path: "/", Component: Home },
    { path: "/home", Component: Home },
    { path: "/blog",  Component: Blog },
    { path: "/login", Component: Login },
    { path: "/signup", Component: SignUp },
    { path: "/passwordreset", Component: ResetPassword},
    // { path: "/dashboard", Component: DasshBoard },
    { path: "*", Component: NotFound },
  ];
const privateRoute = [
    { path: "/dashboard", Component: DasshBoard },
  ];
export {publicRoute, privateRoute};