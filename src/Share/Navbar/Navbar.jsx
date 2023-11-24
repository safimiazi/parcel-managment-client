import { NavLink } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";

const Navbar = () => {
    const navList = <>
        <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-white border-y-2 " : ''} to='/'><li className="flex items-center">Home</li></NavLink>
        <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-white border-y-2 " : ''} to='/dashboard'><li className="flex items-center">Dashboard</li></NavLink>
        <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "mt-1" : ''} to='/dashboard'><BsFillBellFill className="text-xl"></BsFillBellFill></NavLink>
        <NavLink className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-white border-y-2 " : ''} to='/login'><li className="flex items-center">Login</li></NavLink>

        
    </>
    return (
        <div>
            <div className="navbar nav-footer text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow card-color rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <img src="https://ecourier.com.bd/wp-content/themes/ecourier-2.0/images/logo.svg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  flex gap-4 px-1 ">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost  btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] card-color p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;