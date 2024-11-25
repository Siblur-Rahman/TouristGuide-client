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
import AllPackages from "../pages/AllPackages/AllPackages";
import PackageType from "../pages/PackageType/PackageType";
import TouristGuideDetails from "../pages/TouristGuideDetails/TouristGuideDetails";
import AllStories from './../pages/Home/AllStories/AllStories';
import CommunityPage from "../pages/CommutyPage/CommutyPage";
import Blogs from "../pages/Blogs/Blogs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ContactInfo from "../pages/Dashboard/AdminDashboard/ContactInfo";
import Assigned from "../pages/Dashboard/TourGuideDashboard/Assigned";
import Payment from './../pages/Dashboard/Payment/Payment';
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory/PaymentHistory";

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
          path:'/contactus',
          element:<ContactUs/>
        },
        {
            path: "/allstories",
            element:<AllStories/>
        },
        {
            path: "/stories/:id",
            element:<StoryDetailPage/>
        },
        {
          path:'/package-details/:id',
          element:<PackageDetails/>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/package/${params.id}`)
        },
        {
          path:'/pay/:packageId',
          element:<PrivatRoute><Payment/></PrivatRoute>
        },
      {
        path:'/allpack',
        element:<AllPackages/>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/packagesCount`)
      },
      {
        path:'/packageType/:type',
        element:<PackageType/>
      },
      {
        path:'/guideDetails/:email',
        element:<TouristGuideDetails/>
      },
      {
        path:'/communitypage',
        element:<CommunityPage/>
      },
      {
        path:'blogs',
        element:<Blogs/>
      }
      ]
    },
    {
      path:"dashboard",
      element:<PrivatRoute><Dashboard/></PrivatRoute>,
      children:[
        // Tourist routes
        {
          path:'/dashboard/touristprofile',
          element:<PrivatRoute><Touristprofile/></PrivatRoute>
        },
        {
          path:'/dashboard/touristbookings',
          element:<TouristBookings/>,
        },
        {
          path:'wishlist',
          element:<PrivatRoute><TouristWishlist/></PrivatRoute>
        },
        {
          path:'payment',
          element:<PrivatRoute><Payment/></PrivatRoute>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory/>
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
        },
        {
          path:'assigned',
          element:<PrivatRoute><Assigned/></PrivatRoute>
        },
        {
          path:'contacts',
          element:<ContactInfo/>
        }
      ]
    }
    ])