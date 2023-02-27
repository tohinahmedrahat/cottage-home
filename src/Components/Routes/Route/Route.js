import About from "../../Pages/About/About";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Pages/Main/Main";
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
            path:"about",
            element:<About></About>
        }
      ]
    },
  ]);
  export default Route;