import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div>
      <h2 className="text-sm text-center mb-4">
        Hello <span className="text-secondary capitalize">Sumon Barai</span>
      </h2>
      <ul className="menu">
        <li>
          <Link>Manage My Account</Link>
          <ul>
            <li>
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/editProfile">Edit Profile</Link>
            </li>
            <li>
              <a>Change Password</a>
            </li>
          </ul>
        </li>
        <li>
          <a>My Wish list</a>
        </li>
        <li>
          <a>My Cart</a>
        </li>
        <li>
          <a>My Order</a>
        </li>
        <li>
          <a>My Reviews</a>
        </li>
        <li>
          <a>Miscellaneous</a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
