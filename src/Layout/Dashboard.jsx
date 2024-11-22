import { NavLink, Outlet } from "react-router-dom";
import {FaEnvelope, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useTourGuide from "../hooks/useTourGuide";
import Swal  from 'sweetalert2';
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const {user} = useAuth();
    const [isAdmin] = useAdmin();
    const [isTourGuide]= useTourGuide()
    const axiosSecure = useAxiosSecure();
    const {data: tourist, refetch} = useQuery({
        queryKey:['tourist'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/user/tourist/${user.email}`
          );
            return res.data
        }
    });

    const handleRequest = tourist =>{
        axiosSecure.patch(`/user/request/${tourist?._id}`)
        .then(res =>{
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Qequest Successfull`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })
    }
    return (
        <div className="flex">
            {/*dashboard sidebar*/}
            <div className="w-64 h-[820px] bg-[#00BBA6]">
                <ul className="menu p-4 text-xl">
                    {
                       tourist &&
                            <>
                                <li><NavLink to="/dashboard/touristprofile">
                                    <FaHome />
                                    My Profile</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/touristbookings'>
                                    <FaList />
                                    My Booking</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/wishlist">
                                    <FaList />
                                    My Wishlist</NavLink>
                                </li>
                                <li>
                                        <button 
                                        onClick={()=>handleRequest(tourist)} 
                                        disabled={tourist?.request}
                                        className="mybtn btn-xs">
                                            {
                                                tourist?.request? 'Requested' : 'Request to be Tour Guide'
                                            }
                                        </button>
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
                                <li><NavLink to="/dashboard/contacts">
                                    <FaEnvelope />
                                    ContacInfo</NavLink>
                                </li>
                            </>
                    },

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li><NavLink to="/">
                        <FaHome />
                        Home</NavLink>
                    </li>
                    <li><NavLink to="/Community" ><FaUsers/> Community</NavLink></li>
                    <li><NavLink to="/Contact Us," >Contact Us</NavLink></li>
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