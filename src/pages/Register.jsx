import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/ui/Button";
// import { BASE_URL } from "../App";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

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
      const { data } = await axios.post(
        "https://kachchi-palace-api-v1.onrender.com/api/v2/customer/register",
        formData
      );

      const { data: data2 } = await axios.post(
        "https://kachchi-palace-api-v1.onrender.com/api/v2/customer/send-verification",

        { email: formData.email, emailSubject: "Email verification" }
      );

      localStorage.setItem("userEmail", formData.email);

      alert("Registration Successful");
      navigate("/otp");

      console.log(data);
    } catch (error) {
      console.log(error.message);
      alert("Registration Failed. Try Again");
    }
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="w-4/5 sm:w-1/3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow">
        <h1 className="block mb-2 mt-4 text-center text-2xl font-medium text-gray-900">
          Register
        </h1>
        <div className="w-32 mx-auto h-0.5 mb-6 mt-0 bg-orange-500"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 px-4">
            <label
              for="User name"
              className="block mb-2 text-sm text-left font-medium text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-6 px-4">
            <label
              for="email"
              className="block mb-2 text-sm text-left font-medium text-gray-800"
            >
              Email{" "}
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-6 px-4">
            <label
              for="password"
              className="block mb-2 text-sm text-left font-medium text-gray-800"
            >
              Password{" "}
            </label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-6 px-4">
            <label
              for="Confirm password"
              className="block mb-2 text-sm text-left font-medium text-gray-800"
            >
              Confirm password{" "}
            </label>
            <input
              type="password"
              placeholder="••••••••"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-8 px-4 text-center">
            <Button
              variant="basic"
              size="normal"
              type="submit"
              text=" Register"
            />
          </div>
          <h3 className="mt-3 mb-4 text-center">
            {" "}
            Already have an account?{" "}
            <span className="text-orange-500 hover:underline">
              <Link to="/login"> Login</Link>
            </span>{" "}
          </h3>
        </form>
      </div>
    </section>
  );
};

export default Register;
