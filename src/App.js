import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { publicRoute, privateRoute } from "./components/share/ALLRoutes";
import Header from "./components/share/Header";
import RequireAuth from './components/Pages/Login/RequireAuth'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Header>
      <ToastContainer/>
    <Routes>
        {/* Public Route */}
         {
           publicRoute.map(({path, Component}, index)=><Route key={index} path={path} element={<Component/>}></Route>)
         }
        {/* Private Route */}
         {
           privateRoute.map(({path, Component}, index)=><Route key={index} path={path} element={<RequireAuth><Component/></RequireAuth>}></Route>)
         }

         
      </Routes>
    </Header>
  );
}

export default App;
