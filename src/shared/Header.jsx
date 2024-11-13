
import {NavLink } from "react-router-dom";
const Header = () => {
      const user = false

      const handleLogOut = ()=>{
console.log('Logout')
      }
        const navLink =<>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/Community" >Community</NavLink></li>
            <li><NavLink to="/Contact Us," >Contact Us</NavLink></li>
            {!user && <>
                <li><NavLink to="/login" >Login</NavLink></li>
                 <li><NavLink to="/register" >Register</NavLink></li>
            </>}
            </>
    return (

            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-xl">Touris Guide</NavLink>
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
                            <li>
                            <a className="justify-between">
                               {
                                user.displayName
                               }
                            </a>
                            </li>
                        <li><a onClick={handleLogOut} className="btn btn-sm">Sign out</a></li>
                        </ul>
                        </>
                    }
                </div>
            
            </div>
            
    );
};

export default Header;