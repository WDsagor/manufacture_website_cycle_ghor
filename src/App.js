import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { publicRoute} from "./components/share/ALLRoutes";
import Header from "./components/share/Header";
import RequireAuth from './components/Pages/Login/RequireAuth'
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from "./components/Pages/DasshBoard/RequireAdmin";

import MyProfile from './components/Pages/Login/MyProfile';
import DasshBoard from './components/Pages/DasshBoard/DasshBoard';
import AddItem from './components/Pages/DasshBoard/AddItem';
import AllUser from './components/Pages/DasshBoard/AllUser';
import Myorder from './components/Pages/DasshBoard/Myorder';
import Purchase from "./components/Pages/DasshBoard/Purchase";
import ManageProducts from "./components/Pages/DasshBoard/ManageProducts";
import ManageOrder from "./components/Pages/DasshBoard/ManageOrder";
import Review from "./components/Pages/DasshBoard/Review";

function App() {
  return (
    <>
      <ToastContainer/>
      <Header></Header>
    <Routes>
        {/* Public Route */}
         {
           publicRoute.map(({path, Component}, index)=><Route key={index} path={path} element={<Component/>}></Route>)
         }
        {/* Private Route */}
        <Route path="/profile" element={<RequireAuth><MyProfile /></RequireAuth>}></Route >
          <Route path='/products/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>} />
        <Route path='/dashboard' element={<RequireAuth><DasshBoard /></RequireAuth>}>
          <Route path='my-review' element={<Review></Review>} />
          <Route index element={<Myorder/>} />
          {/* admin route */}
          <Route path='add-item' element={<RequireAdmin><AddItem /></RequireAdmin>} />
          <Route path='all-user' element={<RequireAdmin><AllUser /></RequireAdmin>} />
          <Route path='Manage-Products' element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
          <Route path='manage-order' element={<RequireAdmin><ManageOrder /></RequireAdmin>} />
        </Route >
      
         
      </Routes>
    </>
  );
}

export default App;
