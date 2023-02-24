import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Pages/Main/Main";

const { createBrowserRouter } = require("react-router-dom");

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
            path:"about",
            element:<About></About>
        }
      ]
    },
  ]);
  export default Route;