import DashBoardLayout from "../../../DashBoardLayout/DashBoardLayout";
import AllMessages from "../../AllMessages/AllMessages";
import About from "../../Pages/About/About";
import AdminRoute from "../../Pages/AdminRoute/AdminRoute";
import Cdpaps from "../../Pages/CDPAP/Cdpaps";
import Contacts from "../../Pages/Contacts/Contacts/Contacts";
import Covid from "../../Pages/Covid/Covid";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LogIn/Login";
import Main from "../../Pages/Main/Main";
import Pca from "../../Pages/PCA/Pca";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Services/Services/Services";


const { createBrowserRouter } = require("react-router-dom");

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/home",
            element:<Home></Home>
        },
        {
            path:"/services",
            element:<Services></Services>
        },
        {
            path:"/contacts",
            element:<PrivateRoute><Contacts></Contacts></PrivateRoute>
        },
        {
            path:"/covid",
            element:<Covid></Covid>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
       
      ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute> <DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashboard',
                element:<AdminRoute><AllMessages></AllMessages> </AdminRoute>
            },
            {
                path:'/dashboard/cdpap',
                element:<AdminRoute><Cdpaps></Cdpaps> </AdminRoute>
            },
            {
                path:'/dashboard/pca',
                element:<AdminRoute><Pca></Pca> </AdminRoute>
            },
            {
                path:'/dashboard/users',
                element:<AdminRoute><AllUsers> </AllUsers> </AdminRoute>
            },
        ]
    }
  ]);
  export default Route;