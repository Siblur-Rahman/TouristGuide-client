import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home/Home";
import StoryDetailPage from './../pages/Home/StorySection/StoryDetailPage';
import PackageDetails from "../pages/packageDetails/packageDetails";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivatRoute from "./PrivatRoute";
import Dashboard from "../Layout/Dashboard";
import Touristprofile from './../pages/Dashboard/UserDashboard/Touristprofile';
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers";
import AdminProfile from "../pages/Dashboard/AdminDashboard/AdminProfile";
import TourGuideProfile from "../pages/Dashboard/TourGuideDashboard/TourGuideProfile";
import TouristBookings from "../pages/Dashboard/UserDashboard/TouristBookings";
import TouristWishlist from "../pages/Dashboard/UserDashboard/touristWishlist";
import AddPackage from "../pages/Dashboard/AdminDashboard/AddPackage";
import AdminRoute from "./AdminRoute";

export const stories = [
  { id: '1', title: 'Story 1', summary: 'This is story 1', content: 'Full content of story 1' },
  { id: '2', title: 'Story 2', summary: 'This is story 2', content: 'Full content of story 2' },
  { id: '3', title: 'Story 3', summary: 'This is story 3', content: 'Full content of story 3' },
  { id: '4', title: 'Story 4', summary: 'This is story 4', content: 'Full content of story 4' },
];
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
          path:'/signup',
          element:<SignUp/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
            path: "/stories/:id",
            element:<StoryDetailPage stories={stories}/>
        },
        {
          path:'/package-details/:id',
          element:<PackageDetails/>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/package/${params.id}`)
        }
      ]
    },
    {
      path:"dashboard",
      element:<PrivatRoute><Dashboard/></PrivatRoute>,
      children:[
        // Tourist routes
        {
          path:'touristprofile',
          element:<PrivatRoute><Touristprofile/></PrivatRoute>
        },
        {
          path:'touristbookings',
          element:<PrivatRoute><TouristBookings/></PrivatRoute>
        },
        {
          path:'wishlist',
          element:<PrivatRoute><TouristWishlist/></PrivatRoute>
        },
        // Adsmin routes
        {
          path:'manageusers',
          element:<PrivatRoute><ManageUsers/></PrivatRoute>
        },
        {
          path:'addpackage',
          element:<AdminRoute><AddPackage/></AdminRoute>
        },
        {
          path:'adminprofile',
          element:<PrivatRoute><AdminProfile/></PrivatRoute>
        },
        // Tour Guide routes
        {
          path:'guideprofile',
          element:<PrivatRoute><TourGuideProfile/></PrivatRoute>
        }
      ]
    }
    ])