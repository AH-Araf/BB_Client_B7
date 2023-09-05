import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li>
            <Link to="/dashboard/mycart">
                <button className="btn gap-2 bg-slate-500">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-warning">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <button className="btn btn-error" onClick={handleLogOut}>LogOut</button>
                <span>{user?.displayName}</span>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* lg:hidden */}
                        <label tabIndex={0} className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-opacity-30 bg-black text-white rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>

                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;

