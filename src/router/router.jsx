import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Dashboard from "../pages/UserDasboard/Dashboard/Dashboard";
import Addstock from "../pages/UserDasboard/Addstock/Addstock";
import Viewstock from "../pages/UserDasboard/Viewstock/Viewstock";
import Privaterouter from "./Privaterouter";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/",element: <Home/>},
            
        ]
    },
    {
        path: "/dashboard",
        element: <Privaterouter><Dashboard /></Privaterouter>,
        children: [
          { path: "add-stock", element: <Addstock /> },
          { path: "view-stock", element: <Viewstock /> },
        ],
      },
])
export default router;