import { NavLink, Outlet } from "react-router-dom";
import {FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    // ToDo: get isAmin from the database
    const {user}= useAuth()
    const isAdmin = true;
    const isTourGuide = false;
    // const isTourist = false;
    return (
        <div className="flex">
            {/*dashboard sidebar*/}
            <div className="w-64 h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                       user && !isAdmin && !isTourGuide &&
                            <>
                                <li><NavLink to="/dashboard/touristprofile">
                                    <FaHome />
                                    My Profile</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/bookings">
                                    <FaList />
                                    My Booking</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/wishlist">
                                    <FaList />
                                    My Wishlist</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/wishlist">
                                    request</NavLink>
                                </li>
                            </>
                    },
                    {
                        isTourGuide && 
                            <>
                                <li><NavLink to="/dashboard/guideprofile">
                                    <FaHome />
                                    My Profile</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/bookings">
                                    <FaList />
                                    My Booking</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/assigned">
                                    <FaList />
                                    My Assigned Tours</NavLink>
                                </li>
                            </>
                    },
                    {
                        isAdmin && 
                            <>
                                <li><NavLink to="/dashboard/adminprofile">
                                    <FaHome />
                                    My Profile</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/addpackage">
                                    <FaUtensils />
                                    addPackage</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/manageusers">
                                    <FaUsers />
                                    Manage users</NavLink>
                                </li>
                            </>
                    },

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li><NavLink to="/">
                        <FaHome />
                        Home</NavLink>
                    </li>
                    <li><NavLink to="/order/salad">
                        <FaSearch />
                        Menu</NavLink>
                    </li>
                    <li><NavLink to="/order/salad">
                        <FaEnvelope />
                        Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard Content */}
            <div className="flex-1 p-8">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;