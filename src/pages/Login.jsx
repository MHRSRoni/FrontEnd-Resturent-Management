import { useState } from "react";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthProvider";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });

  const navigate = useNavigate();
  // const [auth, setAuth] = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const input = formData.emailOrUsername;
      const isEmail = input.includes("@");

      const requestData = isEmail
        ? { email: input, password: formData.password }
        : { username: input, password: formData.password };

      console.log(requestData);

      const { data } = await axios.post(
        "https://kachchi-palace-api-v1.onrender.com/api/v2/customer/login",
        requestData
      );

      // localStorage.setItem("auth", JSON.stringify(data));
      // setAuth({ ...auth, token: data.token, user: data.user });

      alert("Login Successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Login Failed. Try Again");
    }
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="w-4/5 sm:w-1/3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="block mb-2 mt-4 text-center text-2xl font-medium text-gray-900">
          Log In
        </h1>
        <div className="w-32 mx-auto h-0.5 mb-5 mt-0 bg-orange-300"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 px-4">
            <label className="block mb-2 text-sm text-left font-medium text-gray-800">
              Email or Username
            </label>
            <input
              type="text"
              name="emailOrUsername"
              placeholder="Enter Your Email or Username"
              value={formData.emailOrUsername}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>

          <div className="mb-6 px-4">
            <label className="block mb-2 text-sm text-left font-medium text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-8 px-4 text-center">
            <Button
              variant="basic"
              size="normal"
              type="button"
              text="Log In"
              onClick={handleSubmit}
            />
          </div>
          <h3 className="mt-3 mb-4 text-center">
            Create a new account?
            <span className="text-orange-500">
              <Link to="/register">Register</Link>
            </span>
          </h3>
        </form>
      </div>
    </section>
  );
};

export default Login;
