import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./components/share/ALLRoutes";
import Header from "./components/share/Header";

function App() {
  return (
    <Header>
    <Routes>
        {/* Public Route */}
         {
           publicRoute.map(({path, Component}, index)=><Route key={index} path={path} element={<Component/>}></Route>)
         }


      </Routes>
    </Header>
  );
}

export default App;
