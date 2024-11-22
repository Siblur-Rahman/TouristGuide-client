
import {Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from './../hooks/useAuth';
import useAdmin from "../hooks/useAdmin";
import useTourGuide from "../hooks/useTourGuide";
const Header = () => {
    const {pathname} = useLocation();
    const {user, logOut} = useAuth()
    const [isAdmin] = useAdmin();
    const [isTourGuide]= useTourGuide()
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
            navigate('/');
    }
    const navLink =<>
            <li><NavLink to="/" className={'lg:text-white uppercase text-xl'} >Home</NavLink></li>
            <li><NavLink to="/communitypage" className={'lg:text-white uppercase text-xl'} >Community</NavLink></li>
            <li><NavLink to="/blogs" className={`lg:text-white uppercase text-xl`} >Blogs</NavLink></li>
            <li><NavLink to="/contactus" className={`lg:text-white uppercase text-xl`} >Contact Us</NavLink></li>
            {!user && <>
                <li><NavLink to="/login"  className={'lg:text-white uppercase text-xl'}>Login</NavLink></li>
                 <li><NavLink to="/signup"  className={'lg:text-white uppercase text-xl'}>Register</NavLink></li>
            </>}
            </>
    return (

            <div className="navbar bg-[#2485B0] rounded-md fixed top-0 w-full z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="mybtn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                    </div>
                    <Link to="/" className="text-xl uppercase">Touris <span className="text-[#e05429]">Guide</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLink}
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    
                    {
                        user && <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img alt="" src={user.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                               {
                                user.displayName
                               }
                            {/* <li>
                                <NavLink className="" to={}>
                            </NavLink>
                            </li> */}
                        {
                            user && isAdmin && <li><Link to="/dashboard/adminprofile">Dashboard</Link></li>
                        }
                        {
                            user && isTourGuide && <li><Link to="/dashboard/guideprofile">Dashboard</Link></li>
                        }
                        {
                            user && !isTourGuide && !isAdmin && <li><Link to="/dashboard/touristprofile">Dashboard</Link></li>
                        }
                        <li><a onClick={handleLogOut} className="btn btn-sm">Sign out</a></li>
                        </ul>
                        </>
                    }
                </div>
            
            </div>
            
    );
};

export default Header;