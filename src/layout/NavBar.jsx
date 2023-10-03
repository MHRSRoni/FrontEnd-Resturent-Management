import { NavLink, useNavigate } from "react-router-dom";

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
              <li>
                <NavLink className="md:text-base" to="/">
                  Home
                </NavLink>
              </li>

              <li>
                <a className="md:text-base" href="/#about-section">
                  About
                </a>
              </li>

              <li>
                <a className="md:text-base" href="/#footer-section">
                  Contact
                </a>
              </li>
              <li>
                <NavLink className="md:text-base" to="/menu">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink className="md:text-base" to="/login">
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1  text-base">
              <li>
                <NavLink className="mx-1" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <a className="mx-1" href="/#about-section">
                  About
                </a>
              </li>

              <li>
                <a className="md:text-base" href="/#footer-section">
                  Contact
                </a>
              </li>
              <li>
                <NavLink className="mx-1" to="/menu">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink className="mx-1" to="/login">
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
