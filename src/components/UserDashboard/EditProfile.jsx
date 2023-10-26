import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { useAuth } from "../../contexts/AuthProvider";
import { editProfileRequest } from "../../ApiRequest/ApiRequest";
import LineLoader from "../../components/ui/LineLoader";

const EditProfile = () => {
  const [auth, setAuth] = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
    profilePic: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const reqBody = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNo: formData.mobile,
      address: formData.address,
      gender: formData.gender,
      profilePic: formData.profilePic,
    };

    const token = `${auth.token}`;

    try {
      const data = await editProfileRequest(reqBody, token);
      console.log("Form data submitted:", data);
      setLoading(false);
    } catch (error) {
      console.log("Error submitting form data:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">Edit profile</h2>
      </div>
      <div className="bg-white p-8 min-h-[300px]">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Write your first name... "
                value={formData.firstName}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Write your last name... "
                value={formData.lastName}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Write your email... "
                value={formData.email}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">
                Mobile
              </label>
              <input
                type="number"
                name="mobile"
                placeholder="Write your mobile number... "
                value={formData.mobile}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Write your address... "
                value={formData.address}
                onChange={handleInputChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Gender
              </label>
              <select
                name="gender"
                placeholder="Write your gender... "
                value={formData.gender}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium dark:text-white">
                Profile Picture
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                type="text"
                name="profilePic"
                placeholder="URL"
                value={formData.profilePic}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-48 mt-10">
            <Button
              text="Update"
              variant="basic"
              type="submit"
              disabled={loading}
            />
          </div>
        </form>
      </div>
      {loading && <LineLoader />}
    </div>
  );
};

export default EditProfile;
