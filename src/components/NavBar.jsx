import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow-md">
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
              <li>
                <NavLink className="md:text-base" to="/about">
                  About
                </NavLink>
              </li>

              <li>
                <NavLink className="md:text-base" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="md:text-base" to="/menu">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink className="md:text-base" to="/sing-up">
                  Sing Up
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/sing-up">Sign Up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
