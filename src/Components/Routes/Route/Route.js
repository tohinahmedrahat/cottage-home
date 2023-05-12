import DashBoardLayout from "../../../DashBoardLayout/DashBoardLayout";
import AllMessages from "../../AllMessages/AllMessages";
import Blog from "../../Blog/Blog";
import EditBlogForm from "../../Blog/EditBlogForm";
import SingleBlog from "../../Blog/SingleBlog";
import MissionVision from "../../FooterComponents/MissionVision";
import TeamMembers from "../../FooterComponents/TeamMembers";
// import About from "../../Pages/About/About";
import AdminRoute from "../../Pages/AdminRoute/AdminRoute";
import Cdpaps from "../../Pages/CDPAP/Cdpaps";
import Contacts from "../../Pages/Contacts/Contacts/Contacts";
import Covid from "../../Pages/Covid/Covid";
import Albany from "../../Pages/DashBoard/Albany/Albany";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import BlogForm from "../../Pages/DashBoard/BlogForm/BlogForm";
import BronxOffice from "../../Pages/DashBoard/BronxOffice/BronxOffice";
import Brooklyn from "../../Pages/DashBoard/Brooklyn/Brooklyn";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import EditForm from "../../Pages/DashBoard/Employee/EditForm";
import EmployeeForm from "../../Pages/DashBoard/Employee/EmployeeForm";
import LongIsland from "../../Pages/DashBoard/LongIsland/LongIsland";
import QueensOffice from "../../Pages/DashBoard/QueensOffice/QueensOffice";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import HhhaCertification from "../../Pages/HhhaCertification/HhhaCertification";
import History from "../../Pages/History/History";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LogIn/Login";
import Main from "../../Pages/Main/Main";
import Pca from "../../Pages/PCA/Pca";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Register from "../../Pages/Register/Register";
import Resources from "../../Pages/Resources/Resources";
import Services from "../../Pages/Services/Services/Services";
import TermCondition from "../../Pages/TermCondition/TermCondition";
import Values from "../../Pages/Values/Values";

const { createBrowserRouter } = require("react-router-dom");

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contacts",
        element: (
          <Contacts></Contacts>
        ),
      },
     
      {
        path: "/covid",
        element: <Covid></Covid>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
     
      {
        path: "/hhaCertification",
        element: <HhhaCertification></HhhaCertification>,
      },
      {
        path: "/resources",
        element: <Resources></Resources>
      },
      {
        path: "/blog",
       element:<Blog></Blog>
      },
      {
        path: "/team",
       element:<TeamMembers></TeamMembers>
      },
      {
        path: "/termConditions",
       element:<TermCondition></TermCondition>
      },
      {
        path: "/values",
       element:<Values></Values>
      },
      {
        path: "/history",
       element:<History></History>
      },
      {
        path: '/blogs/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`),
        element:<SingleBlog></SingleBlog>
    },
    {
      path: "/employees/:id",
      loader: ({ params }) => fetch(`http://localhost:5000/employees/${params.id}`),
      element:<EditForm></EditForm>
    },
    {
      path: "/singleBlogs/:id",
      loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`),
      element:<EditBlogForm></EditBlogForm>
    },
    {
      path:'/missionVision',
      element:<MissionVision></MissionVision>
    }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <AllMessages></AllMessages>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/cdpap",
        element: (
          <AdminRoute>
            <Cdpaps></Cdpaps>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/pca",
        element: (
          <AdminRoute>
            <Pca></Pca>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUsers> </AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/longIsland",
        element: (
          <AdminRoute>
            <LongIsland></LongIsland>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/Queens",
        element: (
          <AdminRoute>
            <QueensOffice></QueensOffice>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/Bronx",
        element: (
          <AdminRoute>
            <BronxOffice></BronxOffice>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/Albany",
        element: (
          <AdminRoute>
            <Albany></Albany>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/brooklyn",
        element: (
          <AdminRoute>
            <Brooklyn></Brooklyn>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/blogForm",
        element: (
          <AdminRoute>
           <BlogForm></BlogForm>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/employee",
        element: (
          <AdminRoute>
           <EmployeeForm></EmployeeForm>
          </AdminRoute>
        ),
      },
     

    ],
  },
]);
export default Route;
