import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown, MdOutlineAccountBalance } from "react-icons/md";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineGift,
} from "react-icons/ai";

const UserDashboardLink = () => {
  return (
    <>
      <li>
        <Link to="/user/dashboard/myProfile">
          <span className="text-2xl">
            <MdOutlineAccountBalance />
          </span>
          <span>Management My Account</span>
        </Link>
      </li>
      <li>
        <Link to="/user/dashboard/wishList">
          <span className="text-2xl">
            <AiOutlineHeart />
          </span>
          <span>My Wish list</span>
        </Link>
      </li>
      <li>
        <Link to="/user/dashboard/cartList">
          <span className="text-2xl">
            <AiOutlineShoppingCart />
          </span>
          <span>My Card list</span>
        </Link>
      </li>
      <li>
        <Link to="/user/dashboard/orderList">
          <span className="text-2xl">
            <AiOutlineGift />
          </span>
          <span>My Order</span>
        </Link>
      </li>
    </>
  );
};

const AllLink = () => {
  return (
    <>
      <li>
        <NavLink className="mx-1 navLink" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <a className="mx-1 navLink" href="/#about-section">
          About
        </a>
      </li>

      <li>
        <a className="md:text-base navLink" href="/#footer-section">
          Contact
        </a>
      </li>
      <li>
        <NavLink className="mx-1 navLink" to="/menu">
          Menu
        </NavLink>
      </li>
      {/* <li>
                <NavLink className="mx-1" to="/login">
                  Sign In
                </NavLink>
              </li> */}
      <li className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} className="mx-1">
          <div className="avatar">
            <div className="w-7 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>sumon barai</div>
          <MdKeyboardArrowDown />
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1]  menu  shadow bg-base-100 rounded-box w-60"
        >
          <UserDashboardLink />
          <li>
            <Link>LogOut</Link>
          </li>
        </ul>
      </li>
    </>
  );
};

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow-md sticky top-0 z-30 bg-base-100">
      <div className="container mx-auto ">
        <div className="navbar bg-base-100 justify-between">
          <div className="navbar-start">
            <div
              className="text-xl md:text-2xl lg:text-3xl cursor-pointer uppercase"
              onClick={() => navigate("/")}
            >
              Kachchi <span className="text-secondary">Palace</span>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current text-2xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <AllLink />
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1  text-base">
              <AllLink />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
