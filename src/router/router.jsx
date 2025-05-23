import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Dashboard from "../pages/UserDasboard/Dashboard/Dashboard";
import Addstock from "../pages/UserDasboard/Addstock/Addstock";
import Viewstock from "../pages/UserDasboard/Viewstock/Viewstock";
import Privaterouter from "./Privaterouter";
import Mydashboard from "../pages/UserDasboard/myDahboard/Mydashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/",element: <Home/>},
            {path: "/login",element:<Login/>}
            
        ]
    },
    {
        path: "/dashboard",
        element: <Privaterouter><Dashboard /></Privaterouter>,
        children: [
          { path: "", element: <Mydashboard /> },
          { path: "add-stock", element: <Addstock /> },
          { path: "view-stock", element: <Viewstock /> },
        ],
      },
])
export default router;